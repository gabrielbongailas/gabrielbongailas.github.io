
(async ()=>{
  const data = await loadJSON('assets/data/experience.json');
  const container = document.getElementById('experience-list');
  data.forEach((e, i)=>{
    const card=document.createElement('div'); card.className='card';
    card.innerHTML = `
      <div class="flex">
        <img src="${e.companyLogo}" class="logo-img" alt="${e.companyName} logo">
        <div>
          <div style="display:flex;gap:.5rem;align-items:center"><strong>${e.jobTitle}</strong><span class="badge">${e.timePeriod}</span></div>
          <div style="color:var(--text);opacity:.9">${e.companyName}</div>
        </div>
      </div>
      <div style="margin-top:.75rem"><ul>${e.description.map(d=>'<li>'+d+'</li>').join('')}</ul></div>`;
    // gallery preview
    if(e.gallery && e.gallery.length){
      const imgs = e.gallery.map(f=>({file:f, caption:''}));
      const preview = document.createElement('div');
      preview.style.marginTop='.75rem';
      preview.innerHTML = '<div class="grid">'+ e.gallery.map((g,idx)=>`<div style="cursor:pointer" data-idx="${idx}" data-eidx="${i}"><img src="${g}" class="responsive"></div>`).join('') +'</div>';
      preview.querySelectorAll('div[data-idx]').forEach(el=> el.addEventListener('click', ()=> openLightbox(imgs, Number(el.dataset.idx))));
      card.appendChild(preview);
    }
    container.appendChild(card);
  });
})();
