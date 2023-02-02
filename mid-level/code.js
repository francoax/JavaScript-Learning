const input = document.querySelector('.input');
const contenedor = document.querySelector('.seleccionado');


input.addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let text = input.value;
    contenedor.innerHTML = text.substring(start, end);
})