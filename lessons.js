
const lessons = [
  {
    date: "2026年10月3日",
    title: "奥さんと一緒に市場へ行こうとした",
    scene: "奥さんと市場へ行くときに使いたい言葉を覚える。",
    vietnamese: "Hôm nay mình muốn đi chợ.",
    translation: "今日は市場に行きたい。",
    words: [["Hôm nay", "今日"], ["mình", "僕・私"], ["muốn", "～したい"], ["đi", "行く"], ["chợ", "市場"]],
    extraWords: [["về", "帰る"], ["mua", "買う"]],
    mainWord: "đi",
    mainMeaning: "行く"
  },
  {
    date: "2026年10月4日",
    title: "ドアを開けてくれる？",
    scene: "家でドアを開けてもらいたい場面。",
    vietnamese: "Mở cửa dùm đi.",
    translation: "ドアを開けてくれる？",
    words: [["Mở", "開ける"], ["cửa", "ドア・扉"], ["dùm", "～してくれる"], ["đi", "お願いのニュアンス"]],
    extraWords: [["đóng", "閉める"], ["tắt", "消す"], ["bật", "つける"]],
    mainWord: "dùm",
    mainMeaning: "～してくれる？"
  },
  {
    date: "2026年10月5日",
    title: "ミンと覚える動詞",
    scene: "家で使える動詞を覚えよう。",
    vietnamese: "Minh uống sữa.",
    translation: "ミンがミルクを飲む。",
    words: [["Minh", "ミン"], ["uống", "飲む"], ["sữa", "ミルク"], ["ăn", "食べる"], ["muốn", "～したい"], ["ngủ", "寝る"]],
    extraWords: [["đi", "行く"], ["chơi", "遊ぶ"], ["buồn ngủ", "眠い"]],
    mainWord: "uống",
    mainMeaning: "飲む"
  },
  {
    date: "2026年10月6日",
    title: "ミン、寝てる？",
    scene: "ミンが寝ているか聞いてみよう。",
    vietnamese: "Minh ngủ hả?",
    translation: "ミン、寝てる？",
    words: [["Minh", "ミン"], ["ngủ", "寝る・眠る"], ["hả", "～なの？（質問）"]],
    extraWords: [["thức", "起きている"], ["dậy", "起きる"]],
    mainWord: "ngủ",
    mainMeaning: "寝る・眠る"
  },
  {
    date: "2026年10月7日",
    title: "お母さん、ミンを抱っこしてくれる？",
    scene: "お母さんにミンを抱っこしてもらいたい。",
    vietnamese: "Mẹ ẵm Minh dùm?",
    translation: "お母さん、ミンを抱っこしてくれる？",
    words: [["Mẹ", "お母さん"], ["ẵm", "赤ちゃんを抱っこする"], ["Minh", "ミン"], ["dùm", "～してくれる？"]],
    extraWords: [["bế", "抱っこする（広く使われる表現）"]],
    mainWord: "ẵm",
    mainMeaning: "赤ちゃんを抱っこする"
  },
  {
    date: "2026年10月9日",
    title: "まだ寝てる？",
    scene: "朝、ミンがまだ寝ているか奥さんに聞く。",
    vietnamese: "Minh còn ngủ hả?",
    translation: "ミン、まだ寝てるの？",
    words: [["Minh", "ミン"], ["còn", "まだ～している・まだある"], ["ngủ", "寝る"], ["hả", "～なの？（質問）"]],
    extraWords: [["rồi", "もう・すでに"], ["chưa", "まだ～していない・もう～した？"]],
    mainWord: "còn",
    mainMeaning: "まだ～している・まだある"
  }
];

