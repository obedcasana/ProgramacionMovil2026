export type CustomButtonVariant = "primary" | "secondary" | "tertiary";

export type CustomButtonProps = {
    //tipo de dato: cadena
    title: string;
    //tipo de dato: funcion vacia o metodo
    onPressButton: () => void;
    //tipo de dato: union de literales
    variant?: CustomButtonVariant 
    disabled?: boolean 
    //tipo: literal
    //variant: "primary"
}

/* Tipos de datos: 
null = definido, pero vacio  
undefined = no definida, vacio
0 = definido, con valor
*/