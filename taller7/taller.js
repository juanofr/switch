let juano= parseFloat(prompt("ingrese un numero"))
let contador= 0;
let suma= 0
while (juano !=0) {
 juano= parseFloat(prompt("ingrese otro numero"));
    suma= suma+juano;
    contador++
}
let divsion=suma/contador
console.log("el promedio es", divsion);
