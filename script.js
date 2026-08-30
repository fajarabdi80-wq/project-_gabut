// ---------- Kelopak jatuh ambient ----------
const petalEmojis = ['🧸'];
const petalContainer = document.getElementById('petals');
function spawnPetal(){
  const p = document.createElement('span');
  p.className = 'petal';
  p.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
  p.style.left = Math.random() * 100 + 'vw';
  const duration = 8 + Math.random() * 8;
  p.style.animationDuration = duration + 's, ' + (2 + Math.random()*2) + 's';
  p.style.fontSize = (16 + Math.random() * 14) + 'px';
  petalContainer.appendChild(p);
  setTimeout(() => p.remove(), duration * 1000);
}
setInterval(spawnPetal, 1100);
for(let i=0;i<5;i++) setTimeout(spawnPetal, i*400);

// ---------- Amplop ----------
const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelope-screen');
const enterBtn = document.getElementById('enterBtn');
const envelopeHint = document.getElementById('envelopeHint');

envelope.addEventListener('click', () => {
  if(envelope.classList.contains('open')) return;
  envelope.classList.add('open');
  envelopeHint.style.opacity = '0';
  setTimeout(() => enterBtn.classList.add('show'), 500);
});

enterBtn.addEventListener('click', () => {
  envelopeScreen.classList.add('hidden');
  document.body.style.overflow = 'auto';
  setTimeout(revealOnScroll, 300);
});

document.body.style.overflow = 'hidden'; // kunci scroll sampai amplop dibuka

// ---------- Reveal saat scroll ----------
function revealOnScroll(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('reveal');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.letter-wrap, .quality-card').forEach(el => observer.observe(el));
}

// ---------- Tombol bunga penutup ----------
const heartBtn = document.getElementById('heartBtn');
const finalNote = document.getElementById('finalNote');
const notes = [
  'makasih ya udah baca sampai sini 🌸',
  'nih lotso buat lu🧸'
];
let clicked = 0;
heartBtn.addEventListener('click', () => {
  heartBtn.textContent = '🌸';
  heartBtn.classList.remove('beat');
  void heartBtn.offsetWidth;
  heartBtn.classList.add('beat');
  finalNote.textContent = notes[clicked % notes.length];
  clicked++;
});
