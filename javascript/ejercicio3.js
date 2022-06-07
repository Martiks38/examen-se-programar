/* Ejercicio 3 */

/* Análisis */
/* 
  - Necesita poder sumar la cantidad de letras de las palabras cortas.
    Debemos contar la cantidad de letras que contiene una palabra sólo si ésta es corta. Para ello podes usar la propiedad length. Ejemplo:
      Si tenemos la palabra "mate" tiene cuatro letras, al hacer "mate".length devolverá el valor 4.
    Otra es usar la función longitud (perteneciente a la biblioteca de ArgentinaPrograma) que recibe un string como parámetro y devuelve la cantidad de letras que componen a este último.
    Para almacenar la suma de letras lo haremos en una variable llamada cantidadLetrasPalabrasCortas cuyo valor inicial es cero. Y al finalizar de analizar cada palabra la función devuelve el valor de esta variable (return cantidadLetrasPalabrasCortas).

  - Una palabra se considera corta si tiene 6 o menos letras.
    Estable la condición de que palabras son consideradas cortas. Una palabra es corta si su cantidad de letras es menor o igual que 6. Para ello, podemos usar como se mencionó anteriormente la función longitud o la propiedad length y ver si el valor devuelto cumple la condición.
    La expresión usando:
      - la propiedad length: palabra.length <= 6
      - la función longitud: longitud(palabra) <= 6
  
  - La función recibe como parámetro un array de strings.
    El parámetro lo llamaré words y en el se encuentran las palabras a procesar. Para ello podemos usar programación imperatica como se enseño usando la estructura for o usando programación funcional utilizando forEach (no se enseño)

  - Definí la función sumaLetrasDePalabrasCortas.
    La función debe llamarse sumaLetrasDePalabrasCortas
*/

/* Adicional */
/* 
  Se usará una variable cantidadLetras cuyo valor será el número de letras de la palabra con el fin de no repetir continuamente
*/

/* Programación imperativa */

// Estructura for
/*
  Usando índices iniciando en la posición cero del array hasta su final cuyo valor lo obtenderemos usando la propiedad length. O sea, words.length
*/
function sumaLetrasDePalabrasCortas(words) {
  let cantidadLetrasPalabrasCortas = 0

  for (let indice = 0; indice < words.length; indice++) {
    let cantidadLetras = words[indice].length

    if (cantidadLetras <= 6) {
      cantidadLetrasPalabrasCortas += cantidadLetras
    }
  }

  return cantidadLetrasPalabrasCortas
}

// Estrucura for ... of
/* Obtendremos cada palabra del array words */
function sumaLetrasDePalabrasCortas(words) {
  let cantidadLetrasPalabrasCortas = 0

  for (let word of words) {
    let cantidadLetras = word.length

    if (cantidadLetras <= 6) {
      cantidadLetrasPalabrasCortas += cantidadLetras
    }
  }

  return cantidadLetrasPalabrasCortas
}

/* Programación funcional */

// forEach
/* 
  forEach es un método en el objeto Array el cual recibe como parámetro una callback (una función). Esta callback recibe como parámetros un elemento, un índice y un array. Los parámetros índice y array son opcionales. Nuestra callback sólo require el parámetro elemento.
  Este método recorrerá todo el array y ejecutará la callback en cada elemento del array.

  Para añadir podemos usar una función anónima o arrow function.
  La función anónima como se puede deducir es una función que no tiene nombre y son muy utilizadas como callbacks.
  Las arrow function son una alternativa a la definición tradicional de una función pero estas presentan limitaciones. Su sintaxis es (parámetros) => {instrucciones}
  Ejemplo de una función normal y una arrow function.
  
  function
  function sumar(number1, number2){
    return number1 + number2
  }
  
  Arrow function
  const sumar = (number1, number2) => {
    return number1 + number2
  }

  o

  const sumar = (number1, number2) => number1 + number2

  Pueden buscar sobre cualquier tema de JavaScript en https://developer.mozilla.org/en-US/
  Y pueden leer más sobre arrow function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

// Función anónima
function sumaLetrasDePalabrasCortas(words) {
  let cantidadLetrasPalabrasCortas = 0

  words.forEach(function (word) {
    let cantidadLetras = word.length

    if (cantidadLetras <= 6) {
      cantidadLetrasPalabrasCortas += cantidadLetras
    }
  })

  return cantidadLetrasPalabrasCortas
}

function sumaLetrasDePalabrasCortas(words) {
  let cantidadLetrasPalabrasCortas = 0

  words.forEach((word) => {
    let cantidadLetras = word.length

    if (cantidadLetras <= 6) {
      cantidadLetrasPalabrasCortas += cantidadLetras
    }
  })

  return cantidadLetrasPalabrasCortas
}
