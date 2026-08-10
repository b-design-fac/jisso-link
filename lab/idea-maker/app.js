const themes=[
  {category:'WEB TOOL',idea:'文章を3行に要約するツール',audience:'長文を読む時間がない人',condition:'文章を入力すると要約が表示される',minutes:30},
  {category:'CREATOR TOOL',idea:'SNS投稿タイトルメーカー',audience:'投稿タイトルに迷うクリエイター',condition:'テーマからタイトルを10個生成できる',minutes:30},
  {category:'BUSINESS TOOL',idea:'問い合わせ返信テンプレートメーカー',audience:'返信文を毎回考えている事業者',condition:'状況を選ぶと返信文が完成する',minutes:45},
  {category:'LIFE TOOL',idea:'今日やらないことを決めるリスト',audience:'予定を詰め込みすぎる人',condition:'3つ選んで画像保存できる',minutes:30},
  {category:'CREATOR TOOL',idea:'プロフィール文章メーカー',audience:'自己紹介がまとまらない人',condition:'質問に答えると紹介文が完成する',minutes:45},
  {category:'WEB TOOL',idea:'1ページ企画書メーカー',audience:'アイデアを説明したい人',condition:'入力内容を1枚の画像にできる',minutes:45},
  {category:'BUSINESS TOOL',idea:'打ち合わせ準備チェックリスト',audience:'商談前に準備漏れがある人',condition:'確認項目を保存・チェックできる',minutes:30},
  {category:'CREATOR TOOL',idea:'制作時間を記録するタイマー',audience:'制作時間を把握したい人',condition:'時間と完成内容を記録できる',minutes:30},
  {category:'LIFE TOOL',idea:'迷ったときの2択決定ツール',audience:'小さな選択に時間を使う人',condition:'2案を入力すると1つに決まる',minutes:15},
  {category:'WEB TOOL',idea:'URL付きプロフィールカードメーカー',audience:'SNSのリンクをまとめたい人',condition:'プロフィールカードを画像保存できる',minutes:45},
  {category:'CREATOR TOOL',idea:'動画構成3ステップメーカー',audience:'短い動画の構成に迷う人',condition:'テーマから導入・本編・結論が完成する',minutes:30},
  {category:'BUSINESS TOOL',idea:'サービス説明ひとことメーカー',audience:'サービスを短く説明できない人',condition:'特徴から30文字の説明ができる',minutes:30}
];

const $=id=>document.getElementById(id);let current=null,last=-1;
function show(item){current=item;$('empty').hidden=true;$('theme').hidden=false;$('actions').hidden=false;$('category').textContent=item.category;$('idea').textContent=item.idea;$('audience').textContent=item.audience;$('condition').textContent=item.condition;$('minutes').textContent=item.minutes;$('state').textContent='GENERATED';const query=new URLSearchParams({idea:item.idea,done:item.condition,minutes:String(item.minutes)});$('build').href=`../../free/bakusoku-sheet/index.html?${query}`;localStorage.setItem('jisso-idea-maker',JSON.stringify(item))}
function generate(){const box=$('machine');box.classList.add('is-generating');$('state').textContent='GENERATING';$('generate').disabled=true;setTimeout(()=>{let index;do{index=Math.floor(Math.random()*themes.length)}while(index===last&&themes.length>1);last=index;show(themes[index]);box.classList.remove('is-generating');$('generate').disabled=false},650)}
function toast(text){const el=$('toast');el.textContent=text;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),1800)}
function copyTheme(){if(!current)return;const text=`【今日の実装テーマ】\n${current.idea}\n\n誰のため：${current.audience}\n完成条件：${current.condition}\n制限時間：${current.minutes}分\n\n思いつきを、今日カタチに。`;navigator.clipboard.writeText(text).then(()=>toast('テーマをコピーしました'))}
$('generate').onclick=generate;$('again').onclick=generate;$('copy').onclick=copyTheme;
const saved=JSON.parse(localStorage.getItem('jisso-idea-maker')||'null');if(saved)show(saved);
