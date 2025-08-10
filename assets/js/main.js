
// menu toggle
document.addEventListener('click', e=>{
  if(e.target.id==='menu-toggle') document.querySelector('.nav-links').classList.toggle('show');
});
// theme
const themeToggle=document.getElementById('theme-toggle');
const stored=localStorage.getItem('theme');
const prefers=window.matchMedia('(prefers-color-scheme:dark)').matches;
if(stored) document.documentElement.setAttribute('data-theme',stored); else document.documentElement.setAttribute('data-theme', prefers?'dark':'light');
if(themeToggle) themeToggle.addEventListener('click',()=>{let t=document.documentElement.getAttribute('data-theme');let nt=t==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',nt);localStorage.setItem('theme',nt);});

// helper to load JSON
async function loadJSON(path){ const r=await fetch(path); return await r.json(); }

// simple lightbox
function openLightbox(images, start=0){
  const overlay=document.createElement('div'); overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px';
  let idx=start;
  const img=document.createElement('img'); img.src=images[idx].file; img.style.maxWidth='90%'; img.style.maxHeight='90%';
  const caption=document.createElement('div'); caption.style.cssText='color:#fff;margin-top:10px;text-align:center;max-width:90%'; caption.innerText=images[idx].caption||'';
  const next=() => { idx=(idx+1)%images.length; img.src=images[idx].file; caption.innerText=images[idx].caption||''; };
  const prev=() => { idx=(idx-1+images.length)%images.length; img.src=images[idx].file; caption.innerText=images[idx].caption||''; };
  const btnNext=document.createElement('button'); btnNext.textContent='▶'; btnNext.style.cssText='position:absolute;right:20px;top:50%;transform:translateY(-50%);font-size:28px;background:none;border:none;color:#fff;cursor:pointer';
  const btnPrev=document.createElement('button'); btnPrev.textContent='◀'; btnPrev.style.cssText='position:absolute;left:20px;top:50%;transform:translateY(-50%);font-size:28px;background:none;border:none;color:#fff;cursor:pointer';
  overlay.appendChild(btnPrev); overlay.appendChild(img); overlay.appendChild(btnNext);
  const wrapper=document.createElement('div'); wrapper.style.textAlign='center'; wrapper.appendChild(caption); overlay.appendChild(wrapper);
  btnNext.onclick=next; btnPrev.onclick=prev;
  overlay.onclick=(e)=>{ if(e.target===overlay) document.body.removeChild(overlay); };
  document.body.appendChild(overlay);
}
