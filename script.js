//--ログ用データ
var prologueLog = [
    ["", "あなたは貴族の家系で、裕福な暮らしをしていた。"],
    ["主人公", "ふ～、今日も遊びつくしたぜ…"],
    ["", "そんな中、あなたの家が財政困難により破産してしまった！"],
    ["主人公", "な、なんだって～！"],
    ["主人公", "でも、働くのは嫌だな...。あ、そうだ！"],
    ["主人公", "ヒモになろう！"],
    ["", "あなたは、ヒモになることを決意した。"],
    ["主人公", "どうやら今晩、お城で舞踏会が行われるらしい。"],
    ["主人公", "自分を伝説の勇者と偽って、女王や姫を欺くんだ！"],
    ["", "登場人物とのやり取りから、好感度を上げて立派なヒモになろう！"]
];
var day1NoonLog = [
    ["主人公", "舞踏会には隣国の姫たちも来るらしい。"],
    ["主人公", "姫たちのヒモになれれば今までの生活が続けられる！"],
    ["", "こうしてアレックスは舞踏会に向かうのであった。"]
];
var day1NoonLeon1Log = [
    ["", "城に向かう途中、男性に話しかけられる。"],
    ["レオン", "よう。お前も舞踏会に行くのか？"],
    ["主人公", "（誰だ、この人？どっかの貴族の息子か？しかし、イケメンだな...。）"]
];
var day1NoonLeon21Log = [
    ["", "あなたは名を名乗り、男性と一緒に舞踏会へ向かった。"]
];
var day1NoonLeon22Log = [
    ["", "あなたは名を名乗った。それで会話は終了した。"]
];
var day1NoonLeon23Log = [
    ["主人公", "俺は女の子にしか興味がないからどっか行ってくれ。"]
];
var day1NightLog = [
    ["", "舞踏会が始まる。"],
    ["", "会場内のボーイがワインを運んできた。なんとも親切なことだ。"]
];
var day1Night11Log = [
    ["主人公", "（せっかく持ってきてくれたし、全部飲んでしまおう。）"]
];
var day1Night12Log = [
    ["主人公", "（いや、ここで飲まぬは武士の恥！全部飲んでしまおう！）"]
];
var day1Night2Log = [
    ["", "酒がそんなに強くないくせに、アレックスはワインを飲みほした！"],
    ["主人公", "（さあ、気合い入れて宿を探しに行くぞ！）"]
];
var day1Night31Log = [
    ["主人公", "（よし、広間に向かおう。）"]
];
var day1Night32Log = [
    ["主人公", "（よし、バルコニー前に向かおう。）"]
];
var day1Night33Log = [
    ["主人公", "（よし、階段下に向かおう。）"]
];
var day1Night31ALog = [
    ["", "広間に着くと、桃色の髪の可愛らしい女の子がいた。"],
    ["主人公", "（あの子は確か...隣国の王女、リリアン？これはチャンスだ！）"],
    ["", "どうにか話しかけようと様子を窺っていると、向こうから話しかけてきた。"],
    ["リリアン", "ごきげんよう。私はリリアンと申します。あなたの名前は？"]
];
var day1Night31BLog = [
    ["", "（あなたは名を名乗り、勇者をやっていると偽った）"],
    ["リリアン", "まあっ！勇者様！お待ちしておりました。@ささっ、もっとこっちへ。"],
    ["主人公", "（おお、こんな待遇だなんて、流石勇者だな！真似してよかったぜ。）"],
    ["リリアン", "勇者様、さっそくでございますが、一緒に踊りませんか？"],
    ["主人公", "（姫と踊れるなんて！これは千載一遇のチャンスだ！）"]
];
var day1Night31C1Log = [
    ["リリアン", "ありがとうございます。それでは一緒に舞い踊りましょう。"],
    ["主人公", "あなたはひどく酔っぱらっていたため、上手くダンスを踊れなかった...。"],
    ["", "こうして、リリアンと踊りを楽しんだ。"],
    ["リリアン", "ふぅ、少し疲れましたね。お話ししながら休憩しましょうか。"]
];
var day1Night31C2Log = [
    ["リリアン", "ありがとうございます。それでは一緒に舞い踊りましょう。"],
    ["主人公", "あなたはちょうどよく酔っぱらっていたため、軽やかにダンスを踊れた！"],
    ["", "こうして、リリアンと踊りを楽しんだ。"],
    ["リリアン", "ふぅ、少し疲れましたね。お話ししながら休憩しましょうか。"]
];
var day1Night31C3Log = [
    ["リリアン", "ありがとうございます。それでは一緒に舞い踊りましょう。"],
    ["主人公", "あなたは緊張していたからか、あまり上手にダンスを踊れなかった...。"],
    ["", "こうして、リリアンと踊りを楽しんだ。"],
    ["リリアン", "ふぅ、少し疲れましたね。お話ししながら休憩しましょうか。"]
];
var day1Night31DLog = [
    ["リリアン", "あら、踊りは不得意なんですね。勇者様ったらお可愛いっ。"],
    ["主人公", "（...。なんだかときめきそうだ。笑顔がまぶしい。そして...可愛い。）"]
];
var day1Night31ELog = [
    ["リリアン", "実は、私には妹がいるんです。@それで、いつも一番にしてもらえなくって。"],
    ["リリアン", "だから常に一番に見てほしいっていう願望があるんです。"],
    ["リリアン", "こういうフリフリの可愛い服も、妹に取られてばかりで着るのが久しぶりなんです。"],
    ["リリアン", "もしかして勇者様なら、一番に見てくれるかもって思いました。"],
    ["リリアン", "ですので明日一日、一緒に城下町へお出かけしませんか？"],
    ["主人公", "（いきなりデートチャンス！これは行くしかないのでは？）"]
];
var day1Night31E1Log = [
    ["リリアン", "まぁっ！ありがとうございます。@それでは明日のお昼ごろに城下町で待ち合わせをしましょう。"]
];
var day1Night31E2Log = [
    ["リリアン", "少し急な誘いでしたね、ごめんなさい。でもまた会ってくれると嬉しいです。"],
    ["リリアン", "（勇者様、謙虚で素敵なお方ですね。）"]
];
var day1Night31E3Log = [
    ["", "そう言うと、リリアンは去っていった。"]
];
var day1Night32ALog = [
    ["", "バルコニー前に着くと、紫色の髪の美しい女性がいた。"],
    ["主人公", "（あれは隣国の姫、アリーナ？よし、積極的に話しかけてアピールするぞ）"],
    ["", "あなたはアリーナに話しかける。"],
    ["アリーナ", "あら、こんばんは。私はアリーナと申します。名前を聞いても？"]
];
var day1Night32BLog = [
    ["", "あなたは名を名乗り、勇者をやっていると偽った"],
    ["アリーナ", "勇者...勇者様！？まぁっ、いらしてくれたんですね。@ありがとうございます。"],
    ["主人公", "（勇者ってだけでこんなに喜ぶんだな。）"],
    ["アリーナ", "踊りは苦手なんですけれど...@よろしければ勇者様、私と踊りませんか？"],
    ["主人公", "（アリーナは踊りが苦手なのか。@でもお姫様とダンスできるなら嬉しいな。）"]
];
var day1Night32C1Log = [
    ["アリーナ", "そ、そうですか。それでは一緒にお話ししましょう。"],
    ["主人公", "あなたはひどく酔っぱらっていたため、ろれつが回らず、上手く話せなかった...。"],
    ["", "こうして、アリーナと他愛のない会話を楽しんだ。"]
];
var day1Night32C2Log = [
    ["アリーナ", "そ、そうですか。それでは一緒にお話ししましょう。"],
    ["主人公", "あなたは酔っぱらっていたため、あまり上手く話せなかった...。"],
    ["", "こうして、アリーナと他愛のない会話を楽しんだ。"]
];
var day1Night32C3Log = [
    ["アリーナ", "そ、そうですか。それでは一緒にお話ししましょう。"],
    ["主人公", "あなたはアリーナとのテンション感を合わせて、上手に話すことができた！"],
    ["", "こうして、アリーナと他愛のない会話を楽しんだ。"]
];
var day1Night32DLog = [
    ["アリーナ", "わかりました。それでは共に舞い踊りましょう。"],
    ["", "アリーナと踊りを楽しんだ。そうして、疲れたので休むことにした。"]
];
var day1Night32ELog = [
    ["アリーナ", "私、実は人前に出るのがあまり得意じゃないんです。"],
    ["アリーナ", "だからこういう場も少し苦手で。表に立つ公務も出来なくて、民衆からの評判は下がるばかり。"],
    ["アリーナ", "容姿をほめていただくことは多いのですが、中身は空っぽで自信がないんです。"],
    ["アリーナ", "でも勇者様なら、容姿ではなく私の中身を見てくれるのではないかって思いました。"],
    ["アリーナ", "ですので明日一日、一緒に城下町へお出かけしませんか？"],
    ["主人公", "（いきなりデートチャンス！これは行くしかないのでは？）"]
];
var day1Night32E1Log = [
    ["アリーナ", "ありがとうございます。@それでは明日のお昼ごろに城下町で待ち合わせをしましょう。"]
];
var day1Night32E2Log = [
    ["アリーナ", "少し急な誘いでしたね、ごめんなさい。でもまた会ってくれると嬉しいです。"],
    ["アリーナ", "（勇者様、謙虚で素敵なお方ですね。）"]
];
var day1Night32E3Log = [
    ["", "そう言うと、アリーナは去っていった。"]
];
var day1Night33ALog = [
    ["", "階段下に着くと、城に向かう途中で会った男性がいた。"],
    ["主人公", "（あいつはさっき会った...名前は何だっけか。とりあえず、挨拶しとくか。）"],
    ["レオン", "よう。また会ったな。俺はレオン。改めて、よろしくな。"],
    ["レオン","舞踏会は楽しんでいるか？"]
];
var day1Night33BLog = [
    ["", "あなたはレオンの質問に対し肯定し、一緒に酒を飲もうと提案した"],
    ["レオン", "ははっ！そうこなくっちゃな。一緒に飲もうぜ、兄弟。"],
    ["レオン", "ところであんた、ギャンブルは好きか？少し、賭けをしようぜ。"]
];
var day1Night33C1Log = [
    ["レオン", "やっぱお前最高だな！よっしゃ、始めるぞ！"],
    ["主人公", "酔いがかなり回っていたため、酔いのノリでレオンに勝つことができた！"],
    ["レオン", "ありがとな。楽しかったぜ。"],
    ["", "こうして、レオンとギャンブルを楽しんだ。"]
];
var day1Night33C2Log = [
    ["レオン", "やっぱお前最高だな！よっしゃ、始めるぞ！"],
    ["主人公", "あまり酔いが回っていなく、レオンの策略にまんまと乗ってしまい、負けた。"],
    ["レオン", "ありがとな。楽しかったぜ。"],
    ["", "こうして、レオンとギャンブルを楽しんだ。"]
];
var day1Night33C3Log = [
    ["レオン", "やっぱお前最高だな！よっしゃ、始めるぞ！"],
    ["主人公", "全く酔いが回っていなく、レオンの策略にまんまと乗ってしまい、負けた。"],
    ["レオン", "ありがとな。楽しかったぜ。"],
    ["", "こうして、レオンとギャンブルを楽しんだ。"]
];
var day1Night33DLog = [
    ["レオン", "臆病なやつだな。まあいい。"],
    ["", "こうして、レオンと他愛のない会話を楽しんだ。"]
];
var day1Night33RLog = [
    ["レオン", "この後、２人で少し話がしたい。@舞踏会が終わったら、バルコニー前に来てくれ。"],
    ["", "そう言い残すと、レオンはその場から去っていった。"]
];
var day1Night33R2Log = [
    ["", "舞踏会終了後 - バルコニー前"],
    ["レオン", "呼び出してすまない。そしてわざわざありがとな。"],
    ["レオン", "君に聞きたいことがあって呼び出したんだ。"],
    ["レオン", "君は...本当に勇者なのか？本物の勇者なのか？"]
]
var day1Night33RRLog = [
    ["", "あなたは自分が勇者と偽っているという事実を話した。"],
    ["レオン", "そうか、もしかしたら２人で「らくえん」が作れるかもな。"],
    ["", "そう言い残すと、レオンはその場から去っていった。"]
];
var day1Night33RNLog = [
    ["レオン", "...そうか..."],
    ["", "そう言い残すと、レオンはその場から去っていった。"]
];
var day1NightEnd = [
    ["主人公", "（ふぅ、今日はちょっと疲れたな...。）"],
    ["", "どうやら今日は舞踏会に参加した人が特別に泊まれる宿があるらしい。"],
    ["主人公", "（タダ飯も食えて泊まれるとか最高だな！）"],
    ["", "あなたはふかふかのベッドで深い眠りについた...。"]
];
var d2Mo1If1 = [
    ["", "今日は約束の日。"],
    ["主人公", "（やばい、二度寝した。急がないと！）"]
];
var d2Mo1If21 = [
    ["", "時間的にどちらかとしか行けなさそうだ。"]
];
var d2MoChoice1Log = [
    "誰とデートに行く？",
    "リリアン",
    "アリーナ"
];
var d2Mo1If22 = [
    ["", "片方には体調不良でいけないと伝えた！"]
];
var d2Mo1If0 = [
    ["", "何もなく１日が終わってしまった。"],
    ["", "外に散歩しに行くと…"],
    ["", "楽しそうな会話が聞こえてくる。"],
    ["", "それは昨日話したリリアン、アリーナ、レオンの仲睦まじい姿であった…。"]
];
//デート内容（リリアン）
var d2NoLi1 = [
    ["","待ち合わせに向かっている途中、道に迷っている女の子がいた。"]
];
var d2NoLi1If1 = [
    ["リリアン", "ひどい！なんで遅刻したんですか！！@私は楽しみにしてたのに、勇者様にとってはその程度だったんですね！！！！！！！！！！"]
];
var d2NoLi1If2 = [
    ["リリアン", "勇者様！おはようございます！さあ行きましょう！"]
];
var d2NoLi2 = [
    ["", "２人とも緊張した面持ちで街中を歩く…"],
    ["リリアン", "勇者様…今日の私、どう思いますか？"]
];
var d2NoLi2If1 = [
    ["リリアン", "リリアン昨日お洋服についてお話ししましたよね？！！！！なんでまず先にお洋服褒めてくれないんですか！！！！！？"]
];
var d2NoLi2If2 = [
    ["リリアン", "私のこと、わかってくれてるんですね。@このお洋服、一番のお気に入りなんです。"]
];
var d2Noli3 = [
    ["", "リリアンに連れられて、女性向けの服屋に入った。"],
    ["リリアン", "う～ん、２着で迷っているのですが、どちらのほうが似合いますか？"]
];
var d2NoLi3If1 = [
    ["リリアン", "…どこをどう見たら、これが似合うなんて思えるんですか？"]
];
var d2NoLi3If2 = [
    ["リリアン", "わっ！うれしいです。@こんなにかわいい服、似合ってるなんて言ってもらえて…！"]
];
var d2NoLi4 = [
    ["", "雰囲気の良いカフェに入った"],
    ["リリアン", "どれもおいしそうですね！あっ！"]
];
var d2NoLi4If1 = [
    ["リリアン", "あら、お皿を落としてしまったようですね。"]
];
var d2NoLi4If2 = [
    ["リリアン", "・・・"],
    ["", "外にはとても美人な女の人が通りすがっていった。"],
    ["リリアン", "今ほかの女見てたでしょ！！！！私とデートしてるのに！！@さいってい！！！！！！！！！！！！！！"]
];
var d2Noli5 = [
    ["", "帰り道、建物の隙間から猫が出てきた"],
    ["リリアン", "あっ！かわいい猫さん！"],
    ["リリアン", "私、いつか猫飼いたいんですよね～！勇者様はどうですか？"]
];
var d2Noli5wakide = [
    ["", "帰り道、建物の隙間から変な犬が出てきた"],
    ["リリアン", "あっ！変な犬！"],
    ["リリアン", "私、いつか犬飼いたいんですよね～！勇者様はどうですか？"]
];
var d2NoLi5If1 = [
    ["リリアン", "私がいるのに？私だけ見てくれないんですか？"]
];
var d2NoLi5If2 = [
    ["リリアン", "そうなんですね！まぁ私以外そばに居られても困りますからね！"]
];
var d2NoLi5If3 = [
    ["リリアン", "私はペットじゃないです。勇者様こそ家畜になったほうがいいんじゃないですか？"]
];
//デート（アリーナ）
var d2No11log = [
    ["", "緊張した面持ちで街中を歩く…"],
    ["アリーナ", "あのっ！勇者様にとって私の印象はどのようなものでしょうか…？"]
];
var d2No111log = [
    ["アリーナ", "…！！！@うれしいです…、今までは中身を認めてくださる方はいなかったので。"]
];
var d2No112log = [
    ["アリーナ", "…私は外見しか取り柄のないからっぽで価値のない女だということですか？"]
];
var d2No21log = [
    ["", "花を売る少女がこちらに駆け寄ってきた"],
    ["花売りの少女", "こんにちは！よかったら花！買ってくれませんか！"]
];
var d2No211log = [
    ["アリーナ", "あら、買わないんですか？@まあお城にはもっときれいなお花がありますものね！"]
];
var d2No212log = [
    ["アリーナ", "花…買ったんですね。あの子が元気な子だったから。@私とは正反対ないい子だから、私とは違って。。。"]
];
var d2No31log = [
    ["", "雰囲気の良いカフェに入った"],
    ["アリーナ", "お願いがあるんですけど、ウェイトレスさんを呼ぶときは私に任せてもらえないでしょうか？"],
    ["アリーナ", "苦手を克服したくて…！"],
    ["", "アリーナはウェイトレスを呼ぼうとするが…"],
    ["アリーナ", "あ…あの…。あっ"],
    ["", "結局勇者が呼ぶことになった"],
    ["アリーナ", "ごめんなさい、自分からやるといったのに出来なくて"]
];
var d2No311log = [
    ["アリーナ", "勇者様はお優しいのですね。"]
];
var d2No312log = [
    ["アリーナ", "私だってそんなのわかってますよ！私が一番わかってます！！！！なんでそんな攻めるような言い方！！ひどい！！"]
];
var d2No41log = [
    ["", "腹ごなしに散歩することになった"],
    ["アリーナ", "海風が気持ちいい通りですね。私、海が大好きなんです。@でも、あんまり詳しくないんですよね。"]
];
var d2No411log = [
    ["アリーナ", "勇者様って海にも詳しいんですね！私、海がもっと好きになりました！"]
];
var d2No412log = [
    ["アリーナ", "…私、外交が苦手でできないって言いましたよね？@そんな私に向かって船のお話をされるなんて…嫌味ですか？"]
];
var d2No51log = [
    ["", "帰り道、故郷の話になった"],
    ["アリーナ", "私は故郷…国を離れたことがないので、とても興味深いです！@もっと聞かせてください！"]
];
var d2No511log = [
    ["アリーナ", "いいですね！幼馴染って私にはいないのでうらやましいです！"]
];
var d2No512log = [
    ["アリーナ", "私という女性がいながら、ほかの女性のお話をしていて楽しいのですか？そんなに私をもてあそんで楽しいですか？"]
];
//夜--リリアン
var d2Ni11log = [
    ["", "人々が寝静まったころ、リリアンに呼びだされ、バルコニー前に来た。"]
];
var d2Ni12log = [
    ["リリアン", "勇者様はとてもお優しく、心を許せるお人だと今日、お出かけしてそう思いました。"],
    ["リリアン", "ですので、どうか私の悩みを聞いていただけないでしょうか？"],
    ["リリアン", "私はこの舞踏会に婚約者を探すためにやってきました。"],
    ["リリアン", "しかし舞踏会にいる方が見ているのは、私の立場ばかり。"],
    ["リリアン", "勇者様、どうすればよいでしょうか？"]
];
var d2Ni111log = [
    ["リリアン", "…嬉しいです。それが無理な願いだとしても。"]
];
var d2Ni112log = [
    ["リリアン", "私が説得しても無理なんだからあんたなんか無理に決まってるでしょ！！！！！"]
];
var d2Ni113log = [
    ["リリアン", "…はい。悩みを聞いてくださり、ありがとうございました。"]
];
//夜--アリーナ
var d2Ni21log = [
    ["", "人々が寝静まったころ、アリーナに呼びだされ、バルコニー前に来た。"]
];
var d2Ni22log = [
    ["アリーナ", "勇者様はとてもお優しく、心を許せるお人だと今日、お出かけしてそう思いました。"],
    ["", "ですので、どうか私の悩みを聞いていただけないでしょうか？"],
    ["", "何度も申し上げてしまうのですが、私は昔から人前に出ることが苦手です。"],
    ["", "しかし外見だけは称賛していただけるほどの価値がありました。"],
    ["", "国王は私の外見だけでも生かせるようにと、外交を執り行うつもりです。"],
    ["", "そんな外見だけを必要とされる生活が苦しいのです。"]
];
var d2Ni211log = [
    ["アリーナ", "私の立場を考えてください。できるならとっくにしています。"]
];
var d2Ni212log = [
    ["アリーナ", "…本当ですか？嬉しいです。本当に、ありがとうございます。"]
];
var d2Ni213log = [
    ["アリーナ", "…はい。悩みを聞いてくださり、ありがとうございました。"]
];
//夜--レオン
var d2Ni31log = [
    ["", "──人々が寝静まったころ、レオンに呼びだされ、バルコニー前に来た。"],
    ["レオン", "まどろっこしいのは嫌いなんでね。正直に言わせてもらう。"]
];
var d2Ni32log = [
    ["レオン", "おまえ、勇者じゃないだろ。"],
    ["レオン", "そして目的は俺と全く一緒なんだろ？"],
    ["レオン", "だったら２人同時に目的達成なんてありえない。"],
    ["レオン", "俺と勝負して、決着をつけよう。"]
];
var d2Ni33log = [
    ["レオン", "俺はお前が邪魔だ。"],
    ["レオン", "訳あって姫たちに近づかれると困るんだよ。"],
    ["レオン", "だから、俺と勝負しろ。"],
    ["レオン", "負けた方が手を引く。どうだ？"]
];
var d2Ni32Alog = [
    ["レオン", "それでこそ「勇者」だ。"]
];
var d2Ni32Blog = [
    ["レオン", "そうだな、どっちが先に達成できるか勝負だ。"],
    ["", "レオンはそう言い残すと、その場から去っていった。"]
];
var d2Ni32Clog = [
    ["レオン", "つまんねえ奴だな。まあいい。@そしたら俺が先に目的を達成するだけだ。"],
    ["", "そう話を終え、自室に戻ろうとしたその時..."],
    ["", "あなたはレオンに背中を刺され、命を落とした。"]
];
var d2Ni32C2log = [
    ["レオン", "そうだな。結局は姫たちの気持ち次第だからな。"],
    ["", "レオンはそう言い残すと、その場から去っていった。"]
];
var d2Ni311log = [
    ["", "２人とも剣を取り、本気で戦うも...勝負はつかなかった。"]
];
var d2Ni312log = [
    ["レオン", "勝負じゃ決着がつかねえみたいだな。"],
    ["レオン", "勝負はどっちが早く姫を落とせるか、だな。"]
];

