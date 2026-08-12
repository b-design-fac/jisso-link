const cfg=window.JISSO_CONFIG||{};
const linkList=document.querySelector('.link-list');
if(linkList){
  const works=document.createElement('a');
  works.className='link-card featured';
  works.href='works/';
  works.innerHTML='<span class="index">WORKS</span><span class="title">JISSO.WORKS<small>完成した制作物を見る</small></span><span class="arrow">→</span>';
  linkList.prepend(works);
  const lab=document.createElement('a');
  lab.className='link-card featured';
  lab.href='lab/idea-maker/';
  lab.innerHTML='<span class="index">LAB 001</span><span class="title">今日の実装テーマメーカー<small>30分で作るテーマを決める</small></span><span class="arrow">→</span>';
  works.after(lab);
  const live=document.createElement('a');
  live.className='link-card featured';
  live.href='live/board/';
  live.innerHTML='<span class="index">LIVE 001</span><span class="title">JISSO.LIVE BOARD<small>制作時間と工程をリアルタイム表示</small></span><span class="arrow">→</span>';
  lab.after(live);
}
document.querySelectorAll("[data-link]").forEach(el=>{
  const key=el.dataset.link,url=cfg[key];
  if(url){el.href=url;el.target="_blank";el.rel="noopener noreferrer";}
  else{el.classList.add("disabled");el.removeAttribute("href");const arrow=el.querySelector(".arrow");if(arrow)arrow.textContent="URL設定待ち";}
});
