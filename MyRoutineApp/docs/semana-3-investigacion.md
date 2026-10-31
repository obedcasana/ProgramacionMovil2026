Hoja de Respuestas
1. El valor por defecto de flexDirection es "column" donde los elementos se organizazn de arriba hacia abajo. En CSS para la web, el valor por defecto de flexDirection es "row" donde los elementos se colocan en fila horizontal. 
2. justifyContent contola la alineación de los elementos a lo largo del eje principal, mientras que alignItems los alinea en el eje cruzado. Cuando flexDirection es "column" el eje principal es el vertical y el cruzado el horizontal, Cuando flexDirection es "row" el eje principal es horizontal y el cruzado es vertical. 
3. flex-start: Alinea los elementos al inicio del eje principal del contenedor.
flex-end: Alinea los elementos al final del eje principal del contenedor.
center: Centra los elementos a lo largo del eje principal.
space-between: Distribuye los elementos de forma uniforme dejando espacio igual únicamente entre ellos sin espacio en los extremos, como una especie de justificado.
4. flex: 1 indica que el componente debe expandirse para ocupar proporcionalmente el espacio disponible en el contenedor. Si dos View hermanos tienen flex: 1 y flex: 2, el espacio libre se divide en un total de 3 partes, quedandose la primera con un tercio del espacio y la otra con los dos tercios restantes.
5. El padding añade espacio de relleno entre el borde del componente y el contenido del mismo, mientras que el margin añade espacio de separación por fuera componente respecto a los elementos que lo rodean. 
paddingHorizontal aplica un espacio de relleno interno tanto en el lado izquierdo como en el derecho al mismo tiempo.
marginVertical aplica un espacio de separación externo tanto en la parte superior como en la inferior de forma simultánea. 
6. borderWidth, borderColor y borderRadius, siento el grosor de las linea del borde, el color del borde y el redondeado del borde según el radio especificado respectivamente. 
7. fontsize: Controla el tamaño de la fuente tipográfica en pixeles. 
fontWeight: Define el grosor de la letra, ya sea normal o negrita, recibe valores de tipo string aceptando cadenas como "bold", "normal" o números representados en strings, osea: "400" o "700". 
color: Define el color del texto.
textAlign: Controla la alineación horizontal del texto dentro de un contenedor, osea centrado, a la izquierda, derecha o justificado. 
lineHeight: Establece la altura del renglón de texto, determinando el espacio entre linea, osea como un interlineado del Word. 
letterSpacing: Define la separación espacio entre los caracteres. 
8. textTransform: Permite transformar las mayusculas y minusculas del texto dinámicamente. 'uppercase' para convertir todo el texto a mayúsculas por ejemplo.
textDecotarionLine: Agrega lineas decorativas al texto. 'underline' para subrayar el texto por ejemplo.
9. La herencia de estilos en React Native está limitada estrictamente a los árboles de nodo de tipo Text anidados. Un View es un contenedor del tipo layout puramente estructural, que no posee propiedades de formato tipográfico, por lo que sus nodos de tipo text no heredan estilo como color o fontSize desde un View.
10. -Ayuda en el rendimiento, puesto que evita la creación de nuevas instancias de objetos de estilo en memoria cada vez que el componente se vuelva a renderizar.
-Mantiene el código JSX limpio y separado de la declaración de estilos, facilitando el mantenimiento.
11. Gana el estilo declarado en estilos.TarjetaDestacada, puesto que cuando se pasa un arreglo de estilos a la propiedad style, se evalúan y combinan los objetos de izquierda a derecha, por lo que si hay propiedades duplicadas las posiciones más adelantadas del arreglo sobreescriben a las anteriores.