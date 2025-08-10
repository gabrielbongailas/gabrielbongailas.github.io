
(async ()=>{
  const data = await loadJSON('assets/data/projects.json');
  const container = document.getElementById('projects-list');
  data.forEach((p)=>{
    const card=document.createElement('div'); card.className='card';
    card.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><strong>${p.title}</strong><div style="color:var(--text);opacity:.9">${p.timePeriod}</div></div>
        <div><a class="btn" href="project-post.html?file=${p.file}">View</a></div>
      </div>
      <div style="margin-top:.75rem"><p>${p.description || ''}</p></div>`;
    container.appendChild(card);
  });
})();
