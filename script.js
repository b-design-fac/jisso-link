const cfg=window.JISSO_CONFIG||{};
document.querySelectorAll("[data-link]").forEach(el=>{
  const key=el.dataset.link,url=cfg[key];
  if(url){el.href=url;el.target="_blank";el.rel="noopener noreferrer";}
  else{el.classList.add("disabled");el.removeAttribute("href");const arrow=el.querySelector(".arrow");if(arrow)arrow.textContent="URL設定待ち";}
});
