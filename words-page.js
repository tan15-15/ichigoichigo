
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

  function render() {
    const keyword = (search?.value || "").trim().toLowerCase();
    const selected = category?.value || "all";

    const filtered = vocabulary.filter(word => {
      const text = [
        word.v, word.m, word.p, word.o,
        word.r, word.e, word.j
      ].filter(Boolean).join(" ").toLowerCase();

      const matchesKeyword = text.includes(keyword);
      const part = String(word.p || "");

      let matchesCategory = selected === "all";

      if (selected === "動詞") {
        matchesCategory = /動詞/.test(part);
      } else if (selected === "名詞") {
        matchesCategory = /名詞/.test(part);
      } else if (selected === "表現") {
        matchesCategory = !/動詞|名詞/.test(part);
      }

      return matchesKeyword && matchesCategory;
    });

    if (filtered.length === 0) {
      root.innerHTML = `
        <div class="empty-words">
          🍓 見つかりませんでした。別の言葉で探してね。
        </div>
      `;
      return;
    }

    root.innerHTML = filtered.map(word => `
      <article class="word-card">
        <div class="word-card-top">
          <span class="word-label">🍓 ベトナム語</span>
          <button
            class="word-audio"
            type="button"
            data-speak="${escapeHTML(word.v || "")}"
            aria-label="${escapeHTML(word.v || "")}を聞く"
          >🔊 音声</button>
        </div>

        <h2>${escapeHTML(word.v || "")}</h2>

        <p class="word-meaning">
          ${escapeHTML(word.m || "")}
        </p>

        ${word.p ? `
          <p class="word-detail">
            <strong>種類：</strong>${escapeHTML(word.p)}
          </p>
        ` : ""}

        ${word.o ? `
          <p class="word-detail">
            <strong>関連する言葉：</strong>${escapeHTML(word.o)}
          </p>
        ` : ""}

        ${word.r ? `
          <p class="word-detail">
            <strong>覚え方：</strong>${escapeHTML(word.r)}
          </p>
        ` : ""}

        ${word.e ? `
          <p class="word-detail">
            <strong>例文：</strong>${escapeHTML(word.e)}
          </p>
        ` : ""}

        ${word.j ? `
          <p class="word-detail">
            <strong>日本語：</strong>${escapeHTML(word.j)}
          </p>
        ` : ""}
      </article>
    `).join("");
  }

  search?.addEventListener("input", render);
  category?.addEventListener("change", render);
  render();
}

document.addEventListener("DOMContentLoaded", renderWordsPage);
