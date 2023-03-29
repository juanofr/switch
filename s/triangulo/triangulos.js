let a1 = parseFloat(prompt("ingrese un angulo"));
let a2 = parseFloat(prompt("ingrese el segundo angulo"));
let a3 = parseFloat(prompt("ingrese tercer angulo"));
switch (a1+a2+a3 == 180){
    case true:
    console.log("Es un triangulo");
    break;
  default:
    console.log("No es un triangulo");
    break;
}