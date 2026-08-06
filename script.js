const cfg=window.JISSO_CONFIG||{};
const linkList=document.querySelector('.link-list');
if(linkList){
  const works=document.createElement('a');
  works.className='link-card featured';
  works.href='works/';
  works.innerHTML='<span class="index">WORKS</span><span class="title">JISSO.WORKS<small>完成した制作物を見る</small></span><span class="arrow">→</span>';
  linkList.prepend(works);
}
document.querySelectorAll("[data-link]").forEach(el=>{
  const key=el.dataset.link,url=cfg[key];
  if(url){el.href=url;el.target="_blank";el.rel="noopener noreferrer";}
  else{el.classList.add("disabled");el.removeAttribute("href");const arrow=el.querySelector(".arrow");if(arrow)arrow.textContent="URL設定待ち";}
});
