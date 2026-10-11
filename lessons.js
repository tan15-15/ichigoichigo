
const lessons = [
  {
    date: "2026年10月3日",
    title: "奥さんと一緒に市場へ行こうとした",
    scene: "奥さんと市場へ行くときに使いたい言葉を覚える。",
    vietnamese: "Hôm nay mình muốn đi chợ.",
    translation: "今日は市場に行きたい。",
    words: [["Hôm nay", "今日"], ["mình", "僕・私"], ["muốn", "～したい"], ["đi", "行く"], ["chợ", "市場"]],
    extraWords: [["về", "帰る"], ["mua", "買う"]],
    mainWord: "đi",
    mainMeaning: "行く"
  },
  {
    date: "2026年10月4日",
    title: "ドアを開けてくれる？",
    scene: "家でドアを開けてもらいたい場面。",
    vietnamese: "Mở cửa dùm đi.",
    translation: "ドアを開けてくれる？",
    words: [["Mở", "開ける"], ["cửa", "ドア・扉"], ["dùm", "～してくれる"], ["đi", "お願いのニュアンス"]],
    extraWords: [["đóng", "閉める"], ["tắt", "消す"], ["bật", "つける"]],
    mainWord: "dùm",
    mainMeaning: "～してくれる？"
  },
  {
    date: "2026年10月5日",
    title: "ミンと覚える動詞",
    scene: "家で使える動詞を覚えよう。",
    vietnamese: "Minh uống sữa.",
    translation: "ミンがミルクを飲む。",
    words: [["Minh", "ミン"], ["uống", "飲む"], ["sữa", "ミルク"], ["ăn", "食べる"], ["muốn", "～したい"], ["ngủ", "寝る"]],
    extraWords: [["đi", "行く"], ["chơi", "遊ぶ"], ["buồn ngủ", "眠い"]],
    mainWord: "uống",
    mainMeaning: "飲む"
  },
  {
    date: "2026年10月6日",
    title: "ミン、寝てる？",
    scene: "ミンが寝ているか聞いてみよう。",
    vietnamese: "Minh ngủ hả?",
    translation: "ミン、寝てる？",
    words: [["Minh", "ミン"], ["ngủ", "寝る・眠る"], ["hả", "～なの？（質問）"]],
    extraWords: [["thức", "起きている"], ["dậy", "起きる"]],
    mainWord: "ngủ",
    mainMeaning: "寝る・眠る"
  },
  {
    date: "2026年10月7日",
    title: "お母さん、ミンを抱っこしてくれる？",
    scene: "お母さんにミンを抱っこしてもらいたい。",
    vietnamese: "Mẹ ẵm Minh dùm?",
    translation: "お母さん、ミンを抱っこしてくれる？",
    words: [["Mẹ", "お母さん"], ["ẵm", "赤ちゃんを抱っこする"], ["Minh", "ミン"], ["dùm", "～してくれる？"]],
    extraWords: [["bế", "抱っこする（広く使われる表現）"]],
    mainWord: "ẵm",
    mainMeaning: "赤ちゃんを抱っこする"
  },
  {
    date: "2026年10月9日",
    title: "まだ寝てる？",
    scene: "朝、ミンがまだ寝ているか奥さんに聞く。",
    vietnamese: "Minh còn ngủ hả?",
    translation: "ミン、まだ寝てるの？",
    words: [["Minh", "ミン"], ["còn", "まだ～している・まだある"], ["ngủ", "寝る"], ["hả", "～なの？（質問）"]],
    extraWords: [["rồi", "もう・すでに"], ["chưa", "まだ～していない・もう～した？"]],
    mainWord: "còn",
    mainMeaning: "まだ～している・まだある"
  },
  {
    date: "2026年10月10日",
    title: "á・à・hả・nha・rồiって何？ひと言で会話が変わる！",
    scene: "ベトナム語の会話によく出てくる短い言葉。意味だけでなく、どんな場面で使うかを覚えよう。",
    vietnamese: "Minh còn ngủ hả? Dậy uống sữa nha.",
    translation: "ミン、まだ寝てるの？ 起きてミルクを飲もうね。",
    words: [
      ["hả", "～なの？（質問・確認）"],
      ["à", "～なの？・あ、そうなの？（確認や気づき）"],
      ["á", "強調や驚きなどを添えることがある"],
      ["nha", "～してね・～しようね"],
      ["rồi", "もう・すでに／～した"],
      ["chưa", "まだ～していない／もう～した？"],
      ["đó", "～だよ・念押しなど"],
      ["mà", "～なのに・～だってば、など"],
      ["chứ", "もちろん・～でしょ、など"],
      ["thôi", "もういい・～だけ、など"],
      ["đi", "行く／～して、など"],
      ["ạ", "丁寧さや敬意を添える"],
      ["ơi", "人に呼びかける言葉"]
    ],
    extraWords: [
      ["nhé", "～してね・～だよ（広く使われる形）"],
      ["nghen", "～してね（南部らしい言い方）"],
      ["hen", "～ね？・～しようね？（南部で使われる）"],
      ["Dạ", "はい（丁寧な返事）"]
    ],
    mainWord: "nha",
    mainMeaning: "～してね・～しようね",
    articleSections: [
      {
        heading: "🍓 1. どうして短い言葉が大切なの？",
        paragraphs: [
          "日本語でも「もう寝た？」「もう寝たの？」「もう寝たんだね」では、少し感じが違うよね。",
          "ベトナム語でも、短い言葉をつけると質問・確認・驚き・親しみなどが伝わることがあるよ。",
          "ただし、全部が同じ種類の言葉ではないよ。rồi は「もう～した」という意味を表し、hả は質問、nha は親しみのある声かけなどに使うんだ。"
        ]
      },
      {
        heading: "❓ 2. hả? は「～なの？」",
        paragraphs: [
          "相手の様子を見たり、何かを確認したりするときに使うよ。やさしい声なら普通の質問だけど、強く言うと、きつく聞こえることもあるんだ。"
        ],
        examples: [
          {v: "Minh còn ngủ hả?", j: "ミン、まだ寝てるの？", w: "còn＝まだ／ngủ＝寝る／hả＝～なの？"},
          {v: "Mẹ về rồi hả?", j: "お母さん、もう帰ってきたの？", w: "Mẹ＝お母さん／về＝帰る／rồi＝もう～した／hả＝～なの？"},
          {v: "Con đói hả?", j: "お腹すいたの？", w: "con＝子どもへの呼びかけなど／đói＝お腹がすいている"}
        ]
      },
      {
        heading: "💡 3. à? は「～なの？」「あ、そうなの？」",
        paragraphs: [
          "à は、相手に確認したり、何かに気づいたりしたときに使われるよ。hả と似ている場面もあるけれど、いつでも同じではないんだ。",
          "文の最初に À, と置くと「あっ、そうか！」のように、気づいた気持ちを表すこともあるよ。"
        ],
        examples: [
          {v: "Anh mới về à?", j: "今帰ってきたの？", w: "anh＝年上の男性などへの呼びかけ／mới＝～したばかり／về＝帰る"},
          {v: "Minh ngủ rồi à?", j: "ミン、もう寝たの？", w: "ngủ＝寝る／rồi＝もう～した／à＝確認する感じ"},
          {v: "À, đúng rồi!", j: "あっ、そうだ！", w: "À＝あっ、そうか／đúng＝正しい"}
        ]
      },
      {
        heading: "📣 4. á は強調や驚きなどを添える",
        paragraphs: [
          "南部のくだけた会話では、á が強調や驚き、話題を目立たせるために使われることがあるよ。",
          "ただし「á＝驚き」とだけ覚えると、意味を取り違えることもあるんだ。どんな文で使われているか、声の調子と一緒に覚えよう。",
          "大切！ à は下がる声調、á は上がる声調。記号が違うと発音も違うので、文字をよく見てね。"
        ],
        examples: [
          {v: "Nóng quá trời luôn á!", j: "ものすごく暑いよ！", w: "nóng＝暑い／quá＝とても／trời＝空・天など／luôn＝強調など／á＝気持ちを添える"},
          {v: "Ba trăm ngàn á?", j: "30万ドンなの!? ", w: "ba＝3／trăm＝100／ngàn＝千／á?＝驚きや確認"}
        ]
      },
      {
        heading: "💗 5. nha は「～してね」「～しようね」",
        paragraphs: [
          "nha は、お願い・誘い・軽い念押しなどを、親しみのある感じで伝えるときに使えるよ。",
          "nha がなくても通じる文はたくさんあるけれど、つけることで「～してね」という気持ちが伝わることがあるんだ。"
        ],
        examples: [
          {v: "Dậy uống sữa nha.", j: "起きてミルクを飲もうね。", w: "dậy＝起きる／uống＝飲む／sữa＝ミルク／nha＝～しようね"},
          {v: "Nhớ gọi cho anh nha.", j: "忘れずに電話してね。", w: "nhớ＝忘れずに／gọi＝電話する・呼ぶ／nha＝～してね"},
          {v: "Mai gặp nhau nha.", j: "明日また会おうね。", w: "mai＝明日／gặp nhau＝お互いに会う"}
        ]
      },
      {
        heading: "🌴 6. nhé・nha・nghen・hen はどう違う？",
        paragraphs: [
          "どれも「～ね」と訳されることがあるけれど、使われる地域や会話の感じが違うよ。",
          "南部の日常会話では nha がよく使われるよ。nghen も南部らしい親しみのある言い方。hen は誘いや確認に使われることがあるんだ。nhé も広く通じる表現だよ。",
          "最初から全部を使い分けなくても大丈夫。まずは nha を覚えて、ほかの言い方は聞きながら慣れていこう。"
        ],
        examples: [
          {v: "Đi nhé!", j: "じゃあ、行くね！", w: "đi＝行く／nhé＝～ね"},
          {v: "Đi cẩn thận nghen.", j: "気をつけて行ってね。", w: "cẩn thận＝気をつける／nghen＝～してね"},
          {v: "Chiều mình gặp nhau hen?", j: "午後に会おうね？", w: "chiều＝午後／mình＝私たちなど／gặp nhau＝会う／hen＝～ね？"}
        ]
      },
      {
        heading: "⏰ 7. rồi は「もう～した」「もう～になった」",
        paragraphs: [
          "rồi は、何かがすでに起きたことや、状態が変わったことを表すよ。á や nha とは役割が違うんだ。"
        ],
        examples: [
          {v: "Minh ngủ rồi.", j: "ミンはもう寝たよ。", w: "ngủ＝寝る／rồi＝もう～した"},
          {v: "Mẹ về rồi.", j: "お母さんはもう帰ってきたよ。", w: "về＝帰る／rồi＝もう～した"},
          {v: "Ăn rồi.", j: "もう食べたよ。", w: "ăn＝食べる／rồi＝もう～した"}
        ]
      },
      {
        heading: "🔄 8. chưa は「まだ？」や「もう～した？」",
        paragraphs: [
          "rồi と chưa は、セットで覚えるとわかりやすいよ。rồi は「もうした」、chưa は「もうした？」と尋ねたり、「まだしていない」と伝えたりするときに使うんだ。"
        ],
        examples: [
          {v: "Minh dậy chưa?", j: "ミン、もう起きた？", w: "dậy＝起きる／chưa＝もう～した？"},
          {v: "Ăn chưa?", j: "もう食べた？", w: "ăn＝食べる／chưa＝もう～した？"},
          {v: "Minh chưa dậy.", j: "ミンはまだ起きていないよ。", w: "chưa＝まだ～していない／dậy＝起きる"}
        ]
      },
      {
        heading: "🧩 9. ほかにもよく聞く短い言葉",
        paragraphs: [
          "đó は念押し、mà は反論や説明、chứ は「もちろん」という気持ち、thôi は「もういい」「～だけ」など、文脈によって意味が変わるよ。",
          "đi は「行く」だけでなく、文末で「～して」「～しよう」と促すこともあるんだ。ạ は丁寧さや敬意を添え、ơi は人に呼びかける言葉だよ。"
        ],
        examples: [
          {v: "Cẩn thận đó.", j: "気をつけてね。", w: "cẩn thận＝気をつける／đó＝念押しなど"},
          {v: "Tôi nói rồi mà.", j: "もう言ったじゃない。", w: "tôi＝私／nói＝言う／rồi＝もう～した／mà＝念押しなど"},
          {v: "Có chứ!", j: "もちろんあるよ！", w: "có＝ある／chứ＝もちろん、という気持ち"},
          {v: "Đi ngủ đi.", j: "寝てね・寝よう。", w: "đi ngủ＝寝に行く／文末の đi＝促し"},
          {v: "Mẹ ơi!", j: "お母さん！", w: "ơi＝呼びかけ"}
        ]
      },
      {
        heading: "🎯 10. 同じ文で比べてみよう",
        paragraphs: [
          "基本の文を「Minh còn ngủ（ミンはまだ寝ている）」にして、最後の言葉を変えてみよう。文の内容は近くても、質問なのか、確認なのか、念押しなのかが変わるよ。"
        ],
        examples: [
          {v: "Minh còn ngủ.", j: "ミンはまだ寝ているよ。", w: "普通に状態を伝える"},
          {v: "Minh còn ngủ hả?", j: "ミン、まだ寝ているの？", w: "hả＝質問"},
          {v: "Minh còn ngủ à?", j: "ミン、まだ寝ているの？", w: "à＝確認する感じ"},
          {v: "Minh còn ngủ đó.", j: "ミンはまだ寝ているよ。", w: "đó＝念押しなど"},
          {v: "Minh còn ngủ mà.", j: "ミンはまだ寝ているんだってば。", w: "mà＝文脈によって反論・念押し"}
        ]
      },
      {
        heading: "🍓 今日のまとめ",
        paragraphs: [
          "まずは hả（質問）、nha（～してね）、rồi（もう～した）、chưa（もうした？・まだ）、á（強調など）の5つから始めよう。",
          "短い言葉ほど、前後の文や声の調子と一緒に覚えるのがコツ。日本語訳だけで覚えず、「どんな場面で使うか」を想像して練習してみてね！"
        ]
      }
    ]
  },
  {
    date: "2026年10月11日",
    title: "雨が降りそう！",
    scene: "空が暗くなってきたとき、奥さんに雨が降りそうだと伝える。",
    vietnamese: "Hình như sắp mưa.",
    translation: "雨が降りそう。",
    words: [["Hình như", "～みたい・どうやら～らしい"], ["sắp", "もうすぐ～する"], ["mưa", "雨・雨が降る"]],
    extraWords: [["trời", "空・天気"], ["nóng", "暑い"], ["lạnh", "寒い"]],
    mainWord: "sắp",
    mainMeaning: "もうすぐ～する"
  }
];

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
  {v:"dùm",m:"～してくれる・～してもらえる",p:"表現",o:"—",e:"Mở cửa dùm đi.",j:"ドアを開けてくれる？"},
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
  {v:"về",m:"帰る",p:"動詞",o:"đi（行く）",e:"Mình về.",j:"帰る。"},
  {v:"ẵm",m:"赤ちゃんを抱っこする（南部でよく使う）",p:"動詞",o:"đặt xuống（下ろす）",e:"Mẹ ẵm Minh.",j:"お母さんがミンを抱っこする。"},
  {v:"sáng",m:"朝・明るい",p:"名詞・状態",o:"tối（夜・暗い）",e:"Sáng rồi.",j:"もう朝だよ。"},
  {v:"mà",m:"～なのに・～だけど",p:"表現",o:"—",e:"Sáng rồi mà Minh chưa dậy.",j:"もう朝なのに、ミンはまだ起きていない。"},
  {v:"ơi",m:"呼びかけに使う言葉",p:"表現",o:"—",e:"Minh ơi!",j:"ミン、ねえ！"},
  {v:"nha",m:"～しようね・～してね（やわらかい言い方）",p:"表現",o:"—",e:"Dậy uống sữa nha.",j:"起きてミルクを飲もうね。"},
  {v:"à",m:"確認・気づきなどを添える言葉",p:"表現",o:"—",e:"Minh ngủ rồi à?",j:"ミン、もう寝たの？"},
  {v:"á",m:"強調や驚きなどを添えることがある",p:"表現",o:"—",e:"Nóng quá trời luôn á!",j:"ものすごく暑いよ！"},
  {v:"nhé",m:"～してね・～だよ",p:"表現",o:"—",e:"Đi nhé!",j:"じゃあ、行くね！"},
  {v:"nghen",m:"～してね（南部らしい言い方）",p:"表現",o:"—",e:"Đi cẩn thận nghen.",j:"気をつけて行ってね。"},
  {v:"hen",m:"～ね？・～しようね？",p:"表現",o:"—",e:"Chiều mình gặp nhau hen?",j:"午後に会おうね？"},
  {v:"đó",m:"念押しや強調など",p:"表現",o:"—",e:"Cẩn thận đó.",j:"気をつけてね。"},
  {v:"chứ",m:"もちろん・～でしょ、など",p:"表現",o:"—",e:"Có chứ!",j:"もちろんあるよ！"},
  {v:"thôi",m:"もういい・～だけ、など",p:"表現",o:"—",e:"Thôi, đi ngủ.",j:"もう、寝よう。"},
  {v:"ạ",m:"丁寧さや敬意を添える",p:"表現",o:"—",e:"Dạ.",j:"はい。"},
  {v:"mưa",m:"雨・雨が降る",p:"名詞・動詞",o:"—",e:"Sắp mưa.",j:"雨が降りそう。"},
  {v:"sắp",m:"もうすぐ～する",p:"副詞",o:"—",e:"Hình như sắp mưa.",j:"雨が降りそう。"},
  {v:"nóng",m:"暑い",p:"状態",o:"lạnh（寒い）",e:"Trời nóng.",j:"暑い。"},
  {v:"lạnh",m:"寒い・冷たい",p:"状態",o:"nóng（暑い）",e:"Trời lạnh.",j:"寒い。"},
  {v:"trời",m:"空・天気",p:"名詞",o:"—",e:"Trời nóng.",j:"暑い。"}
];

