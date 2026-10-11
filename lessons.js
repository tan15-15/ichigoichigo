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
  },
  {
    date: "2026年10月10日",
    title: "もう朝なのに、まだ起きてないの？",
    scene: "朝になってもミンが寝ている。奥さんに聞いてみよう。",
    vietnamese: "Sáng rồi mà Minh chưa dậy hả?",
    translation: "もう朝なのに、ミンはまだ起きてないの？",
    words: [
      ["Sáng rồi", "もう朝"],
      ["mà", "～なのに"],
      ["Minh", "ミン"],
      ["chưa", "まだ～していない"],
      ["dậy", "起きる"],
      ["hả", "～なの？"]
    ],
    extraWords: [["ngủ", "寝る"], ["thức", "起きている"]],
    mainWord: "chưa",
    mainMeaning: "まだ～していない"
  },
  {
    date: "2026年10月11日",
    title: "ミン、まだ寝てる？ 起きてミルク飲もうね",
    scene: "朝、まだ寝ているミンに声をかけて、起きたらミルクを飲もうと伝える。",
    vietnamese: "Minh ơi, còn ngủ hả? Dậy uống sữa nha.",
    translation: "ミン、まだ寝てる？ 起きてミルクを飲もうね。",
    words: [
      ["Minh ơi", "ミン、ねえ"],
      ["còn", "まだ～している"],
      ["ngủ", "寝る"],
      ["hả", "～なの？"],
      ["Dậy", "起きて"],
      ["uống", "飲む"],
      ["sữa", "ミルク"],
      ["nha", "～しようね・～してね（やわらかい言い方）"]
    ],
    extraWords: [["chưa", "まだ～していない"], ["rồi", "もう・すでに"]],
    mainWord: "còn",
    mainMeaning: "まだ～している・まだある"
  }
];
const vocabulary = [
  {v:"ăn",m:"食べる",p:"動詞",o:"uống（飲む）",e:"Minh ăn.",j:"ミンが食べる。"},
  {v:"bật",m:"つける・スイッチを入れる",p:"動詞",o:"tắt（消す）",e:"Bật quạt.",j:"扇風機をつけて。"},
  {v:"buồn ngủ",m:"眠い",p:"状態",o:"tỉnh táo（目が覚めている）",e:"Minh buồn ngủ.",j:"ミンは眠い。"},
  {v:"chưa",m:"まだ～していない／もう～した？",p:"副詞",o:"rồi（もう・すでに）",e:"Ăn chưa?",j:"もう食べた？"},
  {v:"chợ",m:"市場",p:"名詞",o:"—",e:"Đi chợ.",j:"市場へ行く。"},
  {v:"chơi",m:"遊ぶ",p:"動詞",o:"—",e:"Minh chơi.",j:"ミンが遊ぶ。"},
  {v:"còn",m:"まだ～している・まだある",p:"副詞",o:"hết（なくなる・終わる）",e:"Minh còn ngủ.",j:"ミンはまだ寝ている。"},
  {v:"cửa",m:"ドア・扉",p:"名詞",o:"—",e:"Mở cửa.",j:"ドアを開けて。"},
  {v:"đi",m:"行く",p:"動詞",o:"về（帰る）",e:"Đi chợ.",j:"市場へ行く。"},
  {v:"đóng",m:"閉める",p:"動詞",o:"mở（開ける）",e:"Đóng cửa.",j:"ドアを閉めて。"},
  {v:"dậy",m:"起きる",p:"動詞",o:"ngủ（寝る）",e:"Dậy đi.",j:"起きて。"},
  {v:"dùm",m:"～してくれる・～してもらえる",p:"表現",o:"—",e:"Mở cửa dùm đi.",j:"ドアを開けてくれる？"},
  {v:"hôm nay",m:"今日",p:"時間表現",o:"hôm qua（昨日）",e:"Hôm nay mình muốn đi chợ.",j:"今日は市場に行きたい。"},
  {v:"hả",m:"～なの？（南部でよく使う質問表現）",p:"表現",o:"—",e:"Ngủ hả?",j:"寝てるの？"},
  {v:"mẹ",m:"お母さん",p:"名詞",o:"ba（お父さん）",e:"Mẹ ẵm Minh.",j:"お母さんがミンを抱っこする。"},
  {v:"mình",m:"僕・私／自分（文脈による）",p:"代名詞",o:"—",e:"Hôm nay mình muốn đi.",j:"今日は行きたい。"},
  {v:"mở",m:"開ける",p:"動詞",o:"đóng（閉める）",e:"Mở cửa.",j:"ドアを開けて。"},
  {v:"mua",m:"買う",p:"動詞",o:"bán（売る）",e:"Mua sữa.",j:"ミルクを買う。"},
  {v:"muốn",m:"～したい",p:"動詞",o:"không muốn（～したくない）",e:"Mình muốn đi.",j:"行きたい。"},
  {v:"ngủ",m:"寝る・眠る",p:"動詞",o:"thức（起きている）",e:"Minh ngủ hả?",j:"ミン、寝てる？"},
  {v:"rồi",m:"もう・すでに／～した",p:"副詞",o:"chưa（まだ・もう～した？）",e:"Ăn rồi.",j:"もう食べた。"},
  {v:"sữa",m:"ミルク・牛乳",p:"名詞",o:"—",e:"Minh uống sữa.",j:"ミンがミルクを飲む。"},
  {v:"tắt",m:"消す・スイッチを切る",p:"動詞",o:"bật（つける）",e:"Tắt quạt.",j:"扇風機を消して。"},
  {v:"thức",m:"起きている",p:"状態",o:"ngủ（寝る）",e:"Minh thức rồi.",j:"ミンはもう起きている。"},
  {v:"uống",m:"飲む",p:"動詞",o:"ăn（食べる）",e:"Minh uống sữa.",j:"ミンがミルクを飲む。"},
  {v:"về",m:"帰る",p:"動詞",o:"đi（行く）",e:"Mình về.",j:"帰る。"},
  {v:"ẵm",m:"赤ちゃんを抱っこする（南部でよく使う）",p:"動詞",o:"đặt xuống（下ろす）",e:"Mẹ ẵm Minh.",j:"お母さんがミンを抱っこする。"},
  {v:"sáng",m:"朝・明るい",p:"名詞・状態",o:"tối（夜・暗い）",e:"Sáng rồi.",j:"もう朝だよ。"},
  {v:"mà",m:"～なのに・～だけど",p:"表現",o:"—",e:"Sáng rồi mà Minh chưa dậy.",j:"もう朝なのに、ミンはまだ起きていない。"},
  {v:"ơi",m:"呼びかけに使う言葉",p:"表現",o:"—",e:"Minh ơi!",j:"ミン、ねえ！"},
  {v:"nha",m:"～しようね・～してね（やわらかい言い方）",p:"表現",o:"—",e:"Dậy uống sữa nha.",j:"起きてミルクを飲もうね。"}
];
function speakVietnamese(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
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
  const viVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("vi"));
  if (viVoice) utterance.voice = viVoice;
  window.speechSynthesis.speak(utterance);
}
function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
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
        <div class="scene-icon">👶</div>
        <h3>今日の出来事</h3>
        <p>${esc(lesson.scene)}</p>
        <p>「${esc(lesson.translation)}」</p>
        <p class="question">……でも、ベトナム語でどう言えばいいの？😂</p>
      </section>
      <section class="vietnamese-card">
        <div class="vietnamese-label">🇻🇳 南部ベトナム語</div>
        <div class="vietnamese">${esc(lesson.vietnamese)}</div>
        <button class="voice-button" data-speak="${esc(lesson.vietnamese)}">🔊 発音を聞く</button>
        <div class="voice-note">音が出ない場合は、端末の音量とベトナム語音声への対応をご確認ください。</div>
        <div class="translation">${esc(lesson.translation)}</div>
      </section>
      <section class="word-section">
        <h3>🔎 ひとつずつ見てみる</h3>
        <div class="word-list">${lesson.words.map(w => `
          <div class="word">
            <div class="word-vietnamese">${esc(w[0])}</div>
            <div class="word-japanese">${esc(w[1])}</div>
            <button class="glossary-audio" data-speak="${esc(w[0])}">🔊</button>
          </div>`).join("")}
        </div>
      </section>
      ${lesson.extraWords?.length ? `
        <section class="word-section">
          <h3>📚 関連する言葉</h3>
          <div class="word-list">${lesson.extraWords.map(w => `
            <div class="word">
              <div class="word-vietnamese">${esc(w[0])}</div>
              <div class="word-japanese">${esc(w[1])}</div>
              <button class="glossary-audio" data-speak="${esc(w[0])}">🔊</button>
            </div>`).join("")}
          </div>
        </section>` : ""}
      <section class="ichigo-word">
        <div class="small">🍓 今日の一期一語</div>
        <span class="main">${esc(lesson.mainWord)}</span>
        <div class="meaning">${esc(lesson.mainMeaning)}</div>
        <button class="glossary-audio" data-speak="${esc(lesson.mainWord)}">🔊 発音を聞く</button>
      </section>
      <section class="archive" id="words">
        <h3>📚 これまでの一語</h3>
        <p>日付を押すと、その日のレッスンを復習できます。</p>
        ${[...lessons].reverse().map(x => {
          const keyWords = (x.archiveWords || x.words.slice(0, 5).map(w => w[0])).slice(0, 5);
          return `<p><a href="./index.html?date=${encodeURIComponent(x.date)}#today">🍓 ${esc(x.date)}　${keyWords.map(esc).join(" ・ ")}</a></p>`;
        }).join("")}
        <p><a href="./words.html">📚 単語を検索・復習する</a></p>
      </section>
    </article>`;
}
document.addEventListener("click", e => {
  const button = e.target.closest("[data-speak]");
  if (button) speakVietnamese(button.dataset.speak);
});
document.addEventListener("DOMContentLoaded", renderLesson);
