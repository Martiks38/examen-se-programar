/* Ejercicio 2 */
/*
    Este ejercicio nos pide crear un mezclador de palabras que recibe 2 palabras y un número. Es decir, la función tendrá 3 parámetros los dos primeros son palabras (palabra1 y palabra2 respectivamente) y el tercero un número (numero).
    Para saber el orden con el que se mezclarán las palabras la función debe ver si el valor del número es mayor o igual a 6. En el caso de que se cumpla, el mezclador concatena la primera palabra con la segunda. Por el contrario, concatena la segunda con la primera.
    Para concatenar palabras una forma es mediante el símbolo +.
*/

// Para resolver este ejercicio podemos usar la expresión condicional if/else o el operador ternario

// Usando la expresión if/else
/*
    function mezclarPalabras(palabra1, palabra2, numero) {
      if (numero <= 6) {
        return palabra1 + palabra2
      }else{
        return palabra2 + palabra1
      }
    }
*/

// Usando operador ternario
function mezclarPalabras(palabra1, palabra2, numero) {
  // Acontinuación el operador ternario comparará si el numero es menor o igual a 6 y devolverá un de los resultados.
  // Este resultado es que devuelve la función en su return.
  return numero <= 6
    ? palabra1 + palabra2
    : palabra2 + palabra1
}

/*
    Arriba se mostraron dos formas para manejar la toma de decisiones pero también se puede modificar la expresión condicional.
    Otra forma de verificar si numero es menor o igual que 6 es analizar si numero es menor que 7.
    Y otra es analizando si numero es mayor a 6 por lo que las funciones quedarían:

      - caso if/else: 
        if(numero > 6){
          retund palabra2 + palabra1
        }else{
          return palabra1 + palabra2
        }
        
      - caso operador ternario
        return numero > 6 ? palabra2 + palabra1 : palabra1 + palabra2
    
    Si bien se logran los mismos resultados se pierde un poco la semántica del enunciado.
*/