function speakVietnamese(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    alert("このブラウザでは音声再生に対応していません。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "vi-VN";
  utterance.rate = 0.78;
  utterance.pitch = 1;
  utterance.volume = 1;
  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("vi"));
  if (viVoice) utterance.voice = viVoice;
  window.speechSynthesis.speak(utterance);
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
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

function renderLesson() {
  const container = document.getElementById("lessons");
  if (!container) return;

  const selectedDate = new URLSearchParams(location.search).get("date");
  const lesson = lessons.find(x => x.date === selectedDate) || lessons[lessons.length - 1];

  container.innerHTML = `
    <article class="today-card" id="today">
      <div class="today-label">🍓 ${esc(lesson.date)}</div>
      <h2>${esc(lesson.title)}</h2>

      <section class="scene">
        <div class="scene-icon">👶</div>
        <h3>今日の出来事</h3>
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
          <h3>${esc(section.heading)}</h3>
          ${(section.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join("")}
          ${section.examples?.length ? section.examples.map(renderExample).join("") : ""}
        </section>
      `).join("") : ""}

      <section class="word-section">
        <h3>🔎 今日の言葉をひとつずつ</h3>
        <div class="word-list">${lesson.words.map(w => `
          <div class="word">
            <div class="word-vietnamese">${esc(w[0])}</div>
            <div class="word-japanese">${esc(w[1])}</div>
            <button class="glossary-audio" data-speak="${esc(w[0])}">🔊</button>
          </div>`).join("")}
        </div>
      </section>

      ${lesson.extraWords?.length ? `
        <section class="word-section">
          <h3>📚 関連する言葉</h3>
          <div class="word-list">${lesson.extraWords.map(w => `
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

      <section class="word-section">
        <h3>🍓 今日の復習カード</h3>
        <p>最後に、今日覚えた言葉をもう一度確認しよう。</p>
        <div class="word-list">${lesson.words.map(w => `
          <div class="word">
            <div class="word-vietnamese">${esc(w[0])}</div>
            <div class="word-japanese">${esc(w[1])}</div>
            <button class="glossary-audio" data-speak="${esc(w[0])}">🔊</button>
          </div>`).join("")}
        </div>
      </section>

      <section class="archive" id="words">
        <h3>📚 これまでの一語</h3>
        <p>日付を押すと、その日のレッスンを復習できます。</p>
        ${[...lessons].reverse().map(x => {
          const keyWords = (x.archiveWords || x.words.slice(0, 5).map(w => w[0])).slice(0, 5);
          return `<p><a href="./index.html?date=${encodeURIComponent(x.date)}#today">🍓 ${esc(x.date)}　${keyWords.map(esc).join(" ・ ")}</a></p>`;
        }).join("")}
        <p><a href="./words.html">📚 単語を検索・復習する</a></p>
      </section>
    </article>`;
}

document.addEventListener("click", e => {
  const button = e.target.closest("[data-speak]");
  if (button) speakVietnamese(button.dataset.speak);
});

document.addEventListener("DOMContentLoaded", renderLesson);
