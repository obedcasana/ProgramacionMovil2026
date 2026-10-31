import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

export type AparienciaBoton = 'principal' | 'alternativa' | 'destructiva' | 'enlace';
export type TamañoBoton = 'pequeño' | 'mediano' | 'grande';

type CustomButtonProps = {
    title: string;
    onPressButton: () => void;
    variant?: AparienciaBoton;    
    tamaño?: TamañoBoton;        
    anchoCompleto?: boolean;       
    inhabilitado?: boolean;        
    enProceso?: boolean;            
};


export default function CustomButton({title, onPressButton, variant = 'principal',tamaño = 'mediano', anchoCompleto = false, inhabilitado = false, enProceso = false,}: CustomButtonProps){
    const estaBloqueado = inhabilitado || enProceso;
    return(
        /*Si anchoCompleto es verdadero, aplica el estilo, sino no. Mismo caso con estaBloqueado.*/
        <TouchableOpacity 
          style={[
            styles.button,
            styles[variant],
            styles[tamaño],
            anchoCompleto && styles.anchoCompleto,
            estaBloqueado && styles.inhabilitado,
          ]} 
          onPress={onPressButton}
          disabled={estaBloqueado}
        >
            
            {enProceso ? (
              <ActivityIndicator color={variant === 'principal' ? '#fff' : '#D97706'} />
            ) 
            /*Si enProceso es verdadero, borra el texto y dibuja el circulo de carga.*/
            : (
                //Si enProceso es falso, muestra el texto normal del botón con sus estilos correspondientes enviados al CustomButton (variant y tamaño).
              <Text style={[styles.buttonText, styles[`text_${variant}`], styles[`text_${tamaño}`]]}>
                {title}
              </Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    // Variantes
    principal: {
        backgroundColor: '#D97706',
        padding: 12,
    },
    alternativa: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#D97706',
        padding: 12,
    },
    destructiva: {
        backgroundColor: '#DC2626',
        padding: 12,
    },
    enlace: {
        backgroundColor: 'transparent',
        padding: 12,
    },
    //Tamaños
    pequeño: {
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    mediano: {
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    grande: {
        paddingVertical: 14,
        paddingHorizontal: 20,
    },
    anchoCompleto: {
        width: '100%',
    },
    inhabilitado: {
        opacity: 0.5,
    },
    // Textos
    buttonText: {
        fontWeight: '600',
    },
    text_principal: {
        color: 'white',
    },
    text_alternativa: {
        color: '#D97706',
    },
    text_destructiva: {
        color: 'white',
    },
    text_enlace: {
        color: '#D97706',
        textDecorationLine: 'underline',
    },
    text_pequeño: {
        fontSize: 12,
    },
    text_mediano: {
        fontSize: 14,
    },
    text_grande: {
        fontSize: 16,
    },
});