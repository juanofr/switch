let kelvin=parseFloat(prompt("ingrese un numero"));
let contador= 1;
let resulatado= 0;
let resulatadoterminar= 0;
while (contador<=kelvin) {
    resulatado= contador*contador;
    contador++;
    resulatadoterminar= resulatadoterminar+resulatado;
}
console.log(resulatadoterminar);