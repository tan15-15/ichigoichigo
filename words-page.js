function renderWordsPage() {
  const root = document.getElementById("words-list");
  const search = document.getElementById("word-search");
  const category = document.getElementById("word-category");

  if (!root || typeof vocabulary === "undefined") return;

  const categories = [
    { value: "all", label: "全部の一語 🍓" },
    { value: "動詞", label: "動詞 🌱" },
    { value: "名詞", label: "名詞 🍓" },
    { value: "表現", label: "会話の表現 💬" }
  ];

  if (category && category.options.length === 0) {
    categories.forEach(item => {
      const option = document.createElement("option");
      option.value = item.value;
      option.textContent = item.label;
      category.appendChild(option);
    });
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function normalize(value) {
    return String(value ?? "").normalize("NFC").toLocaleLowerCase("ja");
  }

  function render() {
    const keyword = normalize(search?.value.trim() || "");
    const selected = category?.value || "all";

    const filtered = vocabulary
      .filter(word => {
        const part = String(word.p || "");

        const matchesCategory =
          selected === "all" ||
          (selected === "動詞" && part.includes("動詞")) ||
          (selected === "名詞" && part.includes("名詞")) ||
          (selected === "表現" && !part.includes("動詞") && !part.includes("名詞"));

        // 単語・日本語の意味・反対語だけを検索する。
        // 例文や同類語は検索対象にしない。
        const matchesMain =
          normalize(word.v).includes(keyword) ||
          normalize(word.m).includes(keyword);

        const matchesOpposite = normalize(word.o || "").includes(keyword);
        const matchesSearch = !keyword || matchesMain || matchesOpposite;

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (!keyword) return a.v.localeCompare(b.v, "vi");

        // 検索した単語そのものを先頭にする。
        // 反対語に一致したカードは、その後に表示する。
        const score = word => {
          const vietnamese = normalize(word.v);
          const meaning = normalize(word.m);
          const opposite = normalize(word.o || "");

          if (vietnamese === keyword || meaning === keyword) return 0;
          if (vietnamese.startsWith(keyword) || meaning.startsWith(keyword)) return 1;
          if (vietnamese.includes(keyword) || meaning.includes(keyword)) return 2;
          if (opposite.includes(keyword)) return 3;

          return 4;
        };

        return score(a) - score(b) || a.v.localeCompare(b.v, "vi");
      });

    if (!filtered.length) {
      root.innerHTML = `
        <div class="empty-words">
          🍓 見つかりませんでした。別の言葉で探してね。
        </div>`;
      return;
    }

    root.innerHTML = filtered.map(word => `
      <article class="word-card">
        <div class="word-card-top">
          <span class="word-label">🍓 ベトナム語</span>
          <button
            class="word-audio"
            type="button"
            data-speak="${escapeHTML(word.v)}"
            aria-label="${escapeHTML(word.v)}を聞く"
          >🔊 音声</button>
        </div>

        <h2 lang="vi">${escapeHTML(word.v)}</h2>
        <p class="word-meaning">${escapeHTML(word.m)}</p>

        ${word.p ? `
          <p class="word-detail">
            <strong>種類：</strong>${escapeHTML(word.p)}
          </p>` : ""}

        ${word.o && word.o !== "—" ? `
          <p class="word-detail">
            <strong>反対語：</strong>${escapeHTML(word.o)}
          </p>` : ""}

        ${word.e ? `
          <p class="word-detail">
            <strong>例文：</strong>
            <span lang="vi">${escapeHTML(word.e)}</span>
            <button
              class="word-audio"
              type="button"
              data-speak="${escapeHTML(word.e)}"
              aria-label="例文を聞く"
            >🔊 例文の音声</button>
          </p>` : ""}

        ${word.j ? `
          <p class="word-detail">
            <strong>日本語：</strong>${escapeHTML(word.j)}
          </p>` : ""}
      </article>
    `).join("");
  }

  search?.addEventListener("input", render);
  category?.addEventListener("change", render);
  render();
}

document.addEventListener("DOMContentLoaded", renderWordsPage);