//帰り道
var refuseArenaLog = [
    ["", "デートも終わり、帰り道を歩いていると…"],
    ["リリアン", "あら、勇者様…？今日は体調不良のはずでは…？"],
    ["リリアン", "…私との約束を破って、他の子と遊んでいらっしゃったのですね。"]
];
var refuseLilianLog = [
    ["", "デートも終わり、帰り道を歩いていると…"],
    ["アリーナ", "あら、勇者様…？今日は体調不良のはずでは…？"],
    ["アリーナ", "…私との約束を破って、他の子と遊んでいらっしゃったのですね。"]
];
//エンディング
var badEnd1 = [
    ["レオン", "・・・"],
    ["主人公", "なに見てんだ。そこをどいてくれないか"],
    ["レオン", "まて。お前怪しくないか…？なにか企んでいるな"],
    ["主人公", "（ギクッ！！）な…なななんだよ！！！！はやくどけよ！！！"],
    ["レオン", "（よし。今後俺の邪魔になるかもしれないから排除しておこう）"],
    ["", "こうして、レオンに殺されたあなたの夢は途絶えたのだった。"]
];
var badEnd2Log = [
    ["主人公", "この俺を知らないのか？俺は勇者様だぞ！"],
    ["リリアン", "な、なんと無礼な...！みなさん、この者を捕まえてください！"],
    ["主人公", "（え...えっ！？）"],
    ["", "そうして、周りにいた人々に取り押さえられてしまった。"],
    ["", "そのまま城を追い出され、二度と入ることはできなくなった。"],
    ["", "こうして、あなたのヒモになる夢は途絶えたのだった。"]
];
var badEnd3Log = [
    ["主人公", "この俺を知らないのか？俺は勇者様だぞ！"],
    ["アリーナ", "な、なんと無礼な...！みなさん、この者を捕まえてください！"],
    ["主人公", "（え...えっ！？）"],
    ["", "そうして、周りにいた人々に取り押さえられてしまった。"],
    ["", "そのまま城を追い出され、二度と入ることはできなくなった。"],
    ["", "こうして、あなたのヒモになる夢は途絶えたのだった。"]
];
var badEnd4Log = [
    ["", "あなたは「俺は女の子にしか興味がないからどっか行ってくれ。」と言った。"],
    ["レオン", "お、お前...！この勇者になんてことを...！みんな！こいつを捕らえてくれ！"],
    ["主人公", "（え...えっ！？）"],
    ["", "そうして、周りにいた人々に取り押さえられてしまった。"],
    ["", "そのまま城を追い出され、二度と入ることはできなくなった。"],
    ["", "こうして、あなたのヒモになる夢は途絶えたのだった。"]
];
var happyEndLilianLog = [
    ["リリアン", "勇者様、これからはずーっと一緒ですね…！"],
    ["", "リリアンはあの舞踏会で、美しく踊るあなたに惚れたらしい。"],
    ["", "こうして主人公は勇者と偽ったまま、リリアンのお金で裕福に暮らしていくのであった。"]
];
var happyEndArenaLog = [
    ["アリーナ", "勇者様、これからはずーっと一緒ですね…！"],
    ["", "アリーナはあの舞踏会で、冷静沈着に話ができるスマートなあなたに惚れたらしい。"],
    ["", "こうして主人公は勇者と偽ったまま、アリーナのお金で裕福に暮らしていくのであった。"]
];
var rakuenEndLog = [
    ["リリアン", "アレックス～！今月のお小遣いどうぞっ！"],
    ["アリーナ", "あ、私だって～！はい！レオン様", "今月のお小遣いです！"],
    ["レオン", "ああ、いつもありがとう、二人共。"],
    ["", "こうしてアレックスは友情と恋愛、金づる。すべてを手に入れたのであった。"]
];
var trueEndLog = [
    ["リリアン", "勇者様～！♡@今月のお小遣いどうぞっ！"],
    ["アリーナ", "勇者様～！♡@私からもどうぞっ！"],
    ["", "──こうしてアレックスは二人のヒモになることができたのであった。"]
];
var homoEndLog = [
    ["", "さびれた村にて"],
    ["レオン", "アレックス、俺らは何もかも失ったけど"],
    ["レオン", "ここから本当の勇者になるために頑張っていこうぜ！"],
    ["", "こうして二人は本物の勇者になるために切磋琢磨するのであった。"]
];
var bochiEndLog = [
    ["主人公", "結局誰とも仲良くなれなかったな…"],
    ["", "あなたは一人、宿部屋にたたずんでいた。"],
    ["", "ふと窓の外を眺める、そこには…"],
    ["リリアン", "レオン様待って～！"],
    ["アリーナ", "あ、リリアンってば！レオン様に引っ付かないでください！"],
    ["", "三人の仲睦まじい姿がそこにはあった。"]
];

