import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Producto } from '../types/menu'; // Ajusta la ruta si es necesario
import CustomButton from './CustomButton';

type TarjetaProductoProps = {
    producto: Producto;
    onSeleccionar: (producto: Producto) => void;
};

export default function TarjetaProducto({ producto, onSeleccionar }: TarjetaProductoProps) {
    return (
        <View style={styles.card}>
            <View style={styles.infoContainer}>
                <Text style={styles.nombre}>{producto.nombre}</Text>
                <Text style={styles.descripcion}>{producto.observaciones}</Text>
                <Text style={styles.precio}>L. {producto.precio.toFixed(2)}</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <CustomButton 
                    title="Ver Detalle" 
                    variant="alternativa"
                    tamaño="pequeño"
                    onPressButton={() => onSeleccionar(producto)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1, 
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    infoContainer: {
        marginBottom: 12,
    },
    nombre: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 4,
    },
    descripcion: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 8,
    },
    precio: {
        fontSize: 16,
        fontWeight: '600',
        color: '#D97706',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});