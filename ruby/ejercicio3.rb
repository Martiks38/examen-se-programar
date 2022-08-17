# Ejercicio 3

# Análisis

=begin
  El ejercicio empieza con los siguientes datos en la solución

  class Banda
    def initialize (integrantes)
      @integrantes = integrantes
    end
  end

  class Violinista
  end

  class Pianista
  end

  class Triangulista
  end

  Analizando el enunciado
  - Definí el método tocar! tanto en la Banda como en los distintos tipos de integrantes.
    Método tocar! en:
      + Banda: deberá recorrer el array de integrantes del atributo @integrantes y cada uno de estos deberá ejecutar su método tocar!. Para esto, usaremos el método each, que tendrá el parámetro integrante en su bloque de código.
      + Violinista: al tocar este pierde una de sus cuerdas. Por lo que deberemos restarle una cuerda al atributo @cuerdas de éste.
      + Pianista: al tocar sube su índice de coordinación en 19. Es decir, el atributo indice_de_coordinacion aumenta su cantidad en 19.
      + Triangulista: al tocar no hace nada.
  
  - Definí los getters necesarios en cada integrante.
    Getter en:
      + Violinista: se llama cuerdas
      + Pianista: se llama indice_de_coordinacion
      + Triangulista: no es necesario ya que no tiene ningún atributo. Así que no lo definimos.

  - Definir initialize tanto en Banda como en cada integrante.
    + Banda: initialize recibe como parámeto una lista de integrantes.
    + Violinista: initialize recibe la cantidad de cuerdas con las que inicia.
    + Pianista: initialize recibe el índice de coordinación con el que inicia.
    + Triangulista: no es necesario.
=end

class Banda
  def initialize (integrantes)
    @integrantes = integrantes
  end

  def tocar!
    @integrantes.each { | integrante | integrante.tocar!}
  end
end

class Violinista
  def initialize (numero_cuerdas)
    @cuerdas = numero_cuerdas
  end

  def cuerdas
    @cuerdas
  end

  def tocar!
    @cuerdas -= 1
  end
end

class Pianista
  def initialize ( indice_de_coordinacion)
    @indice_de_coordinacion = indice_de_coordinacion
  end

  def indice_de_coordinacion
    @indice_de_coordinacion
  end
  
  def tocar!
    @indice_de_coordinacion += 19
  end
end

class Triangulista
  def tocar!
  end
end
