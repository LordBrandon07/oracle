//operadores

const pais = 'japona';
const paises = ['colombia', 'USA', 'japon']

if (paises.indexOf(pais) >= 0){
    console.log('si esta')
}else{
    console.log('no esta')
}

// el === es una comparacion mas exacta
// and = &&
// or = ||
// not = !

if (!(paises.indexOf('japon') > -1)){
    console.log('no esta')
}else{
    console.log('si esta')
}

//el switch forma corta de los if como en el python

const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const ciudadDestino = "Bogotá";

let valorPasaje = 0;

console.log(`Verificando pasajes para  ${ciudadDestino}`);

    switch(ciudadDestino) {
        case "Bogotá": 
            valorPasaje = 500;
            break;
        case "Lima": 
            valorPasaje = 400;
            break;
        case "Santiago": 
            valorPasaje = 380;
            break;
        case "Montevideo": 
            valorPasaje = 200;
            break;
        default:
            console.log(`No hay pasajes para la ciudad indicada`);
            break;
    }
    if (valorPasaje > 0)
        console.log(`El valor del pasaje es: ${valorPasaje}`);