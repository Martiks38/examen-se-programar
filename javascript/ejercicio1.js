/* Ejercicio 1 */

/*
    En este ejercicio nos piden hacer una función que recibe tres números, o sea tres parámetros. Ha estos parámetos los llamaremos numero1, numero2 y numero3.
    Además, nos dice que la función comparará si el resultado de la resta de los dos primeros ( los dos primeros parámetros ) es mayor al tercero  ( tercer parámetro ).
    Con lo cual la función devolverá un valor booleano:
      - true si: (numero1 - numero 2) es mayor a numero3
      - false si: (numero1 - numero2) es menor a numero3
    Esta lógica queda representada en la siguiente expresión:
    numero1 - numero2 > numero3
*/

function esMayorLaResta(numero1, numero2, numero3) {
  return numero1 - numero2 > numero3
}
