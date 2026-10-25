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
    "words": "với, vợ, ba, ngủ, đi, ăn, đi ăn, chơi, cùng, mình, nha"
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
    "title": "🍼 ゴちゃんと覚える基本の動詞と時制（飲む・食べる・眠い）",
    "words": "uống, sữa, ăn, cơm, buồn ngủ, chưa, đang, còn, rồi"
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
