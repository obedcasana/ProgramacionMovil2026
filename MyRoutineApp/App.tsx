import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, SafeAreaView } from 'react-native';
import { MENU_DEL_DIA, Producto } from './types/menu';
import TarjetaProducto from './components/TarjetaProducto';
import EncabezadoSeccion from './components/EncabezadoSeccion';
import CustomButton from './components/CustomButton';

export default function App() {
  //Funciones que manejan acciones
  //Alert.alert("Título de la ventana" (primer parámetro), `el mensaje o cuerpo de la alerta` (segundo parámetro))
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

  // Filtramos los favoritos en el menú del día con la función filter.
  const productosFavoritos = MENU_DEL_DIA.filter(
    (p) => p.nombre === 'Café americano' || p.nombre === 'Galleta de avena'
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        //Crea el encabezado con el título del menú del día, le pasa la cantidad de productos y le pasa la función manejarVerTodo para que aparezca el botón. 
        <EncabezadoSeccion 
          titulo="Menú del día" 
          cantidad={MENU_DEL_DIA.length} 
          onVerTodo={manejarVerTodo} 
        />
        //Recorre el arreglo del menú y crea automáticamente una tarjeta para cada uno de los productos con su id, el objeto y la función seleccionar. 
        {MENU_DEL_DIA.map((producto) => (
          <TarjetaProducto 
            key={producto.id} 
            producto={producto} 
            onSeleccionar={manejarSeleccionMenu} 
          />
        ))}

        //Creamos el encabezado de los favoritos con la cantidad de productos favoritos encontrados previamente.
        <EncabezadoSeccion 
          titulo="Sus favoritos" 
          cantidad={productosFavoritos.length} 
        />

        //Recorre productosFavoritos y le entrega el producto encontrado en cada vuelta a TarjetaProducto para que cree una tarjeta para cada producto favorito.
        {productosFavoritos.map((producto) => (
          <TarjetaProducto 
            key={producto.id} 
            producto={producto} 
            onSeleccionar={manejarPedidoFavorito} 
          />
        ))}

        //Escribimos un encabezado sin contador 
        <EncabezadoSeccion 
          titulo="Su pedido" 
        />

        //Creamos el botón para confirmar pedido
        <View style={styles.seccionPedido}>
          <CustomButton 
            title="Confirmar pedido" 
            variant="principal" 
            tamaño="grande" 
            onPressButton={manejarConfirmarPedido} 
          />
          //Creamos el botón para vaciar pedido
          <CustomButton 
            title="Vaciar pedido" 
            variant="destructiva" 
            tamaño="grande" 
            onPressButton={manejarVaciarPedido} 
          />

          //Creamos el botón para vaciar pedido
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