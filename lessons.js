const lessons = [
  {
    date: "2026年10月6日",
    title: "Mii、寝てる？",
    scene: "Miiが寝ているか、ちょっと気になった。",
    vietnamese: "Mii ngủ hả?",
    translation: "みい、寝てる？",
    words: [
      ["Mii", "みい"],
      ["ngủ", "寝る／眠る"],
      ["hả?", "〜なの？／〜してる？"]
    ],
    mainWord: "ngủ",
    mainMeaning: "寝る／眠る"
  },

  {
    date: "2026年10月7日",
    title: "お母さん、みいを抱っこしてくれる？",
    scene: "Miiを義理のお母さんに抱っこしてもらいたい。",
    vietnamese: "Mẹ ẵm Mii dùm?",
    translation: "お母さん、みいを抱っこしてくれる？",
    words: [
      ["Mẹ", "お母さん"],
      ["ẵm", "赤ちゃんを抱っこする"],
      ["Mii", "みい"],
      ["dùm?", "〜してくれる？"]
    ],
    mainWord: "dùm",
    mainMeaning: "〜してくれる？／〜してもらえる？"
  }
];

function speakVietnamese(text) {
  if (!window.speechSynthesis) {
    alert("この端末では音声再生に対応していません。");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "vi-VN";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();

  const vietnameseVoice = voices.find(voice =>
    voice.lang &&
    voice.lang.toLowerCase().startsWith("vi")
  );

  if (vietnameseVoice) {
    utterance.voice = vietnameseVoice;
  }

  window.speechSynthesis.speak(utterance);
}

function renderLessons() {
  const container = document.getElementById("lessons");

  if (!container) return;

  container.innerHTML = lessons.map(lesson => `
    <article class="today-card">

      <div class="today-label">
        🍓 ${lesson.date}
      </div>

      <h2>
        ${lesson.title}
      </h2>

      <section class="scene">

        <div class="scene-icon">👶</div>

        <h3>今日の出来事</h3>

        <p>${lesson.scene}</p>

        <p>
          「${lesson.translation}」
        </p>

        <p class="question">
          ……でも、<br>
          ベトナム語でどう言えばいいの？😂
        </p>

      </section>

      <section class="vietnamese-card">

        <div class="vietnamese-label">
          🇻🇳 南部ベトナム語
        </div>

        <div class="vietnamese">
          ${lesson.vietnamese}
        </div>

        <button
          class="voice-button"
          onclick="speakVietnamese('${lesson.vietnamese}')">
          🔊 発音を聞く
        </button>

        <div class="voice-note">
          ※iPhoneのマナーモードをOFFにすると音声が出ます
        </div>

        <div class="translation">
          ${lesson.translation}
        </div>

      </section>

      <section class="word-section">

        <h3>🔎 ひとつずつ見てみる</h3>

        <div class="word-list">

          ${lesson.words.map(word => `
            <div class="word">
              <div class="word-vietnamese">
                ${word[0]}
              </div>

              <div class="word-japanese">
                ${word[1]}
              </div>
            </div>
          `).join("")}

        </div>

      </section>

      <section class="ichigo-word">

        <div class="small">
          🍓 今日の一期一語
        </div>

        <span class="main">
          ${lesson.mainWord}
        </span>

        <div class="meaning">
          ${lesson.mainMeaning}
        </div>

      </section>

    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderLessons);
