# Reporte de Respuestas - Laboratorio Semana 3/4

## Experimentos
* **E1:** [Pendiente]
* **E2:** [Pendiente]
* **E3:** [Pendiente]

## Preguntas de Análisis
* **P1:** 
R/ type CustomButtonProps = {
    title: string;
    onPressButton: () => void;
    **variant?**: AparienciaBoton; //Es opcional puesto que la mayoría de botones en una app suelen compartir un estilo estandar, por lo que en el caso de que en una pantalla no se especifique una variante, el botón no genere un excepción. Se elige el valor principal por defecto porque es el estilo más común para las acciones principales, como podría ser aceptar, guardar o demás. 
    **tamaño?**: TamañoBoton;      //Es opcional porque un botón estandar se suele usar varias veces con un tamaño estandar en formularios y presentaciones parecidas, obligar a declarar el tamaño en esas situaciones sería repetitivo. Se elige el valor mediano por defecto por ser el intermedio entre los tamaños y al ser el que más se pueda utilizar en el contexto antes indicado.
    **anchoCompleto?**: boolean;   //La mayoría de los botones en una interfaz suelen ocupar sólo es espacio de su  texto y sólo en casos contados necesitan tener todo el ancho de la pantalla. Se define como falso como valor por defecto debido a la explicación antes indicada, son casos esporádicos donde se requiere esta caracteristicas.
    **inhabilitado?**: boolean;    //Es opcional porque en su estado normal el botón está activo, sólo se vuelve inhabilitado en ciertas condiciones, mismo motivo por el cual su valor por defecto es falso. 
    **enProceso?**: boolean;       //Porque el estado de carga sólo ocurre cuando el usuario presiona el botón y la app está esperando algo, así que no tiene sentido obtener de forma obligatoria este prop. Así mismo se elige el valor por defecto false ya que el componente suele arrancar en estado normal y sólo cambia cuando se realiza una acción.     
};
Lo que garantiza que no se ejecute alguna acción cuando el botón está deshabilitado es la línea:
const estaBloqueado = inhabilitado || enProceso;
Puesto que la constante estaBloqueado evalúa con el OR si cualquiera de los dos flags es verdadero. Al pasarle ese resultado a la prop disabled del TouchableOpacity, el sistema bloquea a nivel tactil al componente. Eso significa que la función onPressButton nunca se ejecuta. 

Así mismo, bajar la opacidad del botón lo único que haría sería un cambio estetico y visual, no bloquearía los eventos táctiles, lo cual haría que el botón siga siendo funcional. 
* **P2:**
R/ La lógica de lo que debe suceder al interactuar con un favorito se define con la función:
manejarPedidoFavorito(producto)
en la línea 15 de App.tsx y el evento fluye de la siguiente manera:
App.tsx recorre el arreglo mediante .map() y le entrega la función al componente a través de la prop onSeleccionar={manejarPedidoFavorito} -> El componente TarjetaProducto recibe la función y la vincula al evento onPress del contener TouchableOpacity. -> Cuando el usuario presiona la tarjeta del favorito, el componente ejecuta la función recibida.
La ejecución culmina en App.tsx nuevamente, donde se ejecuta el alert con el texto correspondiente. 

* **P3:**
R/ El cálculo y el formato de los precios se definen y procesan en el archivo de utilidades utils/formatoPrecio.ts, así mismo para definir condicionalmente el formato se hace en TarjetaProducto.tsx en la línea 18 aproximadamente.
Si se hiciera un cambio en la moneda únicamente requeriría el cambio de la moneda en utils/formatoPrecio.ts actualizando la variable de moneda.
Si la lógica matemática y las cadenas de formato estuvieran en TarjetaProducto.tsx implicaría que se modifique TarjetaProducto.tsx cada vez que se cambie la moneda o se agregue cambie regla de negocio.
* **P4:** 
R/ El componente EncabezadoSeccion decide renderizar la etiqueta "Ver todo" si se envía la prop correspondiente en la línea 21 de EncabezadoSeccion.tsx. 
La prop que lo controla es onVerTodo y es opcional porque no todas las secciones del menú necesitan mostrar un botón "Ver todo".
* **P5:** 
R/ 1. manejarSeleccionMenu (Línea 11) - Recibe un parámetro producto y devuelve void, está en app porque maneja el flujo de la aplicación y si estuviera dentro de un componente, este podría estar atado a alguna regla de negocios haciendola no-reutilizable.
2. manejarPedidoFavorito (Línea 15) - Mismo caso que anterior.
3. manejarVerTodo (Línea 19)- No recibe parametros y devuelve void, no está dentro de un componente porque las acciones de navegación deberían estar dentro de la capa de App.
4. manejarConfirmarPedido (Línea 23)- No recibe parametros y devuelve void, no está dentro de un componente porque el manejo de esta respuesta debe residir en el contenedor principal de App el cual debería centralizar el estatos de los pedidos.
5. manejarVaciarPedido (Línea 27)- No recibe parametros y devuelve void, no está dentro de un componente porque modifica el estado general de la orden en la aplicación, de la misma forma que ConfirmarPedido.
* **P6:** 
R/-Se debería modificar App para definir la nueva función manejadora de eventos que controle el mensaje de alerta al hacer clic en "Aprovechar". 
-Se debería agregar un nuevo bloque de renderizado en App utilizando el componente EncabezadoSeccion para mapear los productos en promoción.
-Se debería agregar un tipado en el archivo types/menu.ts en el caso de que alguna propiedad de promoción se requiera.

* **E1:**
R/ Genera error al momento de querer asignar ese valor en el arreglo, en la línea 21 del menu.ts, esto se debe a que esta categoría de producto no estaba definida dentro del tipado de CategoríaProducto.
* **E2:**
R/ Genera error al momento de querer dejar de esta manera el producto, dice que el campo "nombre" no se encuentra dentro del producto, pero que está definido como obligatorio en el tipado de las props. No ocurre lo mismo con los que no son obligatorios, puesto que el sistema las define automáticamente como "undefined" al no pasarlas. 
* **E3:**
R/ Property 'producto' is missing in type '{ onSeleccionar: (producto: Producto) => void; }' but required in type 'TarjetaProductoProps'.
Se eliminó la prop obligatoria producto, devolviendo el mismo erro que antes, indicando que la prop no se encuentra dentro del producto, pero que está definido como obligaotrio en el tipado. En este caso, se definió como obligatorio este campo, pues el objetivo de TarjetaProducto ese renderizar la información de un elemento del menú, si este producto no se enviara, provocaría fallos o pantallas vacías en el mejor de los casos.