
(async ()=>{
  const data = await loadJSON('assets/data/blog.json');
  const container = document.getElementById('blog-list');
  data.forEach(b=>{
    const card=document.createElement('div'); card.className='card';
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><strong>${b.title}</strong><div style="color:var(--text);opacity:.8">${b.date}</div><p>${b.description||''}</p></div><div><a class="btn" href="blog-post.html?file=${b.file}">Read</a></div></div>`;
    container.appendChild(card);
  });
})();
