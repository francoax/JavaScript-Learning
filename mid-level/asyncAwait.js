const objeto = {
    prop1 : "valor 1",
    prop2 : "valor 2",
    prop3 : "valor 3"
};

const obtenerInfo = (text) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, (Math.random()*200));
    })
}

const mostrarData = async()=>{

    data1= await obtenerInfo("1: pato");

    data2 = await obtenerInfo("2: palo");

    data3 = await obtenerInfo("3: bernado");

    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();

/* 
const mostrarResultado = async()=>{
    resultado = await obtenerInfo();
    console.log(resultado);
}

mostrarResultado() */