import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Producto } from '../types/menu';
import CustomButton from './CustomButton';

type TarjetaProductoProps = {
    producto: Producto;
    onSeleccionar: (producto: Producto) => void;
};

export default function TarjetaProducto({ producto, onSeleccionar }: TarjetaProductoProps) {
    // Validamos si el producto tiene descuento para mostrar el formato especial
    const tieneDescuento = Boolean(producto.descuento && producto.descuento > 0);

    return (
        <View style={styles.card}>
            <View style={styles.infoContainer}>
                <Text style={styles.nombre}>{producto.nombre}</Text>
                <Text style={styles.descripcion}>{producto.observaciones}</Text>
                
                {/*Validamos si el producto tiene descuento para hacer cálculos*/}
                {tieneDescuento ? (
                    <View style={styles.precioContainer}>
                        <Text style={styles.precioTachado}>
                            {producto.precioOriginalFormateado}
                        </Text>
                        <Text style={styles.precioFinal}>
                            {producto.precioFinalFormateado}
                        </Text>
                    </View>
                ) : (
                    <Text style={styles.precio}>
                        {producto.precioOriginalFormateado || `L. ${producto.precio.toFixed(2)}`}
                    </Text>
                )}
            </View>
            
            <View style={styles.buttonContainer}>
                <CustomButton 
                    title="Agregar" 
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
    precioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    precioTachado: {
        fontSize: 14,
        color: '#9CA3AF',
        textDecorationLine: 'line-through',
    },
    precioFinal: {
        fontSize: 16,
        fontWeight: '700',
        color: '#DC2626',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});