alumnos = [{
    name : "Franco Duarte",
    email : "asd@asd.com",
    subject : "Fisica III"
},
{
    name : "Kara Kere",
    email : "asggg444d@asd.com",
    subject : "Matematica III"
},
{
    name : "Jorge dar",
    email : "as44451513d@asd.com",
    subject : "Fisica I"
},
{
    name : "parper pir",
    email : "agfgrg3333sd@asd.com",
    subject : "Fisica II"
},
{
    name : "kolpo koasdiw",
    email : "adsasdggggsd@asd.com",
    subject : "lengua"
}];

const button = document.querySelector(".btn-confirm");
const container = document.querySelector(".grid-container");

let htmlCode = "";

for (alumno in alumnos){
    data = alumnos[alumno];
    let name = data.name;
    let email = data.email;
    let subject = data.subject;
    htmlCode += `
    <div class="grid-item name">${name}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item subject">${subject}</div>
    <div class="grid-item week">
        <select class="week-selected">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;
}

container.innerHTML = htmlCode;

button.addEventListener("click", () => {
    let confirmar = confirm('estas seguro que queres confirmar?');
    if(confirmar){
        document.body.removeChild(button);
    let elements = document.querySelectorAll(".week");
    let weekSelected = document.querySelectorAll(".week-selected");
    for (element in elements){
        semana = elements[element];
        semana.innerHTML = weekSelected[element].value;
    }
    }
})