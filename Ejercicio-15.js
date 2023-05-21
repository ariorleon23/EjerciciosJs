/*Destructuración:
Asignación de los elementos de un arreglo u objeto a una variable*/

/*Sin destructuracion asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera*/

console.log("--------------Sin destructuración-------------------")

const numeros=[1,2,3]
let uno=numeros[0],
dos=numeros[1],
tres=numeros[2]

console.log(uno,dos,tres)

//Con destrucrturacion

console.log("--------------Con destructuración-------------------")

const [one, two, three]=numeros; //En una sola linea de codigo se asignan los valores de numero a las variables one, two y three
console.log(one,two,three)

//Con los objetos tambien es posible hacer destructuración siguiendo la misma lógica



///Ejercicios propuesto ///



const semana = ["lunes","martes","miercoles","jueves","vienes","sabado","domingo"];

let diaUno = semana[0]
let diaDos = semana[1]
let diaTres = semana[2]
let diaCuatro = semana[3]
let diaCinco = semana[4]
let diaSeis = semana[5]
let diaSiete = semana[6]

console.log(diaUno,diaDos,diaTres,diaCuatro,diaCinco,diaSeis,diaSiete)

const [dUno,dDos,dTres,dCuatro,dCinco,dSeis,dSiete] = semana;
console.log(dUno,dDos,dTres,dCuatro,dCinco,dSeis,dSiete)

const mascota={
    nombre: "Locky",
    edad: 6,
    tamano: "miniatura",
    color: "sal y pimienta"
}
const {nombre, edad, tamano, color}=mascota;
console.log(nombre,edad,tamano,color)



