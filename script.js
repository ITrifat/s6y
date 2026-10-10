const nav=document.querySelector('.nav');
const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();

const modal=document.getElementById('projectModal');
const modalTitle=document.getElementById('modalTitle');
const modalDesc=document.getElementById('modalDesc');
document.querySelectorAll('.details').forEach(btn=>btn.addEventListener('click',()=>{modalTitle.textContent=btn.dataset.title;modalDesc.textContent=btn.dataset.desc;modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelector('.modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
