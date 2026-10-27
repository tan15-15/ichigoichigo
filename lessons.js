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
    "date": "2026-10-13",
    "dateDisplay": "2026年10月13日",
    "title": "🚿 脱衣所がない!? ゴちゃんのお風呂準備で覚えた xong",
    "words": "chuẩn bị, tắm, xong, chưa"
},
    {
    "date": "2026-10-13",
    "dateDisplay": "2026年10月13日",
    "title": "🚿 脱衣所がない!? ゴちゃんのお風呂準備で覚えた xong",
    "words": "chuẩn bị, tắm, xong, chưa"
},
  {
    "date": "2026-10-13",
    "dateDisplay": "2026年10月13日",
    "title": "脱衣所がない!? ゴちゃんのお風呂準備で覚えた xong",
    "words": "chuẩn bị, tắm, xong, chưa",
    "url": "lessons/2026-10-13.html"
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
  }
];

// ==========================================
// 単語帳データ（反対語・日本語訳・相互リンク完全対応版）
// ==========================================
const vocabulary = [
  { v: "chuẩn bị", m: "準備する", p: "動詞" },
  { v: "tắm", m: "入浴する、お風呂に入る", p: "動詞" },
  { v: "xong", m: "終わる、完了する", p: "動詞", o: "chưa（まだ〜していない）" },
  { v: "chưa", m: "まだ〜していない", p: "表現", o: "xong（終わる）、rồi（もう・すでに）" },
  { v: "với", m: "〜と、〜といっしょに", p: "表現", e: "Ngủ với ba nha.", j: "パパといっしょに寝ようね。" },
  { v: "vợ", m: "妻、奥さん", p: "名詞", e: "Đi ăn với vợ nha.", j: "妻といっしょに食べに行こうね。" },
  { v: "ba", m: "パパ", p: "名詞", o: "mẹ（お母さん）" },
  { v: "mẹ", m: "お母さん", p: "名詞", o: "ba（パパ）" },
  { v: "ngủ", m: "寝る", p: "動詞", o: "thức（起きている）、dậy（起きる）、buồn ngủ（眠い）" },
  { v: "thức", m: "起きている、目覚めている", p: "動詞", o: "ngủ（寝る）" },
  { v: "dậy", m: "起きる、目覚める", p: "動詞", o: "ngủ（寝る）" },
  { v: "buồn ngủ", m: "眠い", p: "表現", o: "ngủ（寝る）、thức（起きている）" },
  { v: "đi", m: "行く", p: "動詞", o: "về（帰る）、đến（来る）" },
  { v: "về", m: "帰る、戻る", p: "動詞", o: "đi（行く）" },
  { v: "đến", m: "来る、到着する", p: "動詞", o: "đi（行く）" },
  { v: "ăn", m: "食べる", p: "動詞", o: "uống（飲む）" },
  { v: "uống", m: "飲む", p: "動詞", o: "ăn（食べる）" },
  { v: "cơm", m: "ご飯", p: "名詞" },
  { v: "sữa", m: "ミルク、牛乳", p: "名詞" },
  { v: "đi ăn", m: "食べに行く", p: "表現" },
  { v: "chơi", m: "遊ぶ", p: "動詞" },
  { v: "cùng", m: "いっしょに", p: "表現" },
  { v: "mình", m: "私たち、私たち自身など", p: "名詞" },
  { v: "nha", m: "〜ね、〜しようね", p: "表現" },
  { v: "Hình như", m: "〜みたい、どうやら〜らしい", p: "表現" },
  { v: "sắp", m: "もうすぐ〜する", p: "表現" },
  { v: "mưa", m: "雨、雨が降る", p: "動詞", o: "nắng（晴れ）" },
  { v: "nắng", m: "晴れ、日差し", p: "名詞", o: "mưa（雨）" },
  { v: "trời", m: "空、天気", p: "名詞" },
  { v: "nóng", m: "暑い、熱い", p: "形容詞", o: "lạnh（寒い）" },
  { v: "lạnh", m: "寒い、冷たい", p: "形容詞", o: "nóng（暑い）" },
  { v: "sấm", m: "雷鳴", p: "名詞" },
  { v: "mưa lớn", m: "大雨", p: "表現" },
  { v: "hả", m: "〜なの？（疑問）", p: "表現" },
  { v: "à", m: "ああ、〜ね", p: "表現" },
  { v: "á", m: "〜だよ！（強調）", p: "表現" },
  { v: "rồi", m: "もう、すでに", p: "表現", o: "chưa（まだ〜していない）" },
  { v: "Gô", m: "ゴちゃん", p: "名詞" },
  { v: "còn", m: "まだ〜（継続）", p: "表現" },
  { v: "đang", m: "今〜している", p: "表現" },
  { v: "muốn", m: "〜したい", p: "動詞" },
  { v: "ru", m: "あやして寝かしつける", p: "動詞", o: "ngủ（寝る）" },
  { v: "im", m: "静かな、黙っている", p: "形容詞", o: "im lặng（静かにする）" },
  { v: "im lặng", m: "静かにする、黙る", p: "動詞", o: "im（静かな）" },
  { v: "xin", m: "〜してください", p: "動詞" },
  { v: "mở", m: "開ける", p: "動詞", o: "đóng（閉める）" },
  { v: "đóng", m: "閉める", p: "動詞", o: "mở（開ける）" },
  { v: "em bé", m: "赤ちゃん", p: "名詞" },
  { v: "mẹ", m: "お母さん", p: "名詞" },
  { v: "ẵm", m: "抱っこする", p: "動詞", o: "cõng（おんぶする）" },
  { v: "giùm", m: "〜のために、〜してくれる", p: "表現" },
  { v: "dùm", m: "〜してくれる（giùmの変異）", p: "表現" },
  { v: "anh", m: "お兄さん、あなた", p: "名詞" },
  { v: "cõng", m: "おんぶする", p: "動詞", o: "ẵm（抱っこする）" },
  { v: "chăm sóc", m: "世話をする", p: "動詞" },
  { v: "bát", m: "杯、丼", p: "名詞" },
  { v: "này", m: "この", p: "表現" },
  { v: "nhiêu", m: "いくら、どのくらい", p: "表現" },
  { v: "tiền", m: "お金", p: "名詞" },
  { v: "mắc", m: "高い", p: "形容詞", o: "rẻ（安い）" },
  { v: "rẻ", m: "安い", p: "形容詞", o: "mắc（高い）" },
  { v: "hôm nay", m: "今日", p: "名詞" },
  { v: "đi chợ", m: "市場に行く", p: "表現", o: "về nhà（家に帰る）" },
  { v: "về nhà", m: "家に帰る", p: "表現", o: "đi chợ（市場に行く）" }
];
