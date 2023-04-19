//Imprima los números del 10 al 1 e Imprima los números pares.

let i = 11;

while(i>1){
    i--;
    console.log(i);
    if(i%2 == 0){
        console.log(i);
    }
}

//sume los números del 1 al 5 e imprima el resultado
 let cont = 1;
let suma = 0;
 for(cont;cont<=5;cont++){
    console.log(cont)
    suma = suma + cont;
}
console.log(`La suma de los primeros 5 números naturales es: ${suma}`)

//Tabla de multipliar del 7

let contador=0;
let mult

while(contador<10){
    contador++;
    mult=7*contador;
    console.log(`7 * ${contador} = ${mult}`)

}