const vocabulary = [
  {v:"ăn",m:"食べる",p:"動詞",o:"uống（飲む）",r:"uống",e:"Minh ăn.",j:"ミンが食べる。"},
  {v:"bật",m:"つける・スイッチを入れる",p:"動詞",o:"tắt（消す）",r:"tắt",e:"Bật quạt.",j:"扇風機をつけて。"},
  {v:"buồn ngủ",m:"眠い",p:"形容詞・状態",o:"tỉnh táo（目が覚めている）",r:"ngủ",e:"Minh buồn ngủ.",j:"ミンは眠い。"},
  {v:"chưa",m:"まだ～していない／もう～した？",p:"副詞",o:"rồi（もう・すでに）",r:"rồi",e:"Ăn chưa?",j:"もう食べた？"},
  {v:"chợ",m:"市場",p:"名詞",o:"—",r:"mua（買う）",e:"Đi chợ.",j:"市場へ行く。"},
  {v:"chơi",m:"遊ぶ",p:"動詞",o:"ngủ（寝る）",r:"ngủ",e:"Minh chơi.",j:"ミンが遊ぶ。"},
  {v:"còn",m:"まだ～している・まだある",p:"副詞",o:"hết（なくなる・終わる）",r:"rồi",e:"Minh còn ngủ.",j:"ミンはまだ寝ている。"},
  {v:"cửa",m:"ドア・扉",p:"名詞",o:"—",r:"mở / đóng",e:"Mở cửa.",j:"ドアを開けて。"},
  {v:"đi",m:"行く",p:"動詞",o:"về（帰る）",r:"về",e:"Đi chợ.",j:"市場へ行く。"},
  {v:"đóng",m:"閉める",p:"動詞",o:"mở（開ける）",r:"mở",e:"Đóng cửa.",j:"ドアを閉めて。"},
  {v:"dậy",m:"起きる",p:"動詞",o:"ngủ（寝る）",r:"ngủ",e:"Dậy đi.",j:"起きて。"},
  {v:"dùm",m:"～してくれる・～してもらえる",p:"表現",o:"—",r:"Mở cửa dùm đi.",e:"Mở cửa dùm đi.",j:"ドアを開けてくれる？"},
  {v:"hôm nay",m:"今日",p:"時間表現",o:"hôm qua（昨日）",r:"hôm qua",e:"Hôm nay mình đi chợ.",j:"今日は市場へ行く。"},
  {v:"hả",m:"～なの？（南部でよく使う質問表現）",p:"助詞",o:"—",r:"hả",e:"Ngủ hả?",j:"寝てるの？"},
  {v:"mẹ",m:"お母さん",p:"名詞",o:"ba（お父さん）",r:"ba",e:"Mẹ ẵm Minh.",j:"お母さんがミンを抱っこする。"},
  {v:"mình",m:"僕・私／自分（文脈による）",p:"代名詞",o:"—",r:"mình",e:"Hôm nay mình muốn đi.",j:"今日は行きたい。"},
  {v:"mở",m:"開ける",p:"動詞",o:"đóng（閉める）",r:"đóng",e:"Mở cửa.",j:"ドアを開けて。"},
  {v:"mua",m:"買う",p:"動詞",o:"bán（売る）",r:"bán",e:"Mua sữa.",j:"ミルクを買う。"},
  {v:"muốn",m:"～したい",p:"動詞",o:"không muốn（～したくない）",r:"không muốn",e:"Mình muốn đi.",j:"行きたい。"},
  {v:"ngủ",m:"寝る・眠る",p:"動詞",o:"thức（起きている）",r:"thức",e:"Minh ngủ hả?",j:"ミン、寝てる？"},
  {v:"rồi",m:"もう・すでに／～した",p:"副詞",o:"chưa（まだ・もう～した？）",r:"chưa",e:"Ăn rồi.",j:"もう食べた。"},
  {v:"sữa",m:"ミルク・牛乳",p:"名詞",o:"—",r:"uống sữa",e:"Minh uống sữa.",j:"ミンがミルクを飲む。"},
  {v:"tắt",m:"消す・スイッチを切る",p:"動詞",o:"bật（つける）",r:"bật",e:"Tắt quạt.",j:"扇風機を消して。"},
  {v:"thức",m:"起きている",p:"動詞・状態",o:"ngủ（寝る）",r:"ngủ",e:"Minh thức rồi.",j:"ミンはもう起きている。"},
  {v:"uống",m:"飲む",p:"動詞",o:"ăn（食べる）",r:"ăn",e:"Minh uống sữa.",j:"ミンがミルクを飲む。"},
  {v:"về",m:"帰る",p:"動詞",o:"đi（行く）",r:"đi",e:"Mình về.",j:"帰る。"},
  {v:"ẵm",m:"赤ちゃんを抱っこする（南部でよく使う）",p:"動詞",o:"đặt xuống（下ろす）",r:"đặt xuống",e:"Mẹ ẵm Minh.",j:"お母さんがミンを抱っこする。"}
];

