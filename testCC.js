// EJERCICIO 1
// Si listamos todos los números por debajo del 10 que son múltiplos de 3 o 5 obtenemos: 3, 5, 6 y 9. 
// La suma de estos múltiplos es 23. Realice un algoritmo para encontrar la suma de todos los múltiplos de 3 y 5
// por debajo de 1000.

function sumaMultiplosDeTresYCinco() {
    let suma = 0;
    for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        suma += i;}}
            
    return suma;}
          
console.log(sumaMultiplosDeTresYCinco());


//EJERCICIO 2
// Escriba una rutina que imprima los números del 1 al 100 pero: cuando el número sea múltiplo de 3, imprima “Tic”, en lugar del número. Cuando el número sea múltiplo de 5, imprima “Toc”, en lugar del número. Cuando el número sea múltiplo tanto de 3 como de 5, imprima “TicToc”, en lugar del número.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("TicToc");

    } else if (i % 3 === 0) {
      console.log("Tic");

    } else if (i % 5 === 0) {
      console.log("Toc");

    } else {
      console.log(i);
    }
  }


// EJERCICIO 4
//   Haga un programa que filtre el arreglo y devuelva un arreglo con solo el nombre de sus amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es amigo tuyo! De lo contrario, puede estar seguro de que no…
//   Amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]  Deberia [“Ryan”, “Mark”]

function filtrarAmigos(personas) {
  return personas.filter(persona => persona.length === 4);
}

const amigos = ["Ryan", "Kieran", "Mark", "Miguel"];
const amigosFiltrados = filtrarAmigos(amigos);

console.log(amigosFiltrados);


//EJERCICIO 5
// Escribe una función llamada sumaDigitos que retorne la suma de todos los dígitos de un número dado, por ejemplo:
// 5646 => 5+6+4+6 => 21

function sumaDigitos(numero) {
    let suma = 0;
    const numeroComoTexto = numero.toString();
  
    for (let i = 0; i < numeroComoTexto.length; i++) {
      suma += parseInt(numeroComoTexto[i]);
    }
  
    return suma;
  }
  
  const numero = 83465;
  const resultado = sumaDigitos(numero);
  console.log(resultado);
  

//opción 2
function sumaDigitos(numero) {
    let suma = 0;
  
    while (numero > 0) {
      suma += numero % 10;
      numero = Math.floor(numero / 10);
    }
  
    return suma;
  }
  
  const number = 83465;
  const result = sumaDigitos(number);
  console.log(result);
  