//--選択肢用データ
var day1NoonLeonChoiceLog = [
    "どうする？", "舞踏会に同行する", "名を名乗る", "男には興味ない"
];
var day1NightWineChoiseLog = [
    "ワインを飲む？", "はい", "いいえ"
];
var day1NightPlaceLog = [
    "どこへ向かう？", "広間", "バルコニー前", "階段下"
];
var d1NiLiChoice1Log = [
    "どうする？",
    "名を名乗り、勇者だと偽る",
    "勇者の名前で、リリアンの反応を見る"
];
var d1NiLiChoice2Log = [
    "どうする？",
    "リリアンと踊る",
    "このまま会話を続ける"
];
var d1NiLiChoice3Log = [
    "どうする？",
    "デートの約束をする",
    "デートの約束を断る"
];
var d1NiArChoice1Log = [
    "どうする？",
    "名を名乗り、勇者だと偽る",
    "勇者の名前で、リリアンの反応を見る"
];
var d1NiArChoice2Log = [
    "どうする？",
    "アリーナと踊る",
    "このまま会話を続ける"
];
var d1NiArChoice3Log = [
    "どうする？",
    "デートの約束をする",
    "デートの約束を断る"
];
var d1NiLeChoice1Log = [
    "どうする？",
    "肯定し、共に酒を嗜む",
    "男には興味ない"
];
var d1NiLeChoice2Log = [
    "どうする？",
    "ギャンブルを始める",
    "このまま会話を続ける"
];
var d1NiLeChoice3Log = [
    "どうする？",
    "本当のことを話す",
    "ごまかす"
];
var d2Nochoice1 = [
     "どうする？", "助ける", "助けない" 
];
var d2Nochoice2 = [
    "どこを褒める？", "髪型", "服装"
];
var d2Nochoice3 = [
    "どっちを選ぶ？", "右", "左"
];
var d2Nochoice4 = [
    "音が鳴った。どこを見る？", "音がしたほうを見る", "外を見る"
];
var d2Nochoice5 = [
    "どうする？", "飼いたい", "飼いたくない", "リリアンを飼っちゃいたい"
];
var d2Nochoice6 = [
    "どこを褒める？", "性格", "外見"
];
var d2Nochoice7 = [
    "どうする？", "買う", "買わない"
];
var d2Nochoice8 = [
    "どうする？", "共感して慰める", "原因と対策を突きとめて慰める"
];
var d2Nochoice9 = [
    "どうする？", "海の知識を話す", "船の知識を話す"
];
var d2Nochoice10 = [
    "どうする？", "故郷の母親の話をする", "故郷の幼馴染の話をする"
];
var d2Nichoice1 = [
    "どうする？", "一緒に駆け落ちしよう", "俺が説得するよ", "そっか、大変だね"
];
var d2Nichoice2 = [
    "どうする？", "一緒に駆け落ちしよう", "俺が説得するよ", "そっか、大変だね"
];
var d2Nichoice3 = [
    "どうする？", "全力で君に挑むよ", "戦う気はない", "戦場はここじゃない"
];
// エンド一覧
var endListArray = [
    ["失礼END</br>（レオン）", false],
    ["無礼END</br>（リリアン）", false],
    ["無礼END</br>（アリーナ）", false],
    ["無礼END</br>（レオン）", false],
    ["女の子を優先</br>しましょうEND", false],
    ["話は覚えましょうEND", false],
    ["好みは把握</br>しましょうEND", false],
    ["視線を向けるときは注意深くEND", false],
    ["その子だけに夢中になることEND", false],
    ["自分が上だと</br>思わないことEND", false],
    ["女の子次第ですEND", false],
    ["他の人に良く</br>しないことEND", false],
    ["まずは寄り添い</br>ましょうEND", false],
    ["地雷はいつも</br>君のそばにEND", false],
    ["マザコン判定END", false],
    ["そりゃそうでしょEND", false],
    ["自分だけじゃないEND", false],
    ["ぼっちEND", false],
    ["誰とも仲良く</br>なれなかったEND", false],
    ["リリアンEND", false],
    ["アリーナEND", false],
    ["TRUE END", false],
    ["RAKUEN END", false],
    ["BL END", false]
];


