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
* **P2:** [Pendiente]
* **P3:** [Pendiente]
* **P4:** [Pendiente]
* **P5:** [Pendiente]
* **P6:** [Pendiente]