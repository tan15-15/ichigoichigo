const lessons = [

  {
    date: "2026年10月3日",
    title: "奥さんと一緒に市場へ行こうとした",
    scene: "奥さんと一緒に市場へ行こうとして、必要なベトナム語を覚えた。",
    vietnamese: "Mình muốn đi chợ.",
    translation: "市場に行きたい。",
    words: [
      ["Mình", "自分／僕・私"],
      ["muốn", "～したい"],
      ["đi", "行く"],
      ["chợ", "市場"]
    ],
    extraWords: [
      ["về", "帰る"],
      ["mua", "買う"],
      ["ăn", "食べる"],
      ["uống", "飲む"],
      ["ngủ", "寝る"],
      ["chơi", "遊ぶ"]
    ],
    mainWord: "đi",
    mainMeaning: "行く"
  },

  {
    date: "2026年10月4日",
    title: "お母さんに「ドアを閉めて」とお願いしたい",
    scene: "家の中で、お母さんにドアを閉めてもらいたい場面があった。",
    vietnamese: "Đóng cửa dùm đi.",
    translation: "ドアを閉めてくれる？",
    words: [
      ["Đóng", "閉める"],
      ["cửa", "ドア・扉"],
      ["dùm", "～してくれる／～してもらえる"],
      ["đi", "～してね／お願いのニュアンス"]
    ],
    extraWords: [
      ["mở", "開ける"],
      ["tắt", "消す"],
      ["bật", "つける"]
    ],
    mainWord: "dùm",
    mainMeaning: "～してくれる？／～してもらえる？"
  },

  {
    date: "2026年10月5日",
    title: "今日は動詞をまとめて覚えてみる",
    scene: "実際の生活で使えるように、これまで出てきた動詞をまとめて整理した。",
    vietnamese: "Mình muốn học động từ.",
    translation: "動詞を勉強したい。",
    words: [
      ["muốn", "～したい"],
      ["học", "勉強する／学ぶ"],
      ["động từ", "動詞"]
    ],
    extraWords: [
      ["ăn", "食べる"],
      ["uống", "飲む"],
      ["ngủ", "寝る"],
      ["đi", "行く"],
      ["về", "帰る"],
      ["chơi", "遊ぶ"],
      ["mở", "開ける"],
      ["đóng", "閉める"],
      ["bật", "つける"],
      ["tắt", "消す"],
      ["ẵm", "赤ちゃんを抱っこする"],
      ["mua", "買う"],
      ["xem", "見る"],
      ["nghe", "聞く"],
      ["đến", "来る／到着する"]
    ],
    mainWord: "động từ",
    mainMeaning: "動詞"
  },

  {
    date: "2026年10月6日",
    title: "Mii、寝てる？",
    scene: "Miiが寝ているか、ちょっと気になった。",
    vietnamese: "Mii ngủ hả?",
    translation: "みい、寝てる？",
    words: [
      ["Mii", "みい"],
      ["ngủ", "寝る／眠る"],
      ["hả?", "～なの？／～してる？"]
    ],
    mainWord: "ngủ",
    mainMeaning: "寝る／眠る"
  },

  {
    date: "2026年10月7日",
    title: "お母さん、みいを抱っこしてくれる？",
    scene: "Miiをお母さんに抱っこしてもらいたい。",
    vietnamese: "Mẹ ẵm Mii dùm?",
    translation: "お母さん、みいを抱っこしてくれる？",
    words: [
      ["Mẹ", "お母さん"],
      ["ẵm", "赤ちゃんを抱っこする"],
      ["Mii", "みい"],
      ["dùm?", "～してくれる？"]
    ],
    mainWord: "dùm",
    mainMeaning: "～してくれる？／～してもらえる？"
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

  const vietnameseVoice = voices.find(voice =>
    voice.lang &&
    voice.lang.toLowerCase().startsWith("vi")
  );

  if (vietnameseVoice) {
    utterance.voice = vietnameseVoice;
  }

  speechSynthesis.speak(utterance);
}


function renderLesson() {

  const container = document.getElementById("lessons");

  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const date = params.get("date");

  let lesson;

  if (date) {
    lesson = lessons.find(item => item.date === date);
  } else {
    lesson = lessons[lessons.length - 1];
  }

  if (!lesson) {
    container.innerHTML = "<p>この日のレッスンはありません。</p>";
    return;
  }

  container.innerHTML = `

    <article class="today-card">

      <div class="today-label">
        🍓 ${lesson.date}
      </div>

      <h2>${lesson.title}</h2>

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


      ${
        lesson.extraWords
          ? `
          <section class="word-section">

            <h3>📚 ついでに覚えた動詞</h3>

            <div class="word-list">

              ${lesson.extraWords.map(word => `
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
          `
          : ""
      }


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


      <section class="archive">

        <h3>📚 これまでの一語</h3>

        ${lessons.map(item => `
          <p>
            <a href="?date=${item.date}">
              🍓 ${item.date}　${item.mainWord}
            </a>
          </p>
        `).join("")}

      </section>

    </article>

  `;
}


document.addEventListener("DOMContentLoaded", renderLesson);
