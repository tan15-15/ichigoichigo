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
    "title": "🍓 vớiは英語のwithみたい！「〜といっしょに」を覚えよう",
    "words": "với, vợ, ba, ngủ, đi, ăn, chơi, cùng, mình, nha"
  },
  {
    "date": "2026-10-11",
    "dateDisplay": "2026年10月11日",
    "title": "🌦️ 洗濯物を外に干す？突然の雨との心理戦",
    "words": "Hình như, sắp, mưa, trời, nóng, sấm, mưa lớn"
  },
  {
    "date": "2026-10-10",
    "dateDisplay": "2026年10月10日",
    "title": "✨ hả・à・á・nha・rồi・chưa、短い言葉で会話が変わる！",
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
  }
];

// ==========================================
// 単語帳データ（検索・反対語対応の完全版）
// ==========================================
const vocabulary = [
  { v: "chuẩn bị", m: "準備する", p: "動詞" },
  { v: "tắm", m: "入浴する、お風呂に入る", p: "動詞" },
  { v: "xong", m: "終わる、完了する", p: "動詞", o: "chưa" },
  { v: "chưa", m: "まだ〜していない", p: "表現", o: "xong, rồi" },
  { v: "với", m: "〜と、〜といっしょに", p: "表現", e: "Ngủ với ba nha.", j: "パパといっしょに寝ようね。" },
  { v: "vợ", m: "妻、奥さん", p: "名詞", e: "Đi ăn với vợ nha.", j: "妻といっしょに食べに行こうね。" },
  { v: "ba", m: "パパ", p: "名詞" },
  { v: "ngủ", m: "寝る", p: "動詞", o: "thức, dậy" },
  { v: "thức", m: "起きている、目覚めている", p: "動詞", o: "ngủ" },
  { v: "dậy", m: "起きる、目覚める", p: "動詞", o: "ngủ" },
  { v: "đi", m: "行く", p: "動詞", o: "về, đến" },
  { v: "ăn", m: "食べる", p: "動詞", o: "uống" },
  { v: "đi ăn", m: "食べに行く", p: "表現" },
  { v: "chơi", m: "遊ぶ", p: "動詞" },
  { v: "cùng", m: "いっしょに", p: "表現" },
  { v: "mình", m: "私たち、私たち自身など", p: "名詞" },
  { v: "nha", m: "〜ね、〜しようね", p: "表現" },
  { v: "Hình như", m: "〜みたい、どうやら〜らしい", p: "表現" },
  { v: "sắp", m: "もうすぐ〜する", p: "表現" },
  { v: "mưa", m: "雨、雨が降る", p: "動詞", o: "nắng" },
  { v: "trời", m: "空、天気", p: "名詞" },
  { v: "nóng", m: "暑い、熱い", p: "形容詞", o: "lạnh" },
  { v: "sấm", m: "雷鳴", p: "名詞" },
  { v: "mưa lớn", m: "大雨", p: "表現" },
  { v: "hả", m: "〜なの？（疑問）", p: "表現" },
  { v: "à", m: "ああ、〜ね", p: "表現" },
  { v: "á", m: "〜だよ！（強調）", p: "表現" },
  { v: "rồi", m: "もう、すでに", p: "表現", o: "chưa" },
  { v: "Gô", m: "ゴちゃん", p: "名詞" },
  { v: "còn", m: "まだ〜（継続）", p: "表現" },
  { v: "uống", m: "飲む", p: "動詞", o: "ăn" },
  { v: "sữa", m: "ミルク、牛乳", p: "名詞" },
  { v: "cơm", m: "ご飯", p: "名詞" },
  { v: "buồn ngủ", m: "眠い", p: "表現" },
  { v: "đang", m: "今〜している", p: "表現" },
  { v: "muốn", m: "〜したい", p: "動詞" },
  { v: "ru", m: "あやして寝かしつける", p: "動詞" },
  { v: "im", m: "静かな、黙っている", p: "形容詞" },
  { v: "im lặng", m: "静かにする、黙る", p: "動詞" },
  { v: "xin", m: "〜してください", p: "動詞" },
  { v: "mở", m: "開ける", p: "動詞", o: "đóng" },
  { v: "em bé", m: "赤ちゃん", p: "名詞" },
  { v: "mẹ", m: "お母さん", p: "名詞" },
  { v: "ẵm", m: "抱っこする", p: "動詞" },
  { v: "giùm", m: "〜のために、〜してくれる", p: "表現" },
  { v: "anh", m: "お兄さん、あなた", p: "名詞" },
  { v: "cõng", m: "おんぶする", p: "動詞" },
  { v: "chăm sóc", m: "世話をする", p: "動詞" },
  { v: "bát", m: "杯、丼", p: "名詞" },
  { v: "này", m: "この", p: "表現" },
  { v: "nhiêu", m: "いくら、どのくらい", p: "表現" },
  { v: "tiền", m: "お金", p: "名詞" },
  { v: "mắc", m: "高い", p: "形容詞", o: "rẻ" },
  { v: "rẻ", m: "安い", p: "形容詞", o: "mắc" },
  { v: "hôm nay", m: "今日", p: "名詞" },
  { v: "đi chợ", m: "市場に行く", p: "表現" },
  { v: "về nhà", m: "家に帰る", p: "表現" }
];
