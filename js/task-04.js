const btnDec = document.querySelector('[data-action = "decrement"]');
const btnInc = document.querySelector('[data-action = "increment"]');
const valueEl = document.querySelector('#value');

btnDec.addEventListener('click', () => {
    valueEl.textContent --;
});
btnInc.addEventListener('click', () => {
    valueEl.textContent ++;
})