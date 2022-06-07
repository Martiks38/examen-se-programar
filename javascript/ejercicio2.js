/* Ejercicio 2 */

/* Análisis */
/*
  - Queremos crear un mezclador de palabras que reciba 2 palabras y un número.
    La función recibirá tres parámetros los dos primeros son palabras ( strings ) y el tercero es un número.
    Llamaré a estos parámetros word1, word2 y number respectivamente.

  -  Si el número es menor o igual a 6 el mezclador concatena la primera palabra con la segunda. En cambio, si el número es mayor a 6, concatena la segunda con la primera.
    Lo que tenemos que hacer es comparar si el número es menor o igual a 6 para saber cómo será el orden en que concatenarán las palabras. Por lo que deberemos hacer uso de la estructura de control if/else pero también se puede resolver usando el operador ternario.
    Para concatenar las dos palabras podemos hacer uso del operador "+" como una opción. Otra opción puede ser usando template string.

  - Definí la función "mezclarPalabras".
    La función debe llamarse mezclarPalabras
*/

// Usando la estructura de control if/else

function mezclarPalabras(word1, word2, number) {
  if (number <= 6) {
    return word1 + word2
  } else {
    return word2 + word1
  }
}

// Usando el operador ternario
/*
  Podemos dividir el operador ternario en tres términos, el primero es la expresión condicional
  El segundo es la instrucción que debe hacer en caso de que la expresión condicional resulte verdadera (true) y está separado del primer término con el símbolo ?
  El tercero es la instrucción que debe ejecutar en caso de que la expresión condicional resulte false (false) y está separado del segundo término con el símbolo :
*/
function mezclarPalabras(word1, word2, number) {
  return number <= 6 ? word1 + word2 : word2 + word1
}

/*
  Arriba se mostraron dos formas para manejar la toma de decisiones pero también se puede modificar la expresión condicional.
  Otra forma de verificar si number es menor o igual que 6 es analizar si number es menor que 7.

    - caso if/else: 
    if(number > 6){
      retund word2 + word1
    }else{
      return word1 + word2
    }
    
    - caso operador ternario
      return number > 6 ? word2 + word1 : word1 + word2

  Y otra es analizando si number es mayor a 6 por lo que las funciones quedarían:

    - caso if/else: 
      if(number > 6){
        retund word2 + word1
      }else{
        return word1 + word2
      }
      
    - caso operador ternario
      return number > 6 ? word2 + word1 : word1 + word2

  De esta forma obtenemos los mismos resultados sabiendo la idea central problema.
*/
