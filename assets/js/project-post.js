
// load project file specified in ?file=
(async ()=>{
  const params = new URLSearchParams(window.location.search);
  const file = params.get('file');
  if(!file){ document.getElementById('project-content').innerHTML='<p>No project specified.</p>'; return; }
  try{
    const res = await fetch('assets/projects/'+file);
    const html = await res.text();
    document.getElementById('project-content').innerHTML = html;
  }catch(e){
    document.getElementById('project-content').innerHTML = '<p>Failed to load project.</p>';
  }
})();
