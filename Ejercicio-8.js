//Haga un código que haga una función declarada para cada una de las siguientes operaciones: Suma/Resta/Multiplicacion/Division

function OperacionesMatematicas(num1,num2){
    suma = num1+num2;
    resta = num1-num2;
    multiplicacion = num1*num2;
    division = num1/num2;

    console.log(`La suma entre ${num1} y ${num2} da como resultado ${suma}.`)
    console.log(`La resta entre ${num1} y ${num2} da como resultado ${resta}.`)
    console.log(`La multiplicación entre ${num1} y ${num2} da como resultado ${multiplicacion}.`)
    console.log(`La división entre ${num1} y ${num2} da como resultado ${division}.`)

}
OperacionesMatematicas(10,5);


function sumaDosNumeros(num1,num2){
    suma = num1+num2;
    return (` ${num1} + ${num2} = ${suma}.`)
}
console.log(sumaDosNumeros(10,5))

function restaDosNumeros(num1,num2){
    resta = num1-num2;
    return (`${num1} - ${num2} = ${resta}.`)
}
console.log(restaDosNumeros(10,5))

function multiplicacionDosNumeros(num1,num2){
    multiplicacion = num1*num2;
    return (` ${num1} x ${num2} = ${multiplicacion}.`)
}

console.log(multiplicacionDosNumeros(10,5))

function divisionDosNumeros(num1,num2){
    division = num1/num2;
    return (` ${num1} / ${num2} = ${division}.`)
}

console.log(divisionDosNumeros(10,5))
// Construir una función que convierta dólares a pesos colombianos y otra función que convierta pesos colombianos a dólares.


function ConversionPesosDolares(pesos){
    pesosDolares = pesos*0.00022;
   return (`$ ${pesos} COP son $ ${pesosDolares} USD`)
    
}

console.log(ConversionPesosDolares(10000))

function ConversionDolaresPesos(dolares){
    DolaresPesos = dolares*4474.70;
    return (`$ ${dolares} USD son $ ${DolaresPesos} COP`)
}

console.log(ConversionDolaresPesos(5))
 // Construir un código que tenga una función para cada uno de los siguientes cálculos: Área de un cuadrado/Área de un círculo/Área de un triángulo.

 function AreaFiguras(radio,ladoCuadrado, baseTringualo, alturaTriangulo){
    areaCuadrado = ladoCuadrado*ladoCuadrado;
    areaCirculo = Math.PI*Math.pow(radio,2);
    areaTriangulo = (baseTringualo*alturaTriangulo)/2;

    return (`El área del cuadrado es ${areaCuadrado}, el área del circulo es ${areaCirculo.toFixed(2)} y el área del triángulo es ${areaTriangulo} `);
 }

 console.log(AreaFiguras(2,4,3,5))
