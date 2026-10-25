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

function playAudio(text) {
  speakVietnamese(text);
}

document.addEventListener("click", e => {
  const button = e.target.closest("[data-speak]");
  if (button) {
    const text = button.dataset.speak || button.getAttribute("data-text");
    if (text) speakVietnamese(text);
  }
});

// ==========================================
// レッスンデータ（全件）
// ==========================================
const lessons = [
  {
    "date": "2026-10-13",
    "dateDisplay": "2026年10月13日",
    "title": "脱衣所がない!? ゴちゃんのお風呂準備で覚えた xong",
    "words": "chuẩn bị, tắm, xong, chưa"
  },
  {
    "date": "2026-10-12",
    "dateDisplay": "2026年10月12日",
    "title": "vớiは英語のwithみたい！「〜といっしょに」を覚えよう",
    "words": "với, vợ, ba, ngủ"
  },
  {
    "date": "2026-10-11",
    "dateDisplay": "2026年10月11日",
    "title": "洗濯物を外に干す？突然の雨との心理戦",
    "words": "Hình như, sắp, mưa, trời, nóng"
  },
  {
    "date": "2026-10-10",
    "dateDisplay": "2026年10月10日",
    "title": "hả・à・á・nha・rồi・chưa、短い言葉で会話が変わる！",
    "words": "hả, à, á, nha, rồi, chưa"
  },
  {
    "date": "2026-10-09",
    "dateDisplay": "2026年10月9日",
    "title": "🌅 ゴちゃん、まだ寝てるの？ 朝の様子を伺う一言",
    "words": "Gô, còn, ngủ, hả, rồi, chưa"
  },
  {
    "date": "2026-10-07",
    "dateDisplay": "2026年10月7日",
    "title": "👶 お母さん、ゴを抱っこしてくれる？",
    "words": "Mẹ, ẵm, Gô, dùm, cõng"
  },
  {
    "date": "2026-10-06",
    "dateDisplay": "2026年10月6日",
    "title": "👶 4ヶ月のゴちゃんが寝た！音を立てたら即終了ミッション",
    "words": "ru, ngủ, im, im lặng, xin"
  },
  {
    "date": "2026-10-05",
    "dateDisplay": "2026年10月5日",
    "title": "👶 お母さん、ゴを抱っこしてくれる？",
    "words": "mẹ, ẵm, giùm, anh, cõng, chăm sóc"
  },
  {
    "date": "2026-10-04",
    "dateDisplay": "2026年10月4日",
    "title": "🛵 毎朝のバイク麺活！看板もメニューもないお店で「いくら？」と聞く",
    "words": "bát, này, nhiêu, tiền, mắc, rẻ"
  },
  {
    "date": "2026-10-03",
    "dateDisplay": "2026年10月3日",
    "title": "🍓 市場に行きたい！ベトナム語を覚えて、いざ出発！",
    "words": "hôm nay, muốn, đi chợ, về nhà"
  },
  {
    "date": "2026年10月6日",
    "title": "👶 4ヶ月のゴちゃんが寝た！音を立てたら即終了ミッション",
    "scene": "生後4ヶ月になった娘のゴちゃん（Gô）。抱っこでゆらゆら揺らして、ようやく寝てくれた！！ここからの我が家は音を立てたら即終了の緊張感あふれる限界ミッション状態突入。",
    "sceneIcon": "🍓",
    "sceneTitle": "今日の出来事",
    "vietnamese": "Gô đang ngủ hả?",
    "translation": "ゴちゃん、いま寝てる？",
    "mainWord": "im lặng",
    "mainMeaning": "静かにする、黙る",
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
    "title": "🍼 ゴちゃんと覚える基本の動詞と時制（飲む・食べる・眠い）",
    "scene": "ゴちゃんの日常を例にして、「飲む」「食べる」「眠い」と、ベトナム語で「まだ」「今〜している」「もう〜した」を表す言い方を学びます。",
    "sceneIcon": "🍓",
    "sceneTitle": "今日のテーマ",
    "vietnamese": "Gô đang ngủ hả?",
    "translation": "ゴちゃん、いま寝てる？",
    "mainWord": "chưa / đang / còn / rồi",
    "mainMeaning": "時制を表す4つの表現",
    "words": [
      [
        "uống",
        "飲む"
      ],
      [
        "sữa",
        "ミルク、牛乳"
      ],
      [
        "ăn",
        "食べる"
      ],
      [
        "cơm",
        "ご飯"
      ],
      [
        "buồn ngủ",
        "眠い"
      ],
      [
        "chưa",
        "まだ～していない"
      ],
      [
        "đang",
        "今～している"
      ],
      [
        "còn",
        "まだ～の状態が続いている"
      ],
      [
        "rồi",
        "もう、すでに"
      ]
    ],
    "extraWords": [
      [
        "muốn",
        "～したい"
      ]
    ],
    "archiveWords": [
      "uống",
      "sữa",
      "ăn",
      "cơm",
      "buồn ngủ",
      "chưa",
      "đang",
      "còn",
      "rồi"
    ],
    "articleSections": [
      {
        "heading": "🍓 1．基本の動詞を覚える",
        "paragraphs": [
          "Gô uống sữa.<br>（ゴちゃんはミルクを飲む）",
          "Muốn ăn cơm.<br>（ご飯を食べたい）",
          "Gô buồn ngủ.<br>（ゴちゃんは眠い）",
          "ベトナム語では、動詞の前後に単語を置いて、短い文を作ることができます。"
        ]
      },
      {
        "heading": "🍓 2．「まだ」「今」「もう」の時制の違い",
        "paragraphs": [
          "■ chưa（まだ～していない）<br>Gô chưa ngủ.<br>（ゴちゃんはまだ寝ていない。）",
          "■ đang（今～している）<br>Gô đang ngủ.<br>（ゴちゃんは今寝ている。）",
          "■ còn（まだ～の状態が続いている）<br>Gô còn ngủ.<br>（ゴちゃんはまだ寝ている。）",
          "■ rồi（もう～した、すでに）<br>Gô ngủ rồi.<br>（ゴちゃんはもう寝た。）",
          "※ rồi は文によって「もう」「すでに」「～になった」などの意味になります。"
        ]
      }
    ]
  }
];
