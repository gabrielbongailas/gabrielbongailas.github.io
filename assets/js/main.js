
document.addEventListener('click', e=>{
  if(e.target.id==='menu-toggle'){
    document.querySelector('.nav-links').classList.toggle('show');
  }
});

document.addEventListener('click', e=>{
  if(e.target.id==='theme-toggle'){
    let t=document.documentElement.getAttribute('data-theme');
    let nt=t==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',nt);
    localStorage.setItem('theme',nt);
  }
});

const stored=localStorage.getItem('theme');
const prefers=window.matchMedia('(prefers-color-scheme:dark)').matches;
if(stored){
  document.documentElement.setAttribute('data-theme',stored);
} else {
  document.documentElement.setAttribute('data-theme', prefers?'dark':'light');
}

async function loadJSON(path){ const r=await fetch(path); return await r.json(); }
