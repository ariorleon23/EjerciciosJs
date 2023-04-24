//Funcion expresada
const relacion = function(a,b){
    if(a>b){
        return 1;
    }
    else if(a<b){
        return -1;
    }
    else {
        return 0;
    }
}
console.log(relacion(10,10))

//Funcion autodeclarada Realizar un código con funciones anónimas autoejecutables realice un algoritmo que diga si un
//número entero positivo es par o no. Utilice la operación módulo.

(function (num1){
    if(num1 %2==0 && num1>=0)
    {
    console.log(`El número ${num1} es par`);
    }
    else if(num1%2!=0 && num1>=0){
        console.log(`El número ${num1} es impar`)
    }
    else{
        console.log(`El número deber ser positivo`)
    }
})(0)




