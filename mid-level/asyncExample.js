const materiasHtml = document.querySelector('.materias');
const materias = [
    {
        nombre : "Fisica 4",
        nota : 7
    },
    {
        nombre : "Calculo 3",
        nota : 8
    },
    {
        nombre : "Bases de datos 3",
        nota : 9
    },
    {
        nombre : "Matematicas discretas 2",
        nota : 7
    },
    {
        nombre : "Programacion 4",
        nota : 8
    }
]

const getMaterias = (id) => {
    return new Promise((resolve,reject)=>{
        let materia = materias[id];
        if(materia == undefined) 
            reject('La materia no existe.')
        else {
            setTimeout(() => {
                resolve(materia)
            }, (Math.random()*400));
        }
    })
}

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await getMaterias(i);
        let newHtmlCode = `        
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHtml.innerHTML += newHtmlCode;
    }
}

devolverMaterias()

//getMaterias(1).then(res => console.log(res));