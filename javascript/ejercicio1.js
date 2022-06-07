/* Ejercicio 1 */

/* Análisis */

/*
  - Crear una función que reciba 3 números
    La función recibe tres parámetros que son números. Los nombres que le daré a estos son number1, number2 y number3.
  - ... nos diga si la resta entre los dos primeros es mayor al tercero.
    Esto quiere decir que si la resta entre number1 y number2 es mayor a number3 la respuesta es true. En caso contrario, la respuesta será false.
    Esto lo podemos resumir en la siguiente expresión: 
      number1 - number2 > number3
    Si la comparación se verifica el resultado es true si no es false.
  - Definí la función "esMayorLaResta".
    El nombre de la función debe ser esMayorLaResta
*/

function esMayorLaResta(number1, number2, number3) {
  return number1 - number2 > number3
}
