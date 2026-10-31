import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type EncabezadoSeccionProps = {
    titulo: string;
    cantidad?: number;
    onVerTodo?: () => void;
};

export default function EncabezadoSeccion({ titulo, cantidad, onVerTodo }: EncabezadoSeccionProps) {
    return (
        <View style={styles.container}>
            <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>{titulo}</Text>
                {/*Evalúa si la variable cantidad tiene un valor asignado, si lo tiene, dibuja un componente de texto con el número entre parentesis.*/}
                {cantidad !== undefined && (
                    <Text style={styles.cantidad}>({cantidad})</Text>
                )}
            </View>
            {/*Evalúa si le enviaron una función onVerTodo, si la tiene, dibuja el botón interactivo, sino no lo muestra.*/}
            {onVerTodo && (
                <TouchableOpacity onPress={onVerTodo}>
                    <Text style={styles.enlaceVerTodo}>Ver todo</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    tituloContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1F2937',
    },
    cantidad: {
        fontSize: 18,
        fontWeight: '600',
        color: '#6B7280',
        marginLeft: 6,
    },
    enlaceVerTodo: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2563EB',
    },
});