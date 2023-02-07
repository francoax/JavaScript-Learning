class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [
    ["asd", "@aaa"],
    ["aasdd", "@wwweee"],
    ["pppwpw", "@;;plwd"],
    [";;wwpw", "@ww222"],
    ["camilanesa", ]
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

// Callbacks
/* const obtenerPersona = (id, cb) => {
    if(personas[id] == undefined) {
        cb("No se ha encontrado la persona");
    } else {
        cb(null,personas[id])
    }
}

const obtenerInstagram = (id, cb) => {
    if(personas[id] == undefined) {
        cb("No se ha encontrado el instragram");
    } else {
        cb(null,personas[id].instagram)
    }
}

obtenerPersona(2,(err, persona, id)=>{
    if(err) {
        console.log(err)
    } else {
        console.log(persona.nombre);
        obtenerInstagram(id, (err, instragram)=>{
            if(err) {
                console.log(err)
            } else {
                console.log(instragram)
            }
        })
    }
}) */

const obtenerPersona = (id) => {
    return new Promise((resolve, reject)=>{
        if(personas[id] == undefined) 
            reject('No se encontro a la persona.')
        else 
            resolve(personas[id])
    })
}

const obtenerInstagram = (id) => {
    return new Promise((resolve, reject)=>{
        if(personas[id].instagram == undefined) 
            reject('No se ha encontrado el instagram.')
        else 
            resolve(personas[id].instagram)
    })
}

let id = 5;

obtenerPersona(id).then((result)=>{
    console.log(result.nombre);
    return obtenerInstagram(id);
}).then((instragram)=>{
    console.log(instragram)
    }).catch((e)=>{
        console.log(e);
    })