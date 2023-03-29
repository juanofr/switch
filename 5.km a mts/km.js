let km= prompt("ingrese la longitud en km");
let medida= prompt("ingrese la medida");
switch (medida) {
    case hectometro:
        console.log("son",km*10);
        break;
        case decametro:
        console.log("son",km*100);
        break;
        case metros:
            console.log("son",km*1000);
            break;
            default:
        
}