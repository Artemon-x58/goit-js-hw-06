const inputEl = document.querySelector('#name-input');
console.log(inputEl)

const spanEl = document.querySelector('#name-output');
console.log(spanEl)


inputEl.addEventListener('input', (e) => {
    if(inputEl.value.trim() === '') {spanEl.textContent = 'Anonymous'
    } else
    {spanEl.textContent = e.target.value}
})