function updateLillianDisplay() {
    document.getElementById('lillian-koukanndo').innerHTML = 'リリアン：' + lillian;
    document.getElementById('arena-koukanndo').innerHTML = 'アリーナ：' + arena;
    document.getElementById('leon-koukanndo').innerHTML = 'レオン　：' + leon;
}
setInterval(() => {
    updateLillianDisplay();
}, 0);

//--各値宣言
var lillian = 0;
var arena = 0;
var leon = 0;
var countDeath = 0;
var rakueninput = false;
var rakuen = false;
var choicefinish = false;
var syuturyoku = false;
var lognext = false;
var logfinish = false;
var cutin = false;
var choiceNum = 0;
var drunk = 3;
var lillianPromise = false;
var arenaPromise = false;
var refuse = 0;
var dateHeroineNum = 0;
let skip = false;
let skipEndless = false;
let button = document.getElementById('skipButton');
let check = document.getElementById("check");
var koukandoButton = document.getElementById("koukando-button");
let endListButton = document.getElementById('end-list-button');
var koukandoDisplay = true;
var logHajimete = true;
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

//--ログメソッド
async function log(array){
    let sleepTime = 50;
    logReset();
    triangle(1);

    logOpen();
    for(let i = 0; i < array.length; i++){
        lognext = true;
        log1(array[i][0], array[i][1]);
        while(lognext){
            await sleep(sleepTime);
        }
    }

    document.getElementById('chara-display').style.visibility = 'hidden';
    document.getElementById('chara-img').src = './img/alex.png';
    logClose();
    logfinish = true;
}
function logReset(){
    document.getElementById('log-name').innerHTML = '';
    document.getElementById('log').innerHTML = '';
}
function logOpen(){
    document.getElementById('log-display').style.visibility = 'visible';
}
async function log1(name, text){
    logfinish = false;
    syuturyoku = true;
    document.getElementById('log-area').onclick = logSkip;

    //名前を表示
    document.getElementById('log-name').innerHTML = name;
    document.getElementById('chara-display').style.visibility = 'visible';
    switch(name){
        case "主人公":
            document.getElementById('chara-img').src = './img/alex.png';
            break;
        case "リリアン":
            document.getElementById('chara-img').src = './img/lillian.png';
            break;
        case "アリーナ":
            document.getElementById('chara-img').src = './img/arena.png';
            break;
        case "レオン":
            document.getElementById('chara-img').src = './img/leon.png';
            break;
        default:
            break;
    }
    //ログを表示
    let logArray = text.split("");
    let logmsg = "";
    let sleepTime = 33;

    for(let i = 0; i < logArray.length; i++){
        if(!syuturyoku) break;
        if(skip){
            sleepTime = 0;
        }else{
            sleepTime = 33;
        }
        logmsg += logArray[i];
        document.getElementById('log').innerHTML = logmsg.replace('@','<br>');
        await sleep(sleepTime);
        if(!skip){
            if(!syuturyoku)break;
            await sleep(sleepTime);
            if(!syuturyoku)break;
            await sleep(sleepTime);
        }else{

        }
    }
    log2(name,text)
    syuturyoku = false;
    triangle(1);
}
function log2(name, text){
    document.getElementById('log-name').innerHTML = name;
    document.getElementById('log').innerHTML = text.replace('@','<br>');

    document.getElementById('log-area').onclick = logNext;
    if(skip)logNext();
}
function logSkip(){
    syuturyoku = false;
}
function logNext(){
    lognext = false;
    if(logHajimete){
        logHajimete = false;
        document.getElementById('info').innerHTML = "";
    }
}
function logClose(){
    document.getElementById('log-display').style.visibility = 'hidden';
}
function logNull(){
}
function logSkipToChoice(trigger){ //次の選択肢までスキップするボタン
    if (trigger == "OFF") {
        logSkipOff();
        check.checked = false;
    } else if (trigger == "ON") {
        logSkipOn();
    }
}
function logSkipOff(){
    skip = false;
    button.innerHTML = "次の選択肢までスキップ: OFF";
    button.style.backgroundColor = "#005B98";
}
function logSkipOn(){
    skip = true;
    button.innerHTML = "次の選択肢までスキップ: ON";
    button.style.backgroundColor = "#EF454A";
}
// 永続スキップチェックボックス
check.addEventListener("change", function(){
    if (check.checked) {
        skipEndless = true;
        logSkipOn();
    } else {
        if (skip == true) {
            logSkipOff();
        }
        skipEndless = false;
    }
});

