const person= document.querySelector("input");
let infoInput; let personaje;
const p=()=> {infoInput= person.value};
const escrito= document.querySelector("p");
const clickeo= document.querySelector("button");

clickeo.addEventListener("click", p);

const fuente= new XMLHttpRequest(); // este es el objeto, pero en vez de tenerlo en codigo esta online
const url= 'https://swapi.dev/api/people/?page=2';
const method= "GET";
fuente.open(method, url);
fuente.send();

fuente.onreadystatechange= (e)=>{
    console.log(fuente);
    personaje= JSON.parse(fuente.responseText);
    console.log(personaje);
    
}

// document.write(`<p>Nombre: ${fuente["name"]}</p>`);

// escrito.innerHTML= "no entiendo una goma"

