let currentUtterance = null;

// 音声読み上げ共通関数
function speakVietnamese(text) {
  if (!text) return;
  if (!("speechSynthesis" in window)) {
    alert("お使いのブラウザは音声読み上げに対応していません。");
    return;
  }
  
  window.speechSynthesis.cancel();
  
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = "vi-VN";
  currentUtterance.rate = 0.78;
  currentUtterance.pitch = 1;
  currentUtterance.volume = 1;

  window.speechSynthesis.speak(currentUtterance);
}

// 互換性用
function playAudio(text) {
  speakVietnamese(text);
}

// data-speak 属性を持つボタンの自動クリックイベント
document.addEventListener("click", e => {
  const button = e.target.closest("[data-speak]");
  if (button) {
    const text = button.dataset.speak || button.getAttribute("data-text");
    if (text) speakVietnamese(text);
  }
});

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[c]);
}

function renderExample(example) {
  return `
    <div class="lesson-example">
      <div class="vietnamese">${esc(example.v)}</div>
      <button class="glossary-audio" data-speak="${esc(example.v)}">🔊 音声</button>
      <p>${esc(example.j)}</p>
      <p class="example-words">${esc(example.w)}</p>
    </div>`;
}

function ensureLessonStyles() {
  if (document.getElementById("lesson-generated-styles")) return;
  const style = document.createElement("style");
  style.id = "lesson-generated-styles";
  style.textContent = `
    .archive-note { font-size: 10px; line-height: 1.3; white-space: nowrap; text-align: center; color: #9a8585; margin: 0 0 12px; }
    .archive-item { padding: 10px 12px; margin: 8px 0; border-radius: 14px; background: #fff8fb; border: 1px solid #f7e1e7; }
    .archive-item a { display: block; text-decoration: none; color: #5b5555; }
    .archive-date { font-size: 11px; line-height: 1.3; color: #9a8585; margin-bottom: 3px; }
    .archive-title { display: block; font-size: 14px; line-height: 1.45; font-weight: 700; color: #df5c73; }
    .archive-words { display: block; font-size: 11px; line-height: 1.5; color: #7f7474; margin-top: 3px; overflow-wrap: anywhere; }
    .scene-icon { font-size: 38px; }
  `;
  document.head.appendChild(style);
}

