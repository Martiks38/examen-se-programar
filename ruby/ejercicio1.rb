# Ejercicio 1

# Análisis
=begin
  - Definí la clase Camioneta que tenga un atributo @nafta con su getter.
    Para definir una clase en Ruby se debe usar la palabra reservada class y se llama Camioneta.
    Los atributos empiezan con el símbolo @ y no es necesario inicializarlos. Estos por defecto son privados por lo que para acceder a ellos fuera del módulo o la clase, es necesario definir un getter y/o un setter para modificar su valor.
    El getter será nafta.
  
  - Los autos entienden los mensajes cargar_combustible! (que recibe la cantidad a cargar por parámetro) y nafta_suficiente?.
    cargar_combustible! y nafta_suficiente? son métodos y estos son públicos por defecto.
    El método cargar_combustible! es un setter que modifica el valor del atributo @nafta. Este recibe como parámetro la cantidad de litros a cargar que se sumarán al valor actual.
    El método nafta_suficiente? retorna un booleano por convención. Es decir, los métodos que terminan en ? retornan un valor booleano (true o false) mientras que el otro método termina en ! lo que quiere decir que produce un cambio en el estado. Este método verificará si el valor del atributo @nafta es mayor a 33. Según lo que establece el enunciado: "ver si tiene carga suficiente, es decir, si tiene más de 33 litros de nafta".

  - No te olvides de definir un initialize que reciba a la nafta inicial como parámetro.
    El método initiailize permite especificar cómo se inicializan las instancias de una clase. Declarando los valores iniciales de los atributos. Por lo que, tendrá como parámetro la cantidad de litros de nafta con el que empieza.
=end

class Camioneta
  @nafta

  def initialize (litros_nafta)
    @nafta = litros_nafta
  end

  def nafta
    @nafta
  end

  def cargar_combustible! (litros_nafta)
    @nafta += litros_nafta
  end

  def nafta_suficiente?
    @nafta > 33
  end
end