function speakVietnamese(text) {
  const status = document.getElementById("audio-status");
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    if (status) status.textContent = "このブラウザでは音声合成が使えません。";
    alert("このブラウザでは音声再生に対応していません。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "vi-VN";
  utterance.rate = 0.78;
  utterance.pitch = 1;
  utterance.volume = 1;
  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find(x => x.lang && x.lang.toLowerCase().startsWith("vi"));
  if (viVoice) utterance.voice = viVoice;
  if (status) status.textContent = viVoice
    ? "ベトナム語音声で再生を試しています。"
    : "端末のベトナム語音声を確認中です。音が出ない場合は端末の音声設定をご確認ください。";
  utterance.onerror = () => {
    if (status) status.textContent = "音声を再生できませんでした。端末・ブラウザのベトナム語音声対応をご確認ください。";
  };
  utterance.onend = () => {
    if (status) status.textContent = "再生が終わりました。";
  };
  window.speechSynthesis.speak(utterance);
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[c]);
}

function renderLesson() {
  const container = document.getElementById("lessons");
  if (!container) return;
  const selectedDate = new URLSearchParams(location.search).get("date");
  const lesson = lessons.find(x => x.date === selectedDate) || lessons[lessons.length - 1];

  container.innerHTML = `
    <article class="today-card" id="today">
      <div class="today-label">🍓 ${esc(lesson.date)}</div>
      <h2>${esc(lesson.title)}</h2>
      <section class="scene">
        <div class="scene-icon">👶</div><h3>今日の出来事</h3>
        <p>${esc(lesson.scene)}</p><p>「${esc(lesson.translation)}」</p>
        <p class="question">……でも、ベトナム語でどう言えばいいの？😂</p>
      </section>
      <section class="vietnamese-card">
        <div class="vietnamese-label">🇻🇳 南部ベトナム語</div>
        <div class="vietnamese">${esc(lesson.vietnamese)}</div>
        <button class="voice-button" data-speak="${esc(lesson.vietnamese)}">🔊 発音を聞く</button>
        <div class="voice-note">音が出ない場合は、端末の音量とベトナム語音声への対応をご確認ください。</div>
        <div class="translation">${esc(lesson.translation)}</div>
      </section>
      <section class="word-section"><h3>🔎 ひとつずつ見てみる</h3>
        <div class="word-list">${lesson.words.map(w => `<div class="word"><div class="word-vietnamese">${esc(w[0])}</div><div class="word-japanese">${esc(w[1])}</div><button class="glossary-audio" data-speak="${esc(w[0])}">🔊</button></div>`).join("")}</div>
      </section>
      ${lesson.extraWords?.length ? `<section class="word-section"><h3>📚 関連する言葉</h3><div class="word-list">${lesson.extraWords.map(w => `<div class="word"><div class="word-vietnamese">${esc(w[0])}</div><div class="word-japanese">${esc(w[1])}</div><button class="glossary-audio" data-speak="${esc(w[0])}">🔊</button></div>`).join("")}</div></section>` : ""}
      <section class="ichigo-word"><div class="small">🍓 今日の一期一語</div><span class="main">${esc(lesson.mainWord)}</span><div class="meaning">${esc(lesson.mainMeaning)}</div><button class="glossary-audio" data-speak="${esc(lesson.mainWord)}">🔊 発音を聞く</button></section>
      <section class="archive" id="words"><h3>📚 これまでの一語</h3><p>日付を押すと、その日のレッスンを復習できます。</p>
      ${lessons.map(x => `<p><a href="?date=${encodeURIComponent(x.date)}">🍓 ${esc(x.date)}　${esc(x.mainWord)}</a></p>`).join("")}</section>
    </article>`;

  addGlossary();
}

