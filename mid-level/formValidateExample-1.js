const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject'); 
const btn = document.getElementById('btn-submit');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let error = validateForm();
    let result = document.querySelector('.result');
    if(error[0]){
        result.innerHTML = error[1];
        if(result.classList.contains('green')) {
            result.classList.remove('green')
        }
        result.classList.add("red");
    } else {
        result.innerHTML = 'Solicitud enviada correctamente.';
        if(result.classList.contains('red')) {
            result.classList.remove('red')
        }
        result.classList.add("green");
    }
});

const validateForm = () => {
    let error = [];
    if( name.value.length < 5 || name.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido.";
        return  error;
    }
    if(email.value.length < 5 || email.value.length > 40 || email.value.indexOf("@") == -1) {
        error[0] = true;
        error[1] = "El mail es invalido.";
        return error
    }
    if(subject.value.length < 4 || subject.value.length > 40) {
        error[0] = true;
        error[1] = "La subject no existe";
        return error
    }
    error[0] = false;
    return error;
}