var btn = document.getElementById('btn');

btn.addEventListener('click', () => {
const results = ['大吉', '中吉', '中吉', '中吉', '凶'];
const n = Math.floor(Math.random() * results.length);
btn.textContent = results[n];
});

btn.addEventListener('mousedown', () => {
btn.classList.add ('pressed');
});

btn.addEventListener('mouseup', () => {
btn.classList.remove('pressed');
});