function addGlossary() {
  if (document.getElementById("glossary")) return;
  const style = document.createElement("style");
  style.textContent = `
    .glossary{margin-top:28px;padding:22px 16px;background:#fff;border-radius:26px;box-shadow:0 8px 25px #78646412}
    .glossary h2{text-align:center;color:#df5c73}
    .glossary-intro{text-align:center;font-size:13px;color:#8a7777}
    .glossary-search{width:100%;padding:13px;border:2px solid #ffd8e1;border-radius:15px;font:inherit}
    .glossary-filters{display:flex;flex-wrap:wrap;justify-content:center;gap:7px;margin:14px 0}
    .glossary-filter{border:1px solid #f4c8d2;border-radius:24px;padding:7px 11px;background:#fff7f9;color:#8c5964;cursor:pointer}
    .glossary-filter[aria-pressed=true]{background:#ed607a;color:white}
    .glossary-group{margin-top:18px}.glossary-group h3{background:#fff0f4;padding:7px 10px;border-radius:12px;color:#c6536b}
    .glossary-item{padding:12px;margin:8px 0;border:1px solid #f6e8eb;border-radius:15px}
    .glossary-item.search-hit{border:2px solid #e53955;background:#fff1f3}
    .glossary-vietnamese{font-size:20px;font-weight:bold;color:#578ab5}
    .glossary-pos{font-size:11px;background:#fff0f4;padding:3px 8px;border-radius:20px}
    .glossary-audio{border:0;border-radius:22px;background:#ed607a;color:white;padding:6px 10px;cursor:pointer}
    .glossary-example{font-size:13px;margin:7px 0}.glossary-muted{font-size:12px;color:#806e6e}
    .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
    @media(max-width:600px){.glossary{padding:17px 11px}.glossary-vietnamese{font-size:18px}}
  `;
  document.head.appendChild(style);

  const section = document.createElement("section");
  section.className = "glossary";
  section.id = "glossary";
  section.innerHTML = `
    <h2>📚 ベトナム語の単語帳</h2>
    <p class="glossary-intro">日本語でも検索OK！単語の音声・反対語・例文をまとめて復習🍓</p>
    <label class="sr-only" for="glossary-search">単語を検索</label>
    <input id="glossary-search" class="glossary-search" type="search" placeholder="例：寝る・開ける・ngủ">
    <div class="glossary-filters" id="glossary-filters"></div>
    <p id="glossary-count" class="glossary-muted" aria-live="polite"></p>
    <div id="glossary-results"></div>
  `;
  const menu = document.querySelector(".menu");
  if (menu) menu.before(section);
  else document.querySelector(".page")?.appendChild(section);

  const pos = ["すべて", ...new Set(vocabulary.map(x => x.p))];
  const filters = document.getElementById("glossary-filters");
  let activePos = "すべて";
  filters.innerHTML = pos.map(p => `<button class="glossary-filter" data-pos="${esc(p)}" aria-pressed="${p === activePos}">${esc(p)}</button>`).join("");

  filters.addEventListener("click", e => {
    const b = e.target.closest("button[data-pos]");
    if (!b) return;
    activePos = b.dataset.pos;
    filters.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.pos === activePos)));
    renderGlossary();
  });
  document.getElementById("glossary-search").addEventListener("input", renderGlossary);

  function renderGlossary() {
    const query = document.getElementById("glossary-search").value.trim().toLocaleLowerCase();
    const matches = vocabulary.filter(x =>
      (activePos === "すべて" || x.p === activePos) &&
      (!query || [x.v,x.m,x.p,x.o,x.r,x.e,x.j].join(" ").toLocaleLowerCase().includes(query))
    ).sort((a,b) => a.v.localeCompare(b.v, "vi"));
    document.getElementById("glossary-count").textContent = `${matches.length}語が見つかりました`;
    const results = document.getElementById("glossary-results");
    if (!matches.length) {
      results.innerHTML = `<p class="glossary-muted">見つかりませんでした。別の日本語やベトナム語で検索してみてください。</p>`;
      return;
    }
    const groups = {};
    matches.forEach(x => (groups[x.p] ||= []).push(x));
    results.innerHTML = Object.entries(groups).map(([p,items]) => `
      <section class="glossary-group"><h3>${esc(p)}</h3>
      ${items.map(x => `<article class="glossary-item ${query ? "search-hit" : ""}">
        <div class="glossary-vietnamese">${esc(x.v)}</div>
        <p><strong>${esc(x.m)}</strong> <span class="glossary-pos">${esc(x.p)}</span>
        <button class="glossary-audio" data-speak="${esc(x.v)}">🔊 聞く</button></p>
        <p class="glossary-muted">反対語・関連語：${esc(x.o)}</p>
        <p class="glossary-example"><strong>${esc(x.e)}</strong><br>${esc(x.j)}
        <button class="glossary-audio" data-speak="${esc(x.e)}">🔊 例文を聞く</button></p>
      </article>`).join("")}</section>
    `).join("");
  }
  renderGlossary();
}

document.addEventListener("click", e => {
  const button = e.target.closest("[data-speak]");
  if (button) speakVietnamese(button.dataset.speak);
});

document.addEventListener("DOMContentLoaded", renderLesson);