// トップページなどでレッスンを動的描画する関数
function renderLesson() {
  ensureLessonStyles();
  const container = document.getElementById("lessons");
  if (!container || typeof lessons === 'undefined') return;

  const selectedDate = new URLSearchParams(location.search).get("date");
  const lesson = lessons.find(x => x.date === selectedDate) || lessons[lessons.length - 1];

  let formattedWords = [];
  if (lesson.words) {
    formattedWords = lesson.words.map(w => Array.isArray(w) ? w : [w.v, w.j]);
  }

  let formattedExtraWords = [];
  if (lesson.extraWords) {
    formattedExtraWords = lesson.extraWords.map(w => Array.isArray(w) ? w : [w.v, w.j]);
  }

  container.innerHTML = `
    <article class="today-card" id="today">
      <div class="today-label">🍓 ${esc(lesson.date)}</div>
      <h2>${esc(lesson.title)}</h2>
      <section class="scene">
        <div class="scene-icon">${esc(lesson.sceneIcon || "🍓")}</div>
        <h3>${esc(lesson.sceneTitle || "今日の出来事")}</h3>
        <p>${esc(lesson.scene)}</p>
        <p>「${esc(lesson.translation)}」</p>
        <p class="question">……でも、ベトナム語でどう言えばいいの？😂</p>
      </section>
      <section class="vietnamese-card">
        <div class="vietnamese-label">🇻🇳 南部ベトナム語</div>
        <div class="vietnamese">${esc(lesson.vietnamese)}</div>
        <button class="voice-button" data-speak="${esc(lesson.vietnamese)}">🔊 発音を聞く</button>
        <div class="translation">${esc(lesson.translation)}</div>
      </section>
      ${lesson.articleSections?.length ? lesson.articleSections.map(section => `
        <section class="word-section article-section">
          <h3>${esc(section.heading || section.title)}</h3>
          ${(section.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join("")}
          ${section.examples?.length ? section.examples.map(renderExample).join("") : ""}
        </section>`).join("") : ""}
      <section class="word-section">
        <h3>🔎 今日の言葉をひとつずつ</h3>
        <div class="word-list">${formattedWords.map(w => `
          <div class="word">
            <div class="word-vietnamese">${esc(w[0])}</div>
            <div class="word-japanese">${esc(w[1])}</div>
            <button class="glossary-audio" data-speak="${esc(w[0])}">🔊</button>
          </div>`).join("")}
        </div>
      </section>
      ${formattedExtraWords.length ? `
        <section class="word-section">
          <h3>📚 関連する言葉</h3>
          <div class="word-list">${formattedExtraWords.map(w => `
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
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderLesson();
});

// ==========================================
// レッスンデータ
// ==========================================
const lessons = [
  {
    "date": "2026年10月3日",
    "title": "🍓 市場に行きたい！ベトナム語を覚えて、いざ出発！",
    "scene": "奥さんと市場へ行きたい",
    "sceneIcon": "🍓",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Hôm nay mình muốn đi chợ.",
    "translation": "今日は市場に行きたい。",
    "mainWord": "muốn",
    "mainMeaning": "～したい",
    "words": [
      [
        "Hôm nay",
        "今日"
      ],
      [
        "mình",
        "僕・私（文脈による）"
      ],
      [
        "muốn",
        "～したい"
      ],
      [
        "đi",
        "行く"
      ],
      [
        "chợ",
        "市場"
      ],
      [
        "về",
        "帰る・戻る"
      ],
      [
        "nhà",
        "家"
      ],
      [
        "hôm qua",
        "昨日"
      ],
      [
        "ngày mai",
        "明日"
      ],
      [
        "sẽ",
        "これから～する・～する予定"
      ],
      [
        "mua",
        "買う"
      ],
      [
        "sữa",
        "ミルク"
      ]
    ],
    "extraWords": [
      [
        "ăn",
        "食べる"
      ],
      [
        "uống",
        "飲む"
      ],
      [
        "nước",
        "水"
      ],
      [
        "về nhà",
        "家に帰る"
      ]
    ],
    "archiveWords": [
      "muốn",
      "đi",
      "chợ",
      "về",
      "nhà"
    ],
    "articleSections": [
      {
        "heading": "🍓 今日は市場に行きたい！",
        "paragraphs": [
          "ベトナムで暮らしていると、市場に行く機会もいっぱい。奥さんは普通に買い物できるけど、僕のベトナム語はまだ準備中。😂",
          "そこで今日の一文！ Hôm nay mình muốn đi chợ. これを覚えて、市場への第一歩を踏み出そう。"
        ],
        "examples": [
          {
            "v": "Hôm nay mình muốn đi chợ.",
            "j": "今日は市場に行きたい。",
            "w": "Hôm nay＝今日、mình＝僕・私、muốn＝～したい、đi＝行く、chợ＝市場"
          }
        ]
      }
    ]
  },
  {
    "date": "2026年10月4日",
    "title": "🚪 ゴを抱っこ中！ドアが開けられない！",
    "scene": "赤ちゃんを抱っこしていると、両手がふさがってドアひとつ開けられない！そんな家庭の日常で、奥さんに自然にお願いする南部ベトナム語を覚えましょう。",
    "sceneIcon": "🚪",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Mở cửa dùm anh nha.",
    "translation": "ドアを開けてくれる？お願いね。",
    "words": [
      [
        "Mở",
        "開ける"
      ],
      [
        "cửa",
        "ドア、扉"
      ],
      [
        "dùm",
        "〜してくれる、〜してあげる（依頼）"
      ],
      [
        "anh",
        "僕（男性が自分を指す言い方）"
      ],
      [
        "nha",
        "〜ね、〜してね（柔らかい語尾）"
      ],
      [
        "Đóng cửa",
        "ドアを閉める"
      ],
      [
        "ẵm",
        "抱っこする（南部でよく使う）"
      ],
      [
        "bế",
        "抱っこする"
      ]
    ],
    "extraWords": [
      [
        "Mở cửa dùm anh nha.",
        "ドアを開けてくれる？お願いね。"
      ],
      [
        "Đóng cửa dùm anh nha.",
        "ドアを閉めてくれる？お願いね。"
      ],
      [
        "Anh đang ẵm bé.",
        "僕は赤ちゃんを抱っこしているよ。"
      ]
    ],
    "mainWord": "dùm",
    "mainMeaning": "〜してくれる、〜してあげる",
    "archiveWords": [
      "Mở",
      "cửa",
      "dùm",
      "anh",
      "nha"
    ],
    "articleSections": [
      {
        "heading": "🍓 両手がふさがっております！",
        "paragraphs": [
          "赤ちゃんを抱っこしていると、困ることがあります。赤ちゃんはかわいい。抱っこできるのもうれしい。でも、抱っこしている本人の両手は、ほぼ使用不能です。",
          "そんな場面で使えるのが、Mở cửa dùm anh nha. です。「ドアを開けてくれる？お願いね」という意味の南部ベトナム語の表現です。"
        ],
        "examples": [
          {
            "v": "Mở cửa dùm anh nha.",
            "j": "ドアを開けてくれる？お願いね。",
            "w": "Mở＝開ける／cửa＝ドア／dùm＝〜してくれる／anh＝僕／nha＝〜ね"
          }
        ]
      }
    ]
  },
  {
    "date": "2026年10月5日",
    "title": "ミンと覚える、家で使う動詞",
    "scene": "家でミンの様子を見ていると、飲む・食べる・寝るなど、毎日使う言葉がたくさん出てくる。生活の中で何度も聞く動詞から覚えよう。",
    "sceneIcon": "🍼",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Minh uống sữa.",
    "translation": "ミンがミルクを飲む。",
    "words": [
      [
        "Minh",
        "ミン"
      ],
      [
        "uống",
        "飲む"
      ],
      [
        "sữa",
        "ミルク"
      ],
      [
        "ăn",
        "食べる"
      ],
      [
        "ngủ",
        "寝る・眠る"
      ]
    ],
    "extraWords": [
      [
        "đi",
        "行く"
      ],
      [
        "chơi",
        "遊ぶ"
      ],
      [
        "buồn ngủ",
        "眠い"
      ]
    ],
    "mainWord": "uống",
    "mainMeaning": "飲む",
    "archiveWords": [
      "Minh",
      "uống",
      "sữa",
      "ăn",
      "ngủ"
    ],
    "articleSections": [
      {
        "heading": "🍓 毎日の生活は、動詞の宝庫",
        "paragraphs": [
          "赤ちゃんと暮らしていると、「飲む」「食べる」「寝る」など、同じ動作を何度も目にするよね。",
          "今日はまず、Minh uống sữa.（ミンがミルクを飲む）を覚えよう。"
        ]
      }
    ]
  },
  {
    "date": "2026年10月6日",
    "title": "👶 4ヶ月のゴちゃんが寝た！音を立てたら即終了ミッション",
    "scene": "生後4ヶ月になった娘のゴちゃん（Gô）。抱っこでゆらゆら揺らして、ようやく寝てくれた！！ここからの我が家は音を立てたら即終了の緊張感。",
    "sceneIcon": "🍓",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Gô đang ngủ hả?",
    "translation": "ゴちゃん、いま寝てる？",
    "words": [
      [
        "ru",
        "あやして寝かしつける"
      ],
      [
        "ngủ",
        "寝る・眠る"
      ],
      [
        "im",
        "静かな、黙っている"
      ],
      [
        "im lặng",
        "静かにする、黙る"
      ],
      [
        "xin",
        "～してください"
      ]
    ],
    "extraWords": [
      [
        "em bé",
        "赤ちゃん"
      ]
    ],
    "mainWord": "im lặng",
    "mainMeaning": "静かにする、黙る",
    "archiveWords": [
      "ru",
      "ngủ",
      "im",
      "im lặng",
      "xin"
    ],
    "articleSections": [
      {
        "heading": "🍓 ゴちゃんが寝た！音を立てたら即終了",
        "paragraphs": [
          "生後4ヶ月になった娘のゴちゃん（Gô）。抱っこでゆらゆら揺らして、ようやく寝てくれた！！",
          "ここからの我が家は音を立てたら即終了の緊張感あふれる限界ミッション状態突入。"
        ]
      }
    ]
  },
  {
    "date": "2026年10月7日",
    "title": "👶 お母さん、ゴを抱っこしてくれる？",
    "scene": "抱っこで腕がパンパンになりそうなとき、お義母さんに自然にお願いする南部ベトナム語を覚えましょう。",
    "sceneIcon": "👶",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Mẹ ẵm Gô dùm anh!",
    "translation": "お母さん、ゴを抱っこしてくれる？",
    "words": [
      [
        "Mẹ",
        "お母さん"
      ],
      [
        "ẵm",
        "抱っこする"
      ],
      [
        "Gô",
        "ゴちゃん"
      ],
      [
        "dùm",
        "〜してくれる"
      ]
    ],
    "extraWords": [
      [
        "cõng",
        "おんぶする"
      ]
    ],
    "mainWord": "ẵm",
    "mainMeaning": "抱っこする",
    "archiveWords": [
      "Mẹ",
      "ẵm",
      "Gô",
      "dùm"
    ],
    "articleSections": [
      {
        "heading": "🍓 両手がパンパン！",
        "paragraphs": [
          "抱っこで腕がパンパンになりそうなとき、お義母さんがいてくれると本当に助かります！"
        ]
      }
    ]
  },
  {
    "date": "2026年10月9日",
    "title": "🌅 ゴちゃん、まだ寝てるの？ 朝の様子を伺う一言",
    "scene": "朝、ゴちゃんがまだ寝ているか奥さんに確認したい。「まだ～している」を表す còn を覚えよう！",
    "sceneIcon": "🌅",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Gô còn ngủ hả?",
    "translation": "ゴちゃん、まだ寝てるの？",
    "words": [
      [
        "Gô",
        "ゴちゃん"
      ],
      [
        "còn",
        "まだ～している・まだある"
      ],
      [
        "ngủ",
        "寝る・眠る"
      ],
      [
        "hả",
        "～なの？（質問・確認）"
      ],
      [
        "rồi",
        "もう・すでに／～した"
      ],
      [
        "chưa",
        "まだ～していない／もう～した？"
      ]
    ],
    "extraWords": [
      [
        "dậy",
        "起きる"
      ],
      [
        "sáng",
        "朝・明るい"
      ],
      [
        "thức",
        "起きている"
      ]
    ],
    "mainWord": "còn",
    "mainMeaning": "まだ～している・まだある",
    "archiveWords": [
      "Gô",
      "còn",
      "ngủ",
      "hả",
      "rồi"
    ],
    "articleSections": [
      {
        "heading": "🍓 「寝てる？」に「まだ」を足して気持ちを伝えよう！",
        "paragraphs": [
          "朝起きて、静かな部屋で「ゴちゃん寝てるかな？」と確認したいときがありますよね。",
          "単に Gô ngủ hả?（ゴちゃん寝てるの？）と聞くこともできますが、朝の時間の経過に合わせて「まだ寝てるのかな？」と表現したいときは、もう一つ言葉を足します。",
          "そこで使うのが còn！「まだ～している」という状態の継続を表す便利な言葉です。これがあると会話が一気に自然になります。🍓"
        ],
        "examples": [
          {
            "v": "Gô còn ngủ hả?",
            "j": "ゴちゃん、まだ寝てるの？",
            "w": "Gô＝ゴちゃん、còn＝まだ、ngủ＝寝る、hả＝～なの？"
          }
        ]
      },
      {
        "heading": "🍓 今日の一語：còn ＝ まだ～している",
        "paragraphs": [
          "còn は「まだ～している」と状態が続いていることを表す言葉です。",
          "後ろに動詞や状態を表す言葉を置くだけでOK！日常でよく使う組み合わせから覚えていきましょう。"
        ],
        "examples": [
          {
            "v": "Gô còn ngủ.",
            "j": "ゴちゃんはまだ寝ているよ。",
            "w": "Gô＝ゴちゃん、còn＝まだ、ngủ＝寝る"
          },
          {
            "v": "Còn sớm.",
            "j": "まだ早いよ。",
            "w": "còn＝まだ、sớm＝早い"
          },
          {
            "v": "Còn nhiều.",
            "j": "まだたくさんあるよ。",
            "w": "còn＝まだ、nhiều＝多い・たくさん"
          }
        ]
      },
      {
        "heading": "🔁 còn・rồi・chưa をセットで使い分けよう！",
        "paragraphs": [
          "時間の流れを表す3つの重要フレーズ（còn・rồi・chưa）をセットで比べると、頭に残りやすくなります！",
          "「まだ寝てる（còn）」「もう寝た（rồi）」「もう起きた？（chưa）」の言い分けを練習してみましょう。"
        ],
        "examples": [
          {
            "v": "Gô còn ngủ hả?",
            "j": "ゴちゃん、まだ寝てるの？",
            "w": "còn＝まだ寝ている最中"
          },
          {
            "v": "Gô ngủ rồi.",
            "j": "ゴちゃんはもう寝たよ。",
            "w": "rồi＝動作が完了した（もう〜した）"
          },
          {
            "v": "Gô dậy chưa?",
            "j": "ゴちゃん、もう起きた？",
            "w": "dậy＝起きる、chưa＝もう〜した？"
          }
        ]
      },
      {
        "heading": "🗣️ 覚えた言葉を入れ替えてみよう",
        "paragraphs": [
          "朝のゴちゃんの様子を想像しながら、声に出して練習してみましょう！",
          "一言添えるだけで、家の中のベトナム語会話がもっと楽しくなります。🍓"
        ],
        "examples": [
          {
            "v": "Gô chưa dậy.",
            "j": "ゴちゃんはまだ起きていないよ。",
            "w": "chưa＝まだ～していない、dậy＝起きる"
          },
          {
            "v": "Gô dậy rồi nha.",
            "j": "ゴちゃん、もう起きたよ～。",
            "w": "dậy＝起きる、rồi＝もう～した、nha＝～ね"
          }
        ]
      },
      {
        "heading": "👣 今日の一歩：朝の会話で使ってみよう！",
        "paragraphs": [
          "今日の目標は、朝部屋を覗いたときに Gô còn ngủ hả? と声に出してみること！",
          "今日の一語 còn（まだ）を覚えると、時間や状態を伝える表現の幅が一気に広がるよ。🍓"
        ],
        "examples": [
          {
            "v": "Gô còn ngủ hả?",
            "j": "ゴちゃん、まだ寝てるの？",
            "w": "Gô＝ゴちゃん、còn＝まだ、ngủ＝寝る、hả＝～なの？"
          }
        ]
      }
    ]
  },
  {
    "date": "2026年10月10日",
    "title": "hả・à・á・nha・rồi・chưa、短い言葉で会話が変わる！",
    "scene": "家でよく聞く短い言葉を整理する。",
    "sceneIcon": "💬",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Minh còn ngủ hả? Dậy uống sữa nha.",
    "translation": "ミン、まだ寝てるの？ 起きてミルクを飲もうね。",
    "words": [
      [
        "hả",
        "～なの？（質問・確認）"
      ],
      [
        "à",
        "確認・気づきなどを添える言葉"
      ],
      [
        "á",
        "強調や驚きなどを添えることがある"
      ],
      [
        "nha",
        "～してね・～しようね"
      ],
      [
        "rồi",
        "もう・すでに／～した"
      ],
      [
        "chưa",
        "まだ～していない／もう～した？"
      ]
    ],
    "extraWords": [
      [
        "đó",
        "念押しや強調など"
      ],
      [
        "mà",
        "文脈によって反論・念押しなど"
      ]
    ],
    "mainWord": "nha",
    "mainMeaning": "～してね・～しようね",
    "archiveWords": [
      "hả",
      "à",
      "á",
      "nha",
      "rồi",
      "chưa"
    ],
    "articleSections": [
      {
        "heading": "🍓 短い言葉なのに、意味がいっぱい？",
        "paragraphs": [
          "短い言葉を添えると質問・確認・驚き・親しみなどが伝わることがあるよ。"
        ]
      }
    ]
  },
  {
    "date": "2026年10月11日",
    "title": "洗濯物を外に干す？突然の雨との心理戦",
    "scene": "洗濯物を外に干すかどうか、毎回ちょっとした賭けになる。",
    "sceneIcon": "🌦️",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Hình như sắp mưa.",
    "translation": "どうやら雨が降りそう。",
    "words": [
      [
        "Hình như",
        "～みたい・どうやら～らしい"
      ],
      [
        "sắp",
        "もうすぐ～する"
      ],
      [
        "mưa",
        "雨・雨が降る"
      ]
    ],
    "extraWords": [
      [
        "trời",
        "空・天気"
      ],
      [
        "nóng",
        "暑い"
      ]
    ],
    "mainWord": "sắp",
    "mainMeaning": "もうすぐ～する",
    "archiveWords": [
      "Hình như",
      "sắp",
      "mưa",
      "trời",
      "sấm"
    ],
    "articleSections": [
      {
        "heading": "🌞 昼間は暑い。とにかく暑い！",
        "paragraphs": [
          "ベトナムの昼間は本当に暑い。洗濯物を干すかどうかは、今日も空との相談です。"
        ]
      }
    ]
  },
  {
    "date": "2026年10月12日",
    "title": "vớiは英語のwithみたい！「〜といっしょに」を覚えよう",
    "scene": "ミンちゃんに「パパといっしょに寝ようね」と話しかける日常の場面。",
    "sceneIcon": "🍓",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Ngủ với ba nha.",
    "translation": "パパといっしょに寝ようね。",
    "words": [
      [
        "với",
        "〜と、〜といっしょに（英語のwithに近い）"
      ],
      [
        "vợ",
        "奥さん、妻"
      ],
      [
        "ba",
        "パパ"
      ],
      [
        "ngủ",
        "寝る"
      ]
    ],
    "mainWord": "với",
    "mainMeaning": "〜と、〜といっしょに",
    "extraWords": []
  },
  {
    "date": "2026年10月13日",
    "title": "脱衣所がない!? ゴちゃんのお風呂準備で覚えた xong",
    "scene": "ゴちゃんのお風呂準備で使う言葉を覚えよう。",
    "sceneIcon": "🚿",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Chuẩn bị tắm cho Gô xong chưa?",
    "translation": "ゴちゃんのお風呂の準備、もう終わった？",
    "words": [
      [
        "chuẩn bị",
        "準備する"
      ],
      [
        "tắm",
        "お風呂に入る"
      ],
      [
        "xong",
        "終わる・完了する"
      ],
      [
        "chưa",
        "もう～した？"
      ]
    ],
    "extraWords": [
      [
        "Xong rồi.",
        "終わったよ"
      ]
    ],
    "mainWord": "xong",
    "mainMeaning": "終わる・完了する",
    "archiveWords": [
      "chuẩn bị",
      "tắm",
      "xong",
      "rồi",
      "chưa"
    ],
    "articleSections": [
      {
        "heading": "🚿 お風呂の準備、もう終わった？",
        "paragraphs": [
          "赤ちゃんのお風呂は、着替えやタオルなど、先に用意しておくものがいろいろ。"
        ]
      }
    ]
  }
];

// 単語帳用データ
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
  {v:"dùm",m:"～してくれる・～してもらえる",p:"表現",o:"—",e:"Mở cửa dùm anh nha.",j:"ドアを開けてくれる？お願いね。"},
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
  {v:"về",m:"帰る",p:"動詞",o:"đi（行く）",e:"Minh về.",j:"帰る。"},
  {v:"ẵm",m:"赤ちゃんを抱っこする（南部でよく使う）",p:"動詞",o:"đặt xuống（下ろす）",e:"Mẹ ẵm Minh.",j:"お母さんがミンを抱っこする。"},
  {v:"xong",m:"終わる・完了する",p:"動詞",o:"—",e:"Xong rồi.",j:"終わったよ。"}
];
