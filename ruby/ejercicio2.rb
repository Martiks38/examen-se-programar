# Ejercicio 2

# Análisis

=begin
  A partir del módulo Disco.

  module Disco
    @canciones = [AmorAusente, Eco, Agujas, ElBalcon, GuitarrasDeCarton]
  end

  - Teniendo en cuenta que las canciones saben responder al mensaje titulo...
    Esto significa que cada canción en el array del atributo canciones tiene un método getter, titulo, que devuelve el título de la canción.
  
  - Definí el método nombres_de_las_canciones que responda el nombre de las canciones del Disco.
    El método nombre_de_las_canciones debe recorrer todo el array del atributo @canciones y generar una lista, un nuevo array, con el nombre de la canción, su título. Para ello, usaremos el método map en cuyo bloque tendremos un parámetro llamado cancion dentro de ||.
=end

module Disco
  @canciones = [AmorAusente, Eco, Agujas, ElBalcon, GuitarrasDeCarton]

  def self.nombres_de_las_canciones
    @canciones.map { |cancion| cancion.titulo}
  end
end
