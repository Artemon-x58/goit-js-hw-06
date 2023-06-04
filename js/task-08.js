const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', handleSubmit);

function handleSubmit (e) {
    e.preventDefault();
    
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;
    
        if(email === '' || password === '')
    { alert('Bсі поля повинні бути заповнені')}
    else {
        const obj = {
            email,
            password
        }; 
        console.log(obj)
    formEl.reset()
    };
    };
