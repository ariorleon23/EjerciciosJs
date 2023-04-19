
var num1=13;
var num2=50;
var num3=99;
var numeroMayor, numeroMedio, numeroMenor;

//Numero mayor entre tres numero y lista ordenada

if(num1>num2 && num1>num3){
    numeroMayor = num1;
    console.log(`${num1} es mayor que ${num2} y ${num3}`)
    if(num2>num3){
        numeroMedio = num2;
        numeroMenor = num3;
    }
    else{
        numeroMedio = num3;
        numeroMenor = num2;
    }
    console.log(numeroMayor)
    console.log(numeroMedio)
    console.log(numeroMenor)
   
}
else if(num2>num3){
    numeroMayor =num2
    console.log(`${num2} es mayor que ${num1} y ${num3} `)
    if(num1>num3){
        numeroMedio = num1;
        numeroMenor = num3;
    }
    else{
        numeroMedio = num3;
        numeroMenor = num1;
    }
    console.log(numeroMayor)
    console.log(numeroMedio)
    console.log(numeroMenor)
}
else{
    numeroMayor = num3
    console.log(`${num3} es mayor que ${num1} y ${num2} `)
    if(num1>num2){
        numeroMedio = num1;
        numeroMenor = num2;
    }
    else{
        numeroMedio = num2;
        numeroMenor = num1;
    }
    console.log(numeroMayor)
    console.log(numeroMedio)
    console.log(numeroMenor)
}

//Numero par o impar

if(num1%2==0)
{
console.log(`El número ${num1} es par`);
}
else{
    console.log(`El número ${num1} es impar`)
}

//Planteamiento
var descuento;
var docena = 0;
const valorDocena = 60000;
var valorCompra = docena*valorDocena;
var descuentoAplicado;

if(docena>1 && docena<5){
    descuento=0.1;
    descuentoAplicado = valorCompra*(1-descuento)
    console.log(`El valor de la compra es ${descuentoAplicado}`)

}
else if (docena>=5 && docena<10){
    descuento=0.15;
    descuentoAplicado = valorCompra*(1-descuento)
    console.log(`El valor de la compra es ${descuentoAplicado}`)
}
else if(docena>10){
    descuento=0.2;
    descuentoAplicado = valorCompra*(1-descuento)
    console.log(`El valor de la compra es ${descuentoAplicado}`)
}
else{
    console.log("Por favor entra un número positivo de docenas")
}


