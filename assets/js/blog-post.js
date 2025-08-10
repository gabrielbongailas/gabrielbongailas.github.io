
// load blog file specified in ?file=
(async ()=>{
  const params = new URLSearchParams(window.location.search);
  const file = params.get('file');
  if(!file){ document.getElementById('post').innerHTML='<p>No post specified.</p>'; return; }
  try{
    const res = await fetch('assets/blogs/'+file);
    const html = await res.text();
    document.getElementById('post').innerHTML = html;
  }catch(e){
    document.getElementById('post').innerHTML = '<p>Failed to load post.</p>';
  }
})();
