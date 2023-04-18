var pelicula = "Interestelar"
console.log("Variable película antes del bloque:", pelicula)

let musica="Rock"
console.log("Variable música antes del bloque:", musica)

//Esto es un bloque
{
    var pelicula="Matilda"
    console.log("Variable película en el bloque:", pelicula)

    let musica="Salsa"
    console.log("Variable música en el bloque:", musica)
}

console.log("Variable película despues del bloque:", pelicula)
console.log("Variable música despues del bloque:", musica)

var hola = "Hola";
var apellido = "Ortiz"


//Funcionalidad de variables locales y globales propio

var nombre = "Karen";
var edad = 25;


console.log(hola, nombre, apellido);
console.log("Edad de", nombre, edad);
{
var nombre = "Ariana"
let apellido = "León"
let edad = "13"

console.log(hola, nombre, apellido);
console.log("Edad de", nombre, edad);
}

console.log(hola, nombre, apellido);
console.log("Edad de", nombre, edad);