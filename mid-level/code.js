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
    [";;wwpw", "@ww222"]
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

console.log(personas); 