
(async ()=>{
  const data = await loadJSON('assets/data/gallery.json');
  const container = document.getElementById('gallery-albums');
  data.forEach((a)=>{
    const card=document.createElement('div'); card.className='card';
    const previewImg = a.images && a.images[0] ? a.images[0].file : 'assets/img/placeholder1.svg';
    card.innerHTML = `
      <div style="display:flex;gap:1rem;align-items:center">
        <img src="${previewImg}" style="width:140px;height:90px;object-fit:cover;border-radius:8px">
        <div>
          <strong>${a.title}</strong>
          <div style="color:var(--text);opacity:.9">${a.relatedProjectId?'<a href=\'projects.html#'+a.relatedProjectId+'\'>Related project</a>':''}</div>
        </div>
      </div>`;
    card.addEventListener('click', ()=> openLightbox(a.images || [{file:previewImg, caption:''}], 0));
    container.appendChild(card);
  });
})();
