const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    if(inputEl.value.length < inputEl.getAttribute('data-length')){
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
        
    }
    else {inputEl.classList.add('valid');
inputEl.classList.remove('invalid')}
  
})