// Skipボタンが押された場合に一度だけログをスキップする関数
function logSkipOnce(){
    if (skip) {
        logSkipToChoice("OFF");
    } else {
        logSkipToChoice("ON");
    }
}
function triangle(num) {
    if (num == 1) {
        document.getElementById("triangle").style.display = "block";
    } else {
        document.getElementById("triangle").style.display = "none";
    }
}

// Skipボタンのクリックイベントリスナーを追加
document.getElementById('skipButton').addEventListener('click', logSkipOnce);

// 好感度表示ボタン
koukandoButton.addEventListener('click', koukandoSwitch);
function koukandoSwitch() {
    if (koukandoDisplay) {
        //console.log(koukandoDisplay);
        document.getElementById("koukando-display").style.display = "block";
        koukandoButton.innerHTML = "好感度を非表示";
        koukandoDisplay = false;
    } else {
        //console.log(koukandoDisplay);
        document.getElementById("koukando-display").style.display = "none";
        koukandoButton.innerHTML = "好感度を表示";
        koukandoDisplay = true;
    }
}

//--カットインメソッド
async function cutIn(string){
    cutin = true;
    cutInOpen();
    document.getElementById('cutin-text').innerHTML = string.replace('@','<br>').replace('@','<br>');
    while(cutin){
        await sleep(50);
        if(skip)cutin = false;
    }
    cutInClose();
}
function cutInOpen(){
    document.getElementById('game-display').style.display = 'none';
    document.getElementById('cutin-display').style.display = 'flex';
}
function cutInFinish(){
    cutin = false;
}
function cutInClose(){
    document.getElementById('cutin-display').style.display = 'none';
    document.getElementById('game-display').style.display = 'flex';

}

//--選択肢メソッド
async function choice(array){
    choicefinish = true;

    triangle(0);
    if (!skipEndless) {
        logSkipToChoice("OFF");
    }

    let num = 0;
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');
    const choice3 = document.getElementById('choice3');
    choice1.style.display = 'block';
    choice2.style.display = 'block';
    choice3.style.display = 'block';

    logOpen();

    document.getElementById('log-name').innerHTML = array[0];

    if (array.length == 4) {
        choice1.innerHTML = array[1];
        choice2.innerHTML = array[2];
        choice3.innerHTML = array[3];
    } else if (array.length == 3) {
        choice1.innerHTML = array[1];
        choice2.innerHTML = array[2];
        choice3.style.display = 'none';
    } else if (array.length == 2) {
        choice1.innerHTML = array[1];
        choice2.style.display = 'none';
        choice3.style.display = 'none';
    }

    choiceOpen();

    while(choiceNum == 0){
        await sleep(100);
    }
    choiceClose();
    logClose();
    logReset();
    logfinish = true;
    num = choiceNum;
    choiceNum = 0;
    choicefinish = false;
    return num;
}
function choiceButtonClick(choice) {
    choiceNum = choice;
}
function choiceOpen() {
    document.getElementById('choice-display').style.display = 'flex';
}
function choiceClose() {
    document.getElementById('choice-display').style.display = 'none';
}

//--服選択肢メソッド
async function choiceFashion(array){
    choicefinish = true;
    let num = 0;
    logOpen();
    document.getElementById('log-name').innerHTML = array[0];
    choiceFashionOpen();

    while(choiceNum == 0){
        await sleep(100);
    }
    choiceFashionClose();
    logClose();
    logReset();
    logfinish = true;
    num = choiceNum;
    choiceNum = 0;
    choicefinish = false;
    return num;
}
function choiceFashionOpen() {
    document.getElementById('choice-img2').style.display = 'flex';
}
function choiceFashionClose() {
    document.getElementById('choice-img2').style.display = 'none';
}


