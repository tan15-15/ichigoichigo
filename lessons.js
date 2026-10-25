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
    date: "2026-10-13",
    title: "脱衣所がない!? ゴちゃんのお風呂準備で覚えた xong",
    words: [
      { vn: "chuẩn bị", jp: "準備する" },
      { vn: "tắm", jp: "入浴する、お風呂に入る" },
      { vn: "xong", jp: "終わる、完了する" },
      { vn: "chưa", jp: "まだ〜していない" }
    ]
  },
  {
    date: "2026-10-12",
    title: "🍓 vớiは英語のwithみたい！「〜といっしょに」を覚えよう",
    words: [
      { vn: "với", jp: "〜と、〜といっしょに" },
      { vn: "vợ", jp: "妻、奥さん" },
      { vn: "ba", jp: "パパ" },
      { vn: "ngủ", jp: "寝る" },
      { vn: "đi", jp: "行く" },
      { vn: "ăn", jp: "食べる" },
      { vn: "đi ăn", jp: "食べに行く" },
      { vn: "chơi", jp: "遊ぶ" },
      { vn: "cùng", jp: "いっしょに" },
      { vn: "mình", jp: "私たち、私たち自身など" },
      { vn: "nha", jp: "〜ね、〜しようね" }
    ]
  },
  {
    date: "2026-10-11",
    title: "🌦️ 洗濯物を外に干す？突然の雨との心理戦",
    words: [
      { vn: "Hình như", jp: "〜みたい、どうやら〜らしい" },
      { vn: "sắp", jp: "もうすぐ〜する" },
      { vn: "mưa", jp: "雨、雨が降る" },
      { vn: "trời", jp: "空、天気" },
      { vn: "nóng", jp: "暑い、熱い" },
      { vn: "sấm", jp: "雷鳴" },
      { vn: "mưa lớn", jp: "大雨" }
    ]
  },
  {
    date: "2026-10-10",
    title: "✨ hả・à・á・nha・rồi・chưa、短い言葉で会話が変わる！",
    words: [
      { vn: "hả", jp: "〜なの？（疑問）" },
      { vn: "à", jp: "ああ、〜ね" },
      { vn: "á", jp: "〜だよ！（強調）" },
      { vn: "nha", jp: "〜ね、〜しようね" },
      { vn: "rồi", jp: "もう、すでに" },
      { vn: "chưa", jp: "まだ〜していない" }
    ]
  },
  {
    date: "2026-10-09",
    title: "🌅 ゴちゃん、まだ寝てるの？ 朝の様子を伺う一言",
    words: [
      { vn: "Gô", jp: "ゴちゃん" },
      { vn: "còn", jp: "まだ〜（継続）" },
      { vn: "ngủ", jp: "寝る" },
      { vn: "hả", jp: "〜なの？" },
      { vn: "rồi", jp: "もう" },
      { vn: "chưa", jp: "まだ" }
    ]
  },
  {
    date: "2026-10-07",
    title: "🍼 ゴ人と覚える基本の動詞と時制（飲む・食べる・眠い）",
    words: [
      { vn: "uống", jp: "飲む" },
      { vn: "sữa", jp: "ミルク、牛乳" },
      { vn: "ăn", jp: "食べる" },
      { vn: "cơm", jp: "ご飯" },
      { vn: "buồn ngủ", jp: "眠い" },
      { vn: "chưa", jp: "まだ〜していない" },
      { vn: "đang", jp: "今〜している" },
      { vn: "còn", jp: "まだ〜の状態が続いている" },
      { vn: "rồi", jp: "もう、すでに" },
      { vn: "muốn", jp: "〜したい" }
    ]
  },
  {
    date: "2026-10-06",
    title: "👶 4ヶ月のゴちゃんが寝た！音を立てたら即終了ミッション",
    words: [
      { vn: "ru", jp: "あやして寝かしつける" },
      { vn: "ngủ", jp: "寝る・眠る" },
      { vn: "im", jp: "静かな、黙っている" },
      { vn: "im lặng", jp: "静かにする、黙る" },
      { vn: "xin", jp: "〜してください" }
    ]
  },
  {
    date: "2026-10-05",
    title: "👶 お母さん、ゴを抱っこしてくれる？",
    words: [
      { vn: "mẹ", jp: "お母さん" },
      { vn: "ẵm", jp: "抱っこする" },
      { vn: "giùm", jp: "〜のために、〜してくれる" },
      { vn: "anh", jp: "お兄さん、あなた" },
      { vn: "cõng", jp: "おんぶする" },
      { vn: "chăm sóc", jp: "世話をする" }
    ]
  },
  {
    date: "2026-10-04",
    title: "🛵 毎朝のバイク麺活！看板もメニューもないお店で「いくら？」と聞く",
    words: [
      { vn: "bát", jp: "杯、丼" },
      { vn: "này", jp: "この" },
      { vn: "nhiêu", jp: "いくら、どのくらい" },
      { vn: "tiền", jp: "お金" },
      { vn: "mắc", jp: "高い" },
      { vn: "rẻ", jp: "安い" }
    ]
  },
  {
    date: "2026-10-03",
    title: "🍓 市場に行きたい！ベトナム語を覚えて、いざ出発！",
    words: [
      { vn: "hôm nay", jp: "今日" },
      { vn: "muốn", jp: "〜したい" },
      { vn: "đi chợ", jp: "市場に行く" },
      { vn: "về nhà", jp: "家に帰る" }
    ]
  }
];
