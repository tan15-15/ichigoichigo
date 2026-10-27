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
    "title": "🚿 脱衣所がない!? ゴちゃんのお風呂準備で覚えた xong",
    "words": "chuẩn bị, tắm, xong, chưa"
  },
  {
    "date": "2026-10-12",
    "dateDisplay": "2026年10月12日",
    "title": "🍓 vớiは英語のwithみたい！「〜といっしょに」を覚えよう",
    "words": "với, vợ, ba, ngủ, đi, ăn, chơi, cùng, mình, nha",
    "url": "lessons/2026-10-12.html"
  },
  {
    "date": "2026-10-11",
    "dateDisplay": "2026年10月11日",
    "title": "🌦️ 洗濯物を外に干す？突然の雨との心理戦",
    "words": "Hình như, sắp, mưa, trời, nóng, sấm, mưa lớn",
    "url": "lessons/2026-10-11.html"
  },
  {
    "date": "2026-10-10",
    "dateDisplay": "2026年10月10日",
    "title": "✨ hả・à・á・nha・rồi・chưa、短い言葉で会話が変わる！",
    "words": "hả, à, á, nha, rồi, chưa",
    "url": "lessons/2026-10-10.html"
  },
  {
    "date": "2026-10-09",
    "dateDisplay": "2026年10月9日",
    "title": "🌅 ゴちゃん、まだ寝てるの？ 朝の様子を伺う一言",
    "words": "Gô, còn, ngủ, hả, rồi, chưa",
    "url": "lessons/2026-10-09.html"
  },
  {
    "date": "2026-10-07",
    "dateDisplay": "2026年10月7日",
    "title": "👶 お母さん、ゴを抱っこしてくれる？",
    "words": "Mẹ, ẵm, Gô, dùm, cõng",
    "url": "lessons/2026-10-07.html"
  },
  {
    "date": "2026-10-06",
    "dateDisplay": "2026年10月6日",
    "title": "👶 4ヶ月のゴちゃんが寝た！音を立てたら即終了ミッション",
    "words": "ru, ngủ, im, im lặng, xin",
    "url": "lessons/2026-10-06.html"
  },
  {
    "date": "2026-10-05",
    "dateDisplay": "2026年10月5日",
    "title": "👶 お母さん、ゴを抱っこしてくれる？",
    "words": "mẹ, ẵm, giùm, anh, cõng, chăm sóc",
    "url": "lessons/2026-10-05.html"
  },
  {
    "date": "2026-10-04",
    "dateDisplay": "2026年10月4日",
    "title": "🛵 毎朝のバイク麺活！看板もメニューもないお店で「いくら？」と聞く",
    "words": "bát, này, nhiêu, tiền, mắc, rẻ",
    "url": "lessons/2026-10-04.html"
  },
  {
    "date": "2026-10-03",
    "dateDisplay": "2026年10月3日",
    "title": "🍓 市場に行きたい！ベトナム語を覚えて、いざ出発！",
    "words": "hôm nay, muốn, đi chợ, về nhà",
    "url": "lessons/2026-10-03.html"
  },
  {
    "date": "2026年10月13日",
    "title": "ここに記事のタイトル",
    "scene": "今日のシチュエーションや出来事の説明文",
    "vietnamese": "今日の一文のベトナム語",
    "translation": "今日の一文の日本語訳",
    "mainWord": "今日の一語",
    "mainMeaning": "一語の意味",
    "words": [
      [
        "単語1",
        "意味1"
      ],
      [
        "単語2",
        "意味2"
      ],
      [
        "単語3",
        "意味3"
      ],
      [
        "単語4",
        "意味4"
      ],
      [
        "単語5",
        "意味5"
      ]
    ],
    "sceneIcon": "🍓",
    "sceneTitle": "今日の出来事",
    "extraWords": [
      [
        "関連する言葉1",
        "意味1"
      ],
      [
        "関連する言葉2",
        "意味2"
      ]
    ],
    "archiveWords": [
      "chuẩn bị",
      "tắm",
      "xong",
      "chưa",
      "rồi"
    ],
    "articleSections": [
      {
        "heading": "見出しのタイトル（例：文法のポイントなど）",
        "paragraphs": [
          "本文の段落1の文章",
          "本文の段落2の文章"
        ],
        "examples": [
          {
            "v": "例文のベトナム語",
            "j": "例文の日本語訳",
            "w": "補足や解説"
          }
        ]
      }
    ]
  }
];

// ==========================================
// 単語帳データ（反対語・日本語訳・相互リンク完全対応版）
// ==========================================
const vocabulary = [
    {
        "v": "chuẩn bị",
        "m": "準備する",
        "p": "動詞"
    },
    {
        "v": "tắm",
        "m": "入浴する、お風呂に入る",
        "p": "動詞"
    },
    {
        "v": "xong",
        "m": "終わる、完了する",
        "p": "動詞",
        "opposite": "chưa（まだ〜していない）",
        "related": "rồi（もう・すでに）"
    },
    {
        "v": "chưa",
        "m": "まだ〜していない",
        "p": "表現",
        "opposite": "xong（終わる）",
        "related": "rồi（もう・すでに）"
    }
];
