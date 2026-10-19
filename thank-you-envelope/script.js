const envelopeButton = document.querySelector('#envelopeButton');
const instruction = document.querySelector('#instruction');
const hint = document.querySelector('#hint');
const replayButton = document.querySelector('#replayButton');

let isOpen = false;

function makeHeartBurst() {
  const colors = ['#e86f9e', '#f4a5c1', '#d96d9a', '#f7bfd3', '#ffffff'];
  const symbols = ['♥', '♡', '❤'];
  const rect = envelopeButton.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.className = 'burst-heart';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.setProperty('--x', `${originX}px`);
    heart.style.setProperty('--y', `${originY}px`);
    heart.style.setProperty('--dx', `${Math.round((Math.random() - 0.5) * 260)}px`);
    heart.style.setProperty('--rot', `${Math.round((Math.random() - 0.5) * 90)}deg`);
    heart.style.setProperty('--size', `${14 + Math.random() * 18}px`);
    heart.style.setProperty('--heart-color', colors[Math.floor(Math.random() * colors.length)]);
    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
  }
}

function openEnvelope() {
  isOpen = true;
  envelopeButton.classList.add('is-open');
  envelopeButton.setAttribute('aria-expanded', 'true');
  envelopeButton.setAttribute('aria-label', 'พับซองจดหมายกลับ');
  instruction.textContent = 'มีข้อความเล็ก ๆ ส่งให้เธอ 💕';
  hint.textContent = '♡ อ่านจดหมายแล้วใช่ไหม ♡';
  replayButton.hidden = false;
  makeHeartBurst();
}

function closeEnvelope() {
  isOpen = false;
  envelopeButton.classList.remove('is-open');
  envelopeButton.setAttribute('aria-expanded', 'false');
  envelopeButton.setAttribute('aria-label', 'เปิดซองจดหมาย');
  instruction.textContent = 'แตะที่ซองจดหมายเพื่อเปิดอ่านนะ';
  hint.textContent = '♡ กดเปิดจดหมายได้เลย ♡';
  replayButton.hidden = true;
}

envelopeButton.addEventListener('click', () => {
  if (isOpen) closeEnvelope();
  else openEnvelope();
});

replayButton.addEventListener('click', closeEnvelope);
