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
    "title": "脱衣所がない!? ゴちゃんのお風呂準備で覚えた xong",
    "words": [
      ["chuẩn bị", "準備する"],
      ["tắm", "入浴する、お風呂に入る"],
      ["xong", "終わる、完了する"],
      ["chưa", "まだ〜していない"]
    ]
  },
  {
    "date": "2026-10-12",
    "title": "🍓 vớiは英語のwithみたい！「〜といっしょに」を覚えよう",
    "words": [
      ["với", "〜と、〜といっしょに"],
      ["vợ", "妻、奥さん"],
      ["ba", "パパ"],
      ["ngủ", "寝る"],
      ["đi", "行く"],
      ["ăn", "食べる"],
      ["đi ăn", "食べに行く"],
      ["chơi", "遊ぶ"],
      ["cùng", "いっしょに"],
      ["mình", "私たち、私たち自身など"],
      ["nha", "〜ね、〜しようね"]
    ]
  },
  {
    "date": "2026-10-11",
    "title": "🌦️ 洗濯物を外に干す？突然の雨との心理戦",
    "words": [
      ["Hình như", "〜みたい、どうやら〜らしい"],
      ["sắp", "もうすぐ〜する"],
      ["mưa", "雨、雨が降る"],
      ["trời", "空、天気"],
      ["nóng", "暑い、熱い"],
      ["sấm", "雷鳴"],
      ["mưa lớn", "大雨"]
    ]
  },
  {
    "date": "2026-10-10",
    "title": "✨ hả・à・á・nha・rồi・chưa、短い言葉で会話が変わる！",
    "words": [
      ["hả", "〜なの？（疑問）"],
      ["à", "ああ、〜ね"],
      ["á", "〜だよ！（強調）"],
      ["nha", "〜ね、〜しようね"],
      ["rồi", "もう、すでに"],
      ["chưa", "まだ〜していない"]
    ]
  },
  {
    "date": "2026-10-09",
    "title": "🌅 ゴちゃん、まだ寝てるの？ 朝の様子を伺う一言",
    "words": [
      ["Gô", "ゴちゃん"],
      ["còn", "まだ〜（継続）"],
      ["ngủ", "寝る"],
      ["hả", "〜なの？"],
      ["rồi", "もう"],
      ["chưa", "まだ"]
    ]
  },
  {
    "date": "2026-10-07",
    "title": "🍼 ゴちゃんと覚える基本の動詞と時制（飲む・食べる・眠い）",
    "words": [
      ["uống", "飲む"],
      ["sữa", "ミルク、牛乳"],
      ["ăn", "食べる"],
      ["cơm", "ご飯"],
      ["buồn ngủ", "眠い"],
      ["chưa", "まだ〜していない"],
      ["đang", "今〜している"],
      ["còn", "まだ〜の状態が続いている"],
      ["rồi", "もう、すでに"],
      ["muốn", "〜したい"]
    ]
  },
  {
    "date": "2026-10-06",
    "title": "👶 4ヶ月のゴちゃんが寝た！音を立てたら即終了ミッション",
    "words": [
      ["ru", "あやして寝かしつける"],
      ["ngủ", "寝る・眠る"],
      ["im", "静かな、黙っている"],
      ["im lặng", "静かにする、黙る"],
      ["xin", "〜してください"]
    ]
  },
  {
    "date": "2026-10-05",
    "title": "👶 お母さん、ゴを抱っこしてくれる？",
    "words": [
      ["mẹ", "お母さん"],
      ["ẵm", "抱っこする"],
      ["giùm", "〜のために、〜してくれる"],
      ["anh", "お兄さん、あなた"],
      ["cõng", "おんぶする"],
      ["chăm sóc", "世話をする"]
    ]
  },
  {
    "date": "2026-10-04",
    "title": "🛵 毎朝のバイク麺活！看板もメニューもないお店で「いくら？」と聞く",
    "words": [
      ["bát", "杯、丼"],
      ["này", "この"],
      ["nhiêu", "いくら、どのくらい"],
      ["tiền", "お金"],
      ["mắc", "高い"],
      ["rẻ", "安い"]
    ]
  },
  {
    "date": "2026-10-03",
    "title": "🍓 市場に行きたい！ベトナム語を覚えて、いざ出発！",
    "words": [
      ["hôm nay", "今日"],
      ["muốn", "〜したい"],
      ["đi chợ", "市場に行く"],
      ["về nhà", "家に帰る"]
    ]
  }
];