//--デートイベントメソッド
async function lillianDate(){
    let end = false;
    dateHeroineNum = 1;
    backgroundChange("machi");
    await log(d2NoLi1);
    let num = await choice(d2Nochoice1); // 道に迷っている女の子
    switch(num){
        case 1:
            await log(d2NoLi1If1);
            await badEnd(5);
            badendRelease(5);
            end = true;
            break;
        case 2:
            await log(d2NoLi1If2);
            await log(d2NoLi2); // 服装か髪型を褒める
            num = await choice(d2Nochoice2);
            switch(num){
                case 1:
                    await log(d2NoLi2If1);
                    await badEnd(6);
                    badendRelease(6);
                    end = true;
                    break;
                case 2:
                    await log(d2NoLi2If2);
                    //backgroundChange("服屋");
                    await log(d2Noli3); // 右か左か
                    num = await choiceFashion(d2Nochoice3);
                    switch(num){
                        case 1:
                            await log(d2NoLi3If1);
                            await badEnd(7);
                            badendRelease(7);
                            end = true;
                            break;
                        case 2:
                            await log(d2NoLi3If2);
                            backgroundChange("cafe");
                            await log(d2NoLi4); // カフェで音がした
                            num = await choice(d2Nochoice4);
                            switch(num){
                                case 1:
                                    await log(d2NoLi4If1);
                                    backgroundChange("umi");
                                    
                                    let wakide = Math.floor(Math.random() * 5);
                                    if(wakide == 4){
                                        document.getElementById('choice-center').style.backgroundImage = 'url(img/wakide.png)';
                                        document.getElementById('choice-img1').style.display = 'flex';
                                        await log(d2Noli5wakide); // 犬が出てきた
                                    }else{
                                        document.getElementById('choice-center').style.backgroundImage = 'url(img/neko.png)';
                                        document.getElementById('choice-img1').style.display = 'flex';
                                        await log(d2Noli5); // 猫が出てきた
                                    }
                                    num = await choice(d2Nochoice5);
                                    document.getElementById('choice-img1').style.display = 'none';
                                    switch(num){
                                        case 1:
                                            await log(d2NoLi5If1);
                                            await badEnd(9);
                                            badendRelease(9);
                                            end = true;
                                            break;
                                        case 2:
                                            await log(d2NoLi5If2);
                                            break;
                                        case 3:
                                            await log(d2NoLi5If3);
                                            await badEnd(10);
                                            badendRelease(10);
                                            end = true;
                                            break;
                                    }
                                    break;
                                case 2:
                                    await log(d2NoLi4If2);
                                    await badEnd(8);
                                    badendRelease(8);
                                    end = true;
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
    }
    return end;
}
async function arenaDate(){
    let end = false;
    dateHeroineNum = 2;
    backgroundChange('machi');
    await log(d2No11log);
    let num = await choice(d2Nochoice6); // 性格か外見か
    switch(num){
        case 2:
            await log(d2No112log);
            await badEnd(11);
            badendRelease(11);
            end = true;
            break;
        case 1:
            await log(d2No111log);
            await log(d2No21log);
            num = await choice(d2Nochoice7); // 花を買うか買わないか
            switch(num){
                case 1:
                    await log(d2No212log);
                    await badEnd(12);
                    badendRelease(12);
                    end = true;
                    break;
                case 2:
                    await log(d2No211log);
                    backgroundChange("cafe");
                    await log(d2No31log);
                    num = await choice(d2Nochoice8); //共感するか原因を突きとめるか
                    switch(num){
                        case 2:
                            await log(d2No312log);
                            await badEnd(13);
                            badendRelease(13);
                            end = true;
                            break;
                        case 1:
                            await log(d2No311log);
                            backgroundChange("umi");
                            await log(d2No41log);
                            num = await choice(d2Nochoice9); // 海の知識か船の知識か
                            switch(num){
                                case 1:
                                    await log(d2No411log);
                                    backgroundChange("machi");
                                    await log(d2No51log);
                                    num = await choice(d2Nochoice10); // 母親か幼馴染か
                                    switch(num){
                                        case 1:
                                            await log(d2No512log);
                                            await badEnd(15);
                                            badendRelease(15);
                                            end = true;
                                            break;
                                        case 2:
                                            await log(d2No511log);
                                            break;
                                    }
                                    break;
                                case 2:
                                    await log(d2No412log);
                                    await badEnd(14);
                                    badendRelease(14);
                                    end = true;
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
    }
    return end;
}
async function refuseEvent(){
    switch(refuse){
        case 1:
            await log(refuseArenaLog);
            await badEnd(16);
            badendRelease(16);
            break;
        case 2:
            await log(refuseLilianLog);
            await badEnd(16);
            badendRelease(16);
            break;
    }
    return true;
}

document.getElementById('skipButton').addEventListener('click', () => {
    skipFlag = true;
});

//--ストーリーメソッド
function title(){
    logReset();
    logSkipToChoice("OFF");
    document.getElementById('info').innerHTML = "";
    document.getElementById('game-title').style.display = 'flex';
    koukandoDisplay = true;
    document.getElementById("koukando-display").style.display = "none";
    koukandoButton.innerHTML = "好感度を表示";
    endListButton.style.display = "block";
    backgroundChange('sougen');
}
async function opening(){
    logReset();
    await preloadImages();
    lillian = 1;
    arena = 1;
    leon = 0;
    rakuen = false;
    choicefinish = false;
    syuturyoku = false;
    lognext = false;
    logfinish = false;
    cutin = false;
    choiceNum = 0;
    drunk = 3;
    lillianPromise = false;
    arenaPromise = false;
    refuse = 0;
    day1NightPlaceLog = [
        "どこへ向かう？", "広間", "バルコニー前", "階段下"
    ];
    endListButton.style.display = "none";
    day1Morning();
}
async function day1Morning(){ //１日目 朝
    logReset();
    updateLillianDisplay();
    await preloadImages();
    backgroundChange("room");
    document.getElementById('game-title').style.display = 'none';
    await cutIn('１日目 ～朝～');
    if(logHajimete)document.getElementById('info').innerHTML = "画面下部のログをクリックで進む";
    //プロローグ
    await log(prologueLog);
    //１日目 昼へ
    day1Noon();
}
async function day1Noon(){ //１日目 昼
    logReset();
    await preloadImages();
    backgroundChange("road");
    await cutIn('１日目 ～夕方～');
    //一日目 昼
    await log(day1NoonLog);
    //レオンとすれ違う
    await log(day1NoonLeon1Log);
    //分岐
    switch(await choice(day1NoonLeonChoiceLog)){
        case 1:
            leon += 3;
            await log(day1NoonLeon21Log);
            //１日目 夜へ
            day1Night();
            break;
        case 2:
            await log(day1NoonLeon22Log);
            //１日目 夜へ
            day1Night();
            break;
        case 3:
            await log(day1NoonLeon23Log);
            //バッドエンド１へ
            badEnd(1);
            badendRelease(1);
            break;
    }
}
async function day1Night(){ //１日目 夜
    await preloadImages();
    backgroundChange("butou");
    await cutIn('１日目 ～夜～');
    await log(day1NightLog); // 舞踏会到着
    switch(await choice(day1NightWineChoiseLog)) {// ワイン飲むか飲まないか
        case 1: // 飲む場合
            await log(day1Night11Log);
            break;
        case 2: // 飲まない場合
            await log(day1Night12Log);
            break;
    }
    await log(day1Night2Log);   //ワインを飲む
    let end = false;
    let place = 0;
    let num = 0;
    let isLillian = false;
    let isArena = false;
    let choiceCount = 0;
    let isRakuen = false;
    let drunkGage = document.getElementById("drunk");
    let gage1 = document.getElementById("gage1");
    let gage2 = document.getElementById("gage2");
    let gage3 = document.getElementById("gage3");
    for (var i = 0; i < 3; i++) {         //行く場所を選ぶ
        drunkGage.style.display = "flex";
        if (i == 0) {
            gage2.style.visibility = 'visible';
            gage3.style.visibility = 'visible';
        }
        if (i == 1) {
            gage3.style.visibility = 'hidden';
        } else if (i == 2) {
            gage2.style.visibility = 'hidden';
        }
        backgroundChange("butou");
        place = await choice(day1NightPlaceLog);
        drunkGage.style.display = "none";
        if ((choiceCount == 0 && place == 1) ||
            (choiceCount == 1 && isLillian == false && place == 1) ||
            (choiceCount == 2 && isLillian == false && place == 1))
        {
            await log(day1Night31Log); // 広間に向かおう
            day1NightPlaceLog.splice(day1NightPlaceLog.indexOf("広間"), 1); // 配列から広間を消す
            backgroundChange("hiroma");
            await log(day1Night31ALog); //リリアンに会う
            num = await choice(d1NiLiChoice1Log); // 名前を偽る？
            if (num == 1) { //正規ルート
                await log(day1Night31BLog);
                num = await choice(d1NiLiChoice2Log); // 踊る？
                if (num == 1) { // 踊る
                    if (drunk == 3) {
                        await log(day1Night31C1Log); // 酔いHIGH
                        lillian ++;
                    }else if (drunk == 2) { // 酔いMID
                        await log(day1Night31C2Log);
                        lillian += 5;
                    }else if (drunk == 1) { // 酔いLOW
                        await log(day1Night31C3Log);
                        lillian += 3;
                    }
                } else if (num == 2) { // 踊らない
                    await log(day1Night31DLog);
                    lillian++; // リリアンの好感度+1
                }
                drunk--; // 酔いを1段階下げる
                await log(day1Night31ELog); // リリアンの打ち明け・デートの誘い
                num = await choice(d1NiLiChoice3Log);
                if (num == 1) { // デート快諾
                    await log(day1Night31E1Log);
                    lillianPromise = true;
                }else if (num == 2) { // デート拒否
                    lillian += 4;
                    await log(day1Night31E2Log);
                }
                await log(day1Night31E3Log); // そう言うとリリアンは去っていった
            } else if (num == 2) { // バッドエンド
                await badEnd(2);
                badendRelease(2);
                end = true;
                break;
            }
            isLillian = true;
            place = 0;
            choiceCount++;
        } else if ((choiceCount == 0 && place == 2) ||
                    (choiceCount == 1 && isArena == false && isLillian == true && place == 1) ||
                    (choiceCount == 1 && isArena == false && isLillian == false && place == 2) ||
                    (choiceCount == 2 && isArena == false && place == 1)
                ) {
            await log(day1Night32Log); // バルコニー前に向かおう
            day1NightPlaceLog.splice(day1NightPlaceLog.indexOf("バルコニー前"), 1); // 配列からバルコニー前を消す
            backgroundChange("baru");
            await log(day1Night32ALog); //アリーナに会う
            num = await choice(d1NiArChoice1Log); // 名前を偽る？
            if (num == 1) { //正規ルート
                await log(day1Night32BLog);
                num = await choice(d1NiArChoice2Log); // 踊る？
                if (num == 1) { // 踊る
                    await log(day1Night32DLog);
                } else if (num == 2) { // 踊らない
                    if (drunk == 3) {
                        await log(day1Night32C1Log); // 酔いHIGH
                        arena ++;
                    }else if (drunk == 2) { // 酔いMID
                        await log(day1Night32C2Log);
                        arena += 3;
                    }else if (drunk == 1) { // 酔いLOW
                        await log(day1Night32C3Log);
                        arena += 5;
                    }
                }
                drunk--; // 酔いを1段階下げる;
                await log(day1Night32ELog); // アリーナの打ち明け・デートの誘い
                num = await choice(d1NiArChoice3Log);
                if (num == 1) { // デート快諾
                    await log(day1Night32E1Log);
                    arenaPromise = true;
                }else if (num == 2) { // デート拒否
                    arena += 4;
                    await log(day1Night32E2Log);
                }
                await log(day1Night32E3Log); // そう言うとアリーナは去っていった
            } else if (num == 2) { // バッドエンド
                await badEnd(3);
                badendRelease(3);
                end = true;
                break;
            }
            isArena = true;
            place = 0;
            choiceCount++;
        } else if ( (choiceCount == 0 && place == 3) ||
                    (choiceCount == 1 && isLillian == true && isArena == false && place == 2) ||
                    (choiceCount == 1 && isLillian == false && isArena == true && place == 2) ||
                    (choiceCount == 2 && place == 1)
                ) {
            await log(day1Night33Log); // 階段下に向かおう
            day1NightPlaceLog.splice(day1NightPlaceLog.indexOf("階段下"), 1); // 配列から階段下を消す
            backgroundChange("kaidan");
            await log(day1Night33ALog); //レオンに会う
            num = await choice(d1NiLeChoice1Log); // 楽しんでる？
            if (num == 1) { //正規ルート
                await log(day1Night33BLog);
                num = await choice(d1NiLeChoice2Log); // ギャンブルする？
                if (num == 1) {
                    if (drunk == 3) { // ギャンブルする
                        await log(day1Night33C1Log); // 酔いHIGH
                        leon += 3;  // そう言うとレオンは去っていった
                        await log(day1Night33RLog);
                        isRakuen = true;
                    }else if (drunk == 2) { // 酔いMID
                        await log(day1Night33C2Log);
                        leon += 1;
                    }else if (drunk == 1) { // 酔いLOW
                        await log(day1Night33C3Log);
                        leon += 0;
                    }
                } else if (num == 2) { // ギャンブルしない
                    await log(day1Night33DLog);
                }
                drunk--; // 酔いを1段階下げる
            } else if (num == 2) { // バッドエンド
                await badEnd(4);
                badendRelease(4);
                end = true;
                break;
            }
            isLeon = true;
            place = 0;
            choiceCount++;
        }
    }
    if (!end && isRakuen) {
        backgroundChange('baru');
        await log(day1Night33R2Log);
        num = await choice(d1NiLeChoice3Log);
        if (num == 1) {
            await log(day1Night33RRLog);
            rakuen = true;
        } else if (num == 2) {
            await log(day1Night33RNLog);
        }
    }
    if(!end){
        backgroundChange("baru");
        await log(day1NightEnd);
        //２日目 朝へ
        day2Morning();
    }
}
async function day2Morning(){ //２日目 朝
    logReset();
    await preloadImages();
    backgroundChange('room');
    let end = false;
    await cutIn('２日目 ～朝～');
    if(lillianPromise && arenaPromise){
        await log(d2Mo1If21);
        let hi = await choice(d2MoChoice1Log);
        await log(d2Mo1If22);
        await cutIn('２日目 ～昼～');
        switch(hi){
            case 1:
                end = await lillianDate();
                refuse = 2;
                break;
            case 2:
                end = await arenaDate();
                refuse = 1;
                break;
        }
        if(!end){
            await cutIn("～帰り道～");
            logReset();
            hi = await choice(["分かれ道。どっちを選ぶ？", "左", "右"]);
            end = await refuseEvent();
        }
    }else if(lillianPromise){
        await log(d2Mo1If1);
        await cutIn('２日目 ～昼～');
        //リリアンデート
        end = await lillianDate();
    }else if(arenaPromise){
        await log(d2Mo1If1);
        await cutIn('２日目 ～昼～');
        //アリーナデート
        end = await arenaDate();
    }else{
        // 2人とも断った場合
        await log(d2Mo1If0);
        await badEnd(18);
        badendRelease(18);
        end = true;
    }
    //２日目 夜へ
    if(!end){
        day2Night();
    }
}
async function day2Night(){ //２日目 夜
    let end = false;
    await cutIn('２日目 ～夜～');
    backgroundChange("baru");
    if (lillianPromise && !arenaPromise) {
        await log(d2Ni11log);
        await log(d2Ni12log);
        switch(await choice(d2Nichoice1)) {
            case 1:
                lillian += 7;
                await log(d2Ni111log);
                break;
            case 2:
                lillian -= 3;
                await log(d2Ni112log);
                break;
            case 3:
                lillian += 3;
                await log(d2Ni113log);
                break;
        }
    } else if (!lillianPromise && arenaPromise) {
        await log(d2Ni21log);
        await log(d2Ni22log);
        switch(await choice(d2Nichoice2)) {
            case 1:
                arena -= 3;
                await log(d2Ni211log);
                break;
            case 2:
                arena += 7;
                await log(d2Ni212log);
                break;
            case 3:
                arena += 3;
                await log(d2Ni213log);
                break;
        }
    }
    
    if (rakuen) {
        await log(d2Ni31log);
        await log(d2Ni33log);
        switch(await choice(d2Nichoice3)) {
            case 1:
                leon += 2;
                await log(d2Ni32Alog);
                await log(d2Ni311log);
                await log(d2Ni312log);
                break;
            case 2:
                leon -= 5;
                await log(d2Ni32Blog);
                break;
            case 3:
                leon += 5;
                await log(d2Ni32C2log);
                break;
        }
    } else {
        await log(d2Ni31log);
        await log(d2Ni32log);
        switch(await choice(d2Nichoice3)) {
            case 1:
                leon += 5;
                await log(d2Ni32Alog);
                await log(d2Ni311log);
                await log(d2Ni312log);
                break;
            case 2:
                leon -= 5;
                await log(d2Ni32Blog);
                break;
            case 3:
                await log(d2Ni32Clog);
                await badEnd(17);
                badendRelease(17);
                end = true;
                break;
        }
    }

    //３日目 朝へ
    if (!end) {
        day3Morning();
    }
} 
async function day3Morning(){ //３日目 朝
    logReset();
    await cutIn('３日目 ～朝～');
    //エンディングへ
    if(rakuen){
        anotherEndFilter();
    }else{
        endFilter();
    }
}

//--エンド分岐フィルター
async function anotherEndFilter(){ //２回目以降の隠し要素。好感度が２人とも10なら...。それ以外⇒endFilter()
    if (rakuen) {
        if (lillian >= 10 && arena >= 10){
            if (leon >= 10) {
                switch(await choice(["合言葉はありますか？","はい","いいえ"])){
                case 1:
                    let aikotoba = await rakuenInput();
                    if(aikotoba){
                        rakuenEnd();
                    }else{
                        await log([["","君には資格が無かったようだ"]]);
                        await cutIn('～その後～');
                        endFilter();
                    }
                    break;
                case 2:
                    await cutIn('～その後～');
                    endFilter();
                    break;
                    }
            } else {
                await cutIn('～その後～');
                endFilter();
            }
        } else {
            await cutIn('～その後～');
            endFilter();
        }
    } else {
        await cutIn('～その後～');
        endFilter();
    }
    
}
function endFilter(){ //どっちの方が好感度高いか⇒heroinFilter()
    switch(dateHeroineNum) {
        case 0:
            badEnd(18);
            badendRelease(18);
            break;
        case 1:
            if (lillian >= 8 && arena >= 8) {
                trueEnd();
            } else if (lillian >= 8) {
                happyEnd(1);
            } else {
                leonFilter(leon);
            }
            break;
        case 2:
            if (lillian >= 8 && arena >= 8) {
                trueEnd();
            } else if (arena >= 8) {
                happyEnd(2);
            } else {
                leonFilter(leon);
            }
            break;
    }
}
function leonFilter(leon){  //友情8以上ならBLエンド、8未満ならバッドエンド
    if(leon >= 8){
        leonBlEnd();
    }else{
        badEnd(19);
        badendRelease(19);
    }
}

//--合言葉メソッド
async function rakuenInput(){
    rakueninput = true;
    let result = false;
    document.getElementById('rakuen-input-display').style.display = 'flex';
    while(rakueninput){
        await sleep(50);
    }
    let aikotoba = document.getElementById('rakuen-input').value;
    if(aikotoba == "らくえん"){
        result = true;
    }
    document.getElementById('rakuen-input-display').style.display = 'none';
    document.getElementById('rakuen-input').value = "";
    return result;
} 
function rakuenSoushin(){
    rakueninput = false;
}

//--バッドエンドSEメソッド
function badEndSe(){
    document.getElementById('badend-se').play();
}

//--各エンディング
async function happyEnd(num){  //引数の番号のヒロインのヒモになる
    switch(num){
        case 1:
            await preloadImages();
            backgroundChange('sougen');
            await log(happyEndLilianLog);
            badendRelease(20);
            break;
        case 2:
            await preloadImages();
            backgroundChange('sougen');
            await log(happyEndArenaLog);
            badendRelease(21);
            break;
    }
    await cutIn("HAPPY END");
    title();
}
async function leonBlEnd(){  //レオンとBL
    await preloadImages();
    backgroundChange('mura');
    await log(homoEndLog);
    await cutIn("BL END");
    badendRelease(24);
    title();
}
async function badEnd(num){  //各バッドエンド    
    await preloadImages();
    countDeath++;
    switch(num){
        case 1:
            await log(badEnd1);
            badEndSe();
            await cutIn('GAME OVER@BAD END１@「失礼END（レオン）」</br>死んだ回数：' + countDeath);
            break;
        case 2:
            await log(badEnd2Log);
            badEndSe();
            await cutIn('GAME OVER@BAD END２@「無礼END（リリアン）」</br>死んだ回数：' + countDeath);
            break;
        case 3:
            await log(badEnd3Log);
            badEndSe();
            await cutIn('GAME OVER@BAD END３@「無礼END（アリーナ）」</br>死んだ回数：' + countDeath);
            break;
        case 4:
            await log(badEnd4Log);
            badEndSe();
            await cutIn('GAME OVER@BAD END４@「無礼END（レオン）」</br>死んだ回数：' + countDeath);
            break;
        case 5:
            badEndSe();
            await cutIn('GAME OVER@BAD END５@「女の子を優先しましょうEND」</br>死んだ回数：' + countDeath);
            break;
        case 6:
            badEndSe();
            await cutIn('GAME OVER@BAD END６@「話は覚えましょうEND」</br>死んだ回数：' + countDeath);
            break;
        case 7:
            badEndSe();
            await cutIn('GAME OVER@BAD END７@「好みは把握しましょうEND」</br>死んだ回数：' + countDeath);
            break;
        case 8:
            badEndSe();
            await cutIn('GAME OVER@BAD END８@「視線を向けるときは注意深くEND」</br>死んだ回数：' + countDeath);
            break;
        case 9:
            badEndSe();
            await cutIn('GAME OVER@BAD END９@「その子だけに夢中になることEND」</br>死んだ回数：' + countDeath);
            break;
        case 10:
            badEndSe();
            await cutIn('GAME OVER@BAD END１０@「自分が上だと思わないことEND」</br>死んだ回数：' + countDeath);
            break;
        case 11:
            badEndSe();
            await cutIn('GAME OVER@BAD END１１@「女の子次第ですEND」</br>死んだ回数：' + countDeath);
            break;
        case 12:
            badEndSe();
            await cutIn('GAME OVER@BAD END１２@「他の人に良くしないことEND」</br>死んだ回数：' + countDeath);
            break;
        case 13:
            badEndSe();
            await cutIn('GAME OVER@BAD END１３@「まずは寄り添いましょうEND」</br>死んだ回数：' + countDeath);
            break;
        case 14:
            badEndSe();
            await cutIn('GAME OVER@BAD END１４@「地雷はいつも君のそばにEND」</br>死んだ回数：' + countDeath);
            break;
        case 15:
            badEndSe();
            await cutIn('GAME OVER@BAD END１５@「マザコン判定END」</br>死んだ回数：' + countDeath);
            break;
        case 16:
            badEndSe();
            await cutIn('GAME OVER@BAD END１６@「そりゃそうでしょEND」</br>死んだ回数：' + countDeath);
            break;
        case 17:
            badEndSe();
            await cutIn('GAME OVER@BAD END１７@「自分だけじゃないEND」</br>死んだ回数：' + countDeath);
            break;
        case 18:
            backgroundChange('machi');
            await log(bochiEndLog);
            await cutIn('GAME OVER@BAD END１８@「ぼっちEND」</br>死んだ回数：' + countDeath);
            break;
        case 19:
            badEndSe();
            await cutIn('GAME OVER@BAD END１９@「誰とも仲良くなれなかったEND」</br>死んだ回数：' + countDeath);
            break;
    }
    title();
}
async function rakuenEnd(){  //レオンと２人でヒロイン２人のヒモになる
    await preloadImages();
    backgroundChange('sougen');
    await log(rakuenEndLog);
    await cutIn("RAKUEN END");
    badendRelease(23);
    title();
}
async function trueEnd(){ //ヒロイン２人のヒモになる
    await preloadImages();
    backgroundChange('sougen');
    await log(trueEndLog);
    await cutIn("TRUE END");
    badendRelease(22);
    title();
}

// 画像をプリロードする関数
function preloadImages() {
    let images = [
        'img/alex.png',
        'img/arena.png',
        'img/baru.png',
        'img/butou.png',
        'img/cafe.png',
        'img/fukuya.png',
        'img/hiroma.png',
        'img/kaidan.png',
        'img/left.png',
        'img/leon.png',
        'img/lillian.png',
        'img/machi.png',
        'img/neko.png',
        'img/right.png',
        'img/road.png',
        'img/room.png',
        'img/sougen.png',
        'img/title.png',
        'img/umi.png',
        'img/wakide.png',
        'img/yomichi.png',
        'img/mura.png'
    ];
    return new Promise((resolve, reject) => {
        let loadedCount = 0;
        images.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    resolve();
                }
            };
            img.onerror = reject;
        });
    });
}
function backgroundChange(imageName){
    document.getElementById('game-display').style.backgroundImage = "url(img/" + imageName + ".png)";
}

// function testButton() {
//     day1Night(0, 0, 0, false);
// }
let endlist = false;
endListButton.addEventListener('click', function() {
    if (!endlist) {
        endListButton.style.backgroundColor = "black";
        endListButton.style.color = "white";
        endListButton.style.border = "3px solid #FFF";
        endListButton.innerHTML = "戻る";
        document.getElementById('end-content').style.display = "flex";
        endlist = true;
        console.log(endlist);
    } else {
        endListButton.style.backgroundColor = "white";
        endListButton.style.color = "black";
        endListButton.style.border = "3px solid #000";
        endListButton.innerHTML = "エンド一覧";
        document.getElementById('end-content').style.display = "none";
        endlist = false;
        console.log(endlist);
    }
});

// BADエンド一覧更新
function badendRelease(num) {
    endListArray[num - 1][1] = true;
    document.getElementById(`end-item${num}`).innerHTML = endListArray[num - 1][0];
}