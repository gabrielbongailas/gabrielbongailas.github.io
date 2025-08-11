
(async ()=>{
  const data = await loadJSON('assets/data/projects.json');
  const container = document.getElementById('projects-list');
  const categoryFilter = document.getElementById('project-category');
  let currentCategory = 'All';

  function renderProjects(){
    container.innerHTML = '';
    data.filter(p => currentCategory === 'All' || p.category === currentCategory)
        .forEach((p)=>{
          const card=document.createElement('div'); card.className='card';
          card.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div><strong>${p.title}</strong>
                <div style="color:var(--text);opacity:.9">${p.timePeriod}</div>
                <div style="font-size:0.85rem;opacity:0.8">${p.category}</div>
              </div>
              <div><a class="btn" href="project-post.html?file=${p.file}">View</a></div>
            </div>
            <div style="margin-top:.75rem"><p>${p.description || ''}</p></div>`;
          container.appendChild(card);
        });
  }

  const categories = ['All', ...new Set(data.map(p => p.category))];
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat; opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });

  categoryFilter.addEventListener('change', (e)=>{
    currentCategory = e.target.value;
    renderProjects();
  });

  renderProjects();
})();
