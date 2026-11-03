import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {CustomButtonProps, CustomButtonVariant} from "../utils/types/ButtonProps";

export default function CustomButton({title, onPressButton, variant = "primary", disabled=false}: CustomButtonProps){
    const styles = getStyles(variant);

    return(
        <Pressable 
            style={styles.button} 
            onPress={onPressButton}
            disabled={disabled}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

// operadores logicos = AND, &&, OR, ||, !
// operadores condicionales = >, <, >=, <=, !=, ==, ===
// evaluacion logica(representa un valor logico {V o F}) = edad >= 18,
/* estructura de seleccion = If(evaluacion logica), 
                             If(evaluacion logica){ V }, Else{ F }, 
                             Op. Ternario (evaluacion logica ? accion si V : accion si F) 


*/
const getStyles = (variant: CustomButtonVariant) => 
    StyleSheet.create({
        button:{
           backgroundColor: variant === "primary" ? '#24327b' : 
                                variant === "secondary" ?  'lightgray' : 'transparent' ,
            width: 180,
            paddingVertical: 14,
            paddingHorizontal: 18,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 10,
        },
        buttonText:{
            color: variant === "primary" ? "white" : "#000000",
            fontWeight: '500',
            fontSize: variant === "tertiary" ? 11 : 15,
            letterSpacing: 0.3,
        }
    })