// Según lo anterior haga un código que por medio de un ciclo llene un arreglo con los números del 1 al 100 en imprimalo en pantalla

const numeros = [];
for(i = 1; i<=100 ; i++){
 numeros.push([i])
}
console.log(numeros);
//Haga un código que guarde los números pares del 1 al 100 en un arreglo e imprimalo en pantalla.

const numerosPares =[];

for(i = 1; i<=100 ; i++){
    if(i%2==0){
        numerosPares.push([i])
    }
}
   console.log(numerosPares);

//Desarrolle un código que reciba un arreglo con 3 números, los ordene e imprima en pantalla en orden.

const arregloTresNum = [-5, 1080, 80000];


if(arregloTresNum[0]>arregloTresNum[1] && arregloTresNum[0]>arregloTresNum[2]){ //El primer es mayor
    if(arregloTresNum[1]>arregloTresNum[2]){
        console.log(arregloTresNum);
    }
    else{
        arregloTresNum.splice(1,2,arregloTresNum[2],arregloTresNum[1])
        console.log(arregloTresNum);
    }
}
else if (arregloTresNum[1]>arregloTresNum[2]){ //El segundo es mayor
      
    if(arregloTresNum[0]>arregloTresNum[2]){ 
        arregloTresNum.splice(0,3,arregloTresNum[1],arregloTresNum[0],arregloTresNum[2])
        console.log(arregloTresNum);
    }
    else{
        arregloTresNum.splice(0,3,arregloTresNum[1],arregloTresNum[2],arregloTresNum[0])
        console.log(arregloTresNum);
    }
}
else { //El tercero es mayor
        if(arregloTresNum[0]>arregloTresNum[1]){ 
        arregloTresNum.splice(0,3,arregloTresNum[2],arregloTresNum[0],arregloTresNum[1])
        console.log(arregloTresNum);
    }
    else{
        arregloTresNum.splice(0,3,arregloTresNum[2],arregloTresNum[1],arregloTresNum[0])
        console.log(arregloTresNum);
    }
}