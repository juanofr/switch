let numero= parseFloat(prompt("ingrese un numero"));
let contador= 1;
while (contador <= numero) {
   if (contador % 2!= 0) {
       console.log("impares",contador);
   }
   contador++;
}