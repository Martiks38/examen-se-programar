# Exámen 2022 \#SeProgramar

Acontinuación, se enunciarán los ejercicios que tuve que resolver en el exámen de #SeProgramar en Mayo del 2022.

## Gobstones

1. Ejercicio 1

Es bastante sabido que para recordar dónde se esconde un tesoro hay que marcar el lugar.
Una clásica opción para esto es utilizar una cruz-
Créa un programa que dibuje una cruz de color Rojo. El cabezal empieza en el origin (o sea, en el borde Sur-Oeste) pero no te preocupes por dónde finaliza.

2. Ejercicio 2

En el ejercicio anterior hicimos una cruz de un color específico porque es lo que solemos ver en películas o libros pero ¿qué nos impide que hagamos una cruz de cualquier color para marcar un lugar?
Definí el procedimiento HacerCruz para que dibuje una cruz con el color que reciba por parámetro. No te preocupes por dónde termina el cabezal.

## JavaScript

1. Ejercicio1

Crear una función que reciba 3 números y nos diga si la resta entre los 2 primeros es mayor al tercero. Definí la función "esMayorLaResta"

2. Ejercicio 2

Queremos crear un mezclador de palabras que reciba 2 palabras y un número. Si el número es menor o igual a 6 el mezclador concatena la primera palabra con la segunda. En cambio, si el número es mayor a 6, concatena la segunda con la primera. Definí la función "mezclarPalabras".

3. Ejercicio 3

Ale está haciendo un trabajo de investigación y nos pidió ayuda. Necesita poder sumar la cantidad de letras de las palabras cortas. Una palabra se considera corta si tiene 6 o menos letras. Definí la función sumaLetrasDePalabrasCortas.

4.  Los servicios de películas bajo demanda lograron despertar un interés renovado en la sociedad por el cine y las series. Es por ello que contamos registros de este estilo.

let gus = {
nick: "Wuisti",
promedioPeliculasMensuales: 5.
plataforma: "Netfix"
}

Definir la función resumenDeInformación que nos permita obtener la información requerida. Por ejemplo:

resumenDeInformación(gus)
"Está estimado que Wuisti verá 60 películas en un año con la plataforma Netfix"

---

## Ruby

1. Ejercicio 1

Modelar Camioneta para poder:

- cargarle una cantidad de nafta determinada;
- ver si tiene carga suficiente, es decir, si tiene más e 33 litros de nafta.

Definí la clase Camioneta que tenga un atributo @nafta con su getter. Los autos entienden los mensajes cargar_combustible! (que recibe la cantidad a cargar por parámetro) y nafta_suficiente?. No te olvides de definir un initialize que reciba a la nafta inicial como parámetro.

2. Ejercicio 2

Los compilados son discos que tienen la característica de recopilar canciones que comparten alguna característica, por ejempli artista, época o género. Algunas de ellas con mayor duración que otras.
Teniendo en cuenta que las canciones saben responder al mensaje titulo...

Definí el método nombres_de_las_canciones que responda el nombre de las canciones del Disco.

3. Ejercicio 3

Como bien sabemos, una Banda tiene integrantes. Cuando la banda toca, toca cada integrante:

- Violinista pierde una de sus cuerdas:
- Pianista sube su indice_de_coordinacion en 19;
- Triangulista no hace nada.

Definí el método tocar! tanto en la Banda como en los distintos tipos de integrantes. Definí los getters necesarios en cada integrante.
