const sendBtn = document.getElementById('send-note'); 

sendBtn.addEventListener('click', () => {
    let resultado, info;
    try {
        prevRes = parseInt(document.getElementById('note').value);
        if(isNaN(prevRes)){
            throw 'Gracioso';
        }
        info = definirMensaje(prevRes);
        resultado = verificarAprobacion(8,5,info[1]);
    } catch (e){
        resultado = 'sos gracioso?';
        info = 'he descubierto que intentaste hackear el sitio';
    }

    abrirModal(resultado[0], info);
});


const verificarAprobacion = (nota1, nota2, pr) => {
    let prom = (nota1 + nota2 + pr) / 3;    
    if(prom >= 7) {
        return ["<span class='green'>Aprobado</span>", prom];
    }
    return ["<span class='red'>Desaprobado</span>",prom];
}

const definirMensaje = (pr) => {
    let resultado = pr;
    switch(resultado) {
        case 1: resultado = "No podes...";
        break;
        case 2: resultado = "Malardo...";
        break;
        case 3: resultado = "No sabes casi nada...";
        break;
        case 4: resultado = "Muy mal...";
        break;
        case 5: resultado = "Mal...";
        break;
        case 6: resultado = "Regular...";
        break;
        case 7: resultado = "Bien, pero puede mejorar...";
        break;
        case 8: resultado = "Muy bien...";
        break;
        case 9: resultado = "Excelente...";
        break;
        case 10: resultado = "Insuperable...";
        break;
        default: resultado = null;
    }
    return resultado;
}

const abrirModal = (res, info) => {
    document.querySelector('.resultado').innerHTML = res;
    document.querySelector('.mensaje').innerHTML = info;
    let modal = document.querySelector('.modal-background');
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}

const modalback = document.querySelector('.modal-background');

modalback.addEventListener('click', ()=> {
    modalback.style.display = "none";
})