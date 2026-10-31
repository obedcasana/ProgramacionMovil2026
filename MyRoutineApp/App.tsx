import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, SafeAreaView } from 'react-native';
import { MENU_DEL_DIA, Producto } from './types/menu';
import TarjetaProducto from './components/TarjetaProducto';
import EncabezadoSeccion from './components/EncabezadoSeccion';
import CustomButton from './components/CustomButton';
import { formatearProducto } from './utils/formatoPrecio';

export default function App() {
  //Funciones que manejan acciones
  const manejarSeleccionMenu = (producto: Producto) => {
    Alert.alert("Cafetería", `${producto.nombre} agregado al pedido`);
  };

  const manejarPedidoFavorito = (producto: Producto) => {
    Alert.alert("Pedido rápido", `Pedido rápido: ${producto.nombre}`);
  };

  const manejarVerTodo = () => {
    Alert.alert("Menú", "Mostrando el menú completo");
  };

  const manejarConfirmarPedido = () => {
    Alert.alert("Pedido", "Pedido confirmado");
  };

  const manejarVaciarPedido = () => {
    Alert.alert("Pedido", "Se vació el pedido");
  };

  const menuFormateado = MENU_DEL_DIA.map(formatearProducto);

  const productosFavoritos = menuFormateado.filter(
    (p) => p.nombre === 'Café americano' || p.nombre === 'Galleta de avena'
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <EncabezadoSeccion 
          titulo="Menú del día" 
          cantidad={menuFormateado.length} 
          onVerTodo={manejarVerTodo} 
        />

        {menuFormateado.map((producto) => (
          <TarjetaProducto 
            key={producto.id} 
            producto={producto} 
            onSeleccionar={manejarSeleccionMenu} 
          />
        ))}

        <EncabezadoSeccion 
          titulo="Sus favoritos" 
          cantidad={productosFavoritos.length} 
        />

        {productosFavoritos.map((producto) => (
          <TarjetaProducto 
            key={producto.id} 
            producto={producto} 
            onSeleccionar={manejarPedidoFavorito} 
          />
        ))}

        <EncabezadoSeccion 
          titulo="Su pedido" 
        />

        <View style={styles.seccionPedido}>
          <CustomButton 
            title="Confirmar pedido" 
            variant="principal" 
            tamaño="grande" 
            onPressButton={manejarConfirmarPedido} 
          />
          <CustomButton 
            title="Vaciar pedido" 
            variant="destructiva" 
            tamaño="grande" 
            onPressButton={manejarVaciarPedido} 
          />
          <CustomButton 
            title="Enviando..." 
            variant="principal" 
            tamaño="grande" 
            enProceso={true} 
            onPressButton={() => {}} 
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  container: {
    paddingVertical: 16,
    paddingBottom: 32,
  },
  seccionPedido: {
    paddingHorizontal: 16,
    gap: 12,
    marginTop: 8,
  },
});