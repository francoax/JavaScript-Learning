const contenedor = document.querySelector(".flex-container");


let listaDeLlaves = document.createDocumentFragment();

function crearLLave(nombre, modelo, precio){
    img = `<img class="llave-img" src="llave.png">`
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>Modelo: ${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}


for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*15+20);
    let llave = crearLLave(`llave ${i}`, modeloRandom, precioRandom);
    
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{
        document.querySelector(".key-data").value = modeloRandom;
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`, 'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]; 
    listaDeLlaves.appendChild(div);
}

contenedor.appendChild(listaDeLlaves);