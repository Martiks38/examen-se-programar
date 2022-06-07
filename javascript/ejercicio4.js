/* Ejercicio 4 */

/* Análisis */
/* 
  - ... Es por ello que contamos registros de este estilo.
    Los registros son objetos con las propiedades: "nick", "promedioPeliculasMensuales" y "plataforma". Ejemplo de un registro:
    let gus = {
      nick: "Wuisti",
      promedioPeliculasMensuales: 5,
      plataforma: "Netfix"
    }
  - Definir la función resumenDeInformacion que nos permita obtener la información requerida. Por ejemplo:
    resumenDeInformacion(gus)
    "Está estimado que Wuisti verá 60 películas en un año con la plataforma Netfix"

    La función debe llamarse resumenDeInformacion y tendrá como parámetro un registro y devuelve un string que utilizará los valores de las propiedades del registro. Para ello usaremos template string pero también se puede concatenar mediante el operador +.
    El mensaje base es:
    Está estimado que (nick) verá (promedioPeliculasMensuales * 12) películas en un año con la plataforma (plataforma)
*/

// Usando template string
function resumenDeInformacion(registro) {
  let mensaje = `Está estimado que ${registro.nick} verá ${
    registro.promedioPeliculasMensuales * 12
  } películas en un año con la plataforma ${registro.plataforma}`

  return mensaje
}

// Usando operador +
function resumenDeInformacion(registro) {
  let mensaje =
    'Está estimado que ' +
    registro.nick +
    ' verá ' +
    registro.promedioPeliculasMensuales * 12 +
    ' películas en un año con la plataforma ' +
    registro.plataforma

  return mensaje
}

/* Otras formas */
// Guardar los valores del registro en variables
function resumenDeInformacion(registro) {
  let nick = registro.nick
  let promedioPeliculasAnuales = registro.promedioPeliculasMensuales * 12
  let plataforma = registro.plataforma

  return `Está estimado que ${nick} verá ${promedioPeliculasAnuales} películas en un año con la plataforma ${plataforma}`
}

// Usando destructuración (NO fue visto en el curso)
// Permite desempaquetar valores de arreglos o propiedades de objetos en distintas variables.
function resumenDeInformacion(registro) {
  let { nick, promedioPeliculasMensuales, plataforma } = registro
  let promedioPeliculasAnuales = promedioPeliculasMensuales * 12

  return `Está estimado que ${nick} verá ${promedioPeliculasAnuales} películas en un año con la plataforma ${plataforma}`
}
