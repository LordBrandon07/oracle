// plantilla del texto, parecido al f{} en python 

const nombre = 'pepe'
const apellido = 'gonzales'

let nombreCompleto = `el nombre es: ${nombre} ${apellido}` //comillas invertidas (alt Gr + tecla encima del shift, signo dinero y corchetes)

console.log(nombreCompleto)

// listas

const ciudades = new Array('bogota', 'cali', 'medellin');
console.log(ciudades)

// otra fomra de lista, mas easy

const paises = ['colombia', 'USA', 'japon']
console.log(paises)

{
    paises.push('uruguay'); //funcion agregar elemento al final de la lista 'push'
    console.log(paises)
    ciudades.unshift('cucuta') //agrega al inicio 'unshift'
    console.log(ciudades)
}

{
    console.log(paises[0]) //indice de lista
    paises.splice(3,2,'peru', 'chile'); //remplaza indices 'splice'
    console.log(paises)
}

{
    let contador = paises.length; //contador de indices 'lenght'
    console.log(`hay ${contador} paises`)
}

{
    console.log(ciudades)
    ciudades.shift() //eliminar elemento al inicio 'shift'
    ciudades.pop() //elimina el ultimo elemento 'pop'
    console.log(ciudades)
}

{
    console.log(ciudades.filter((e) => e == 'bogota')) //filtro de indices 'filter'
}

{
    console.log(paises.join('-')) //pasar lista a string con separador 'join'
    console.log(paises.sort()) //ordenar una lista 'sort'
    console.log(ciudades.indexOf('bogota')) //saber indice 'indexOF'
    console.log(ciudades.concat(paises)) //unificar listas 'concat'
}