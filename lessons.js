const lessons = [
  {
    date: "2026年10月3日",
    title: "奥さんと一緒に市場へ行こうとした",
    scene: "奥さんと一緒に市場へ行こうとして、実際に使いたい言葉から勉強した。",
    vietnamese: "Hôm nay mình muốn đi chợ.",
    translation: "今日は市場に行きたい。",
    words: [["Hôm nay", "今日"], ["mình", "自分／僕・私"], ["muốn", "～したい"], ["đi", "行く"], ["chợ", "市場"]],
    extraWords: [["về", "帰る"], ["mua", "買う"]],
    mainWord: "đi",
    mainMeaning: "行く"
  },
  {
    date: "2026年10月4日",
    title: "お母さんに「ドアを閉めて」と頼みたい",
    scene: "家で、お母さんにドアを閉めてもらいたい場面があった。",
    vietnamese: "Mở cửa dùm đi.",
    translation: "ドアを開けてくれる？",
    words: [["Mở", "開ける"], ["cửa", "ドア・扉"], ["dùm", "～してくれる／～してもらえる"], ["đi", "お願いのニュアンス"]],
    extraWords: [["đóng", "閉める"], ["tắt", "消す"], ["bật", "つける"]],
    mainWord: "dùm",
    mainMeaning: "～してくれる？／～してもらえる？"
  },
  {
    date: "2026年10月5日",
    title: "今日は動詞を5つ覚える",
    scene: "実際の生活で使えるように、動詞を中心に勉強した。まずは5つ。難しいことは考えず、使いながら覚えていく。",
    vietnamese: "Minh uống sữa.",
    translation: "ミンがミルクを飲む。",
    words: [["uống", "飲む"], ["ăn", "食べる"], ["muốn", "～したい"], ["buồn ngủ", "眠い／眠そう"], ["ngủ", "寝る"]],
    extraWords: [["đi", "行く"], ["chơi", "遊ぶ"]],
    mainWord: "uống",
    mainMeaning: "飲む"
  },
  {
    date: "2026年10月6日",
    title: "ミン、寝てる？",
    scene: "ミンが寝ているか、ちょっと気になった。",
    vietnamese: "Minh ngủ hả?",
    translation: "ミン、寝てる？",
    words: [["Minh", "ミン"], ["ngủ", "寝る／眠る"], ["hả?", "～なの？／～してる？"]],
    mainWord: "ngủ",
    mainMeaning: "寝る／眠る"
  },
  {
    date: "2026年10月7日",
    title: "お母さん、ミンを抱っこしてくれる？",
    scene: "ミンをお母さんに抱っこしてもらいたい。",
    vietnamese: "Mẹ ẵm Minh dùm?",
    translation: "お母さん、ミンを抱っこしてくれる？",
    words: [["Mẹ", "お母さん"], ["ẵm", "赤ちゃんを抱っこする"], ["Minh", "ミン"], ["dùm?", "～してくれる？"]],
    mainWord: "dùm",
    mainMeaning: "～してくれる？／～してもらえる？"
  },
  {
    date: "2026年10月9日",
    title: "まだ寝てる？",
    scene: "朝、ミンがまだ寝ているか奥さんに聞く。",
    vietnamese: "Minh còn ngủ hả?",
    translation: "ミン、まだ寝てるの？",
    words: [["Minh", "ミン"], ["còn", "まだ～している"], ["ngủ", "寝る"], ["hả", "～なの？（質問）"]],
    extraWords: [],
    mainWord: "còn",
    mainMeaning: "まだ～している・まだ～がある"
  },

  {
    "date": "2026年10月10日",
    "title": "動作確認テスト",
    "scene": "ワークフローの動作確認",
    "vietnamese": "Xin chào.",
    "translation": "こんにちは。",
    "words": [
      [
        "Xin chào",
        "こんにちは"
      ]
    ],
    "mainWord": "Xin chào",
    "mainMeaning": "こんにちは",
    "extraWords": []
  }

];

function speakVietnamese(text) {
  if (!window.speechSynthesis) {
    alert("この端末では音声再生に対応していません。");
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "vi-VN";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  utterance.volume = 1;
  const voices = speechSynthesis.getVoices();
  const vietnameseVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("vi"));
  if (vietnameseVoice) utterance.voice = vietnameseVoice;
  speechSynthesis.speak(utterance);
}

function renderLesson() {
  const container = document.getElementById("lessons");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const selectedDate = params.get("date");
  const lesson = lessons.find(item => item.date === selectedDate) || lessons[lessons.length - 1];

  const todayMenu = document.querySelector(".menu a[href='#today']");
  if (todayMenu) {
    todayMenu.href = "./";
    todayMenu.innerHTML = `🍓<br>今日覚えた<br>${lesson.date}のベトナム語`;
  }
  const archiveMenu = document.querySelector(".menu a[href='#words']");
  if (archiveMenu) archiveMenu.href = "#words";

  container.innerHTML = `
    <article class="today-card" id="today">
      <div class="today-label">🍓 ${lesson.date}</div>
      <h2>${lesson.title}</h2>
      <section class="scene">
        <div class="scene-icon">👶</div>
        <h3>今日の出来事</h3>
        <p>${lesson.scene}</p>
        <p>「${lesson.translation}」</p>
        <p class="question">……でも、<br>ベトナム語でどう言えばいいの？😂</p>
      </section>
      <section class="vietnamese-card">
        <div class="vietnamese-label">🇻🇳 南部ベトナム語</div>
        <div class="vietnamese">${lesson.vietnamese}</div>
        <button class="voice-button" onclick="speakVietnamese('${lesson.vietnamese}')">🔊 発音を聞く</button>
        <div class="voice-note">※iPhoneのマナーモードをOFFにすると音声が出ます</div>
        <div class="translation">${lesson.translation}</div>
      </section>
      <section class="word-section">
        <h3>🔎 ひとつずつ見てみる</h3>
        <div class="word-list">
          ${lesson.words.map(word => `<div class="word"><div class="word-vietnamese">${word[0]}</div><div class="word-japanese">${word[1]}</div></div>`).join("")}
        </div>
      </section>
      ${lesson.extraWords && lesson.extraWords.length ? `
        <section class="word-section">
          <h3>📚 ついでに覚えた言葉</h3>
          <div class="word-list">
            ${lesson.extraWords.map(word => `<div class="word"><div class="word-vietnamese">${word[0]}</div><div class="word-japanese">${word[1]}</div></div>`).join("")}
          </div>
        </section>` : ""}
      <section class="ichigo-word">
        <div class="small">🍓 今日の一期一語</div>
        <span class="main">${lesson.mainWord}</span>
        <div class="meaning">${lesson.mainMeaning}</div>
      </section>
      <section class="archive" id="words">
        <h3>📚 これまでの一語</h3>
        <p>復習しよう</p>
        ${lessons.map(item => `<p><a href="?date=${encodeURIComponent(item.date)}">🍓 ${item.date}　${item.mainWord}</a></p>`).join("")}
      </section>
    </article>`;
}

document.addEventListener("DOMContentLoaded", renderLesson);
