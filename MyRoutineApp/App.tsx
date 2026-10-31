import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Encabezado from './components/Encabezado';
import CajaEstadistica from './components/CajaEstadistica';
import TarjetaEjercicio from './components/TarjetaEjercicio';

export default function App() {
  return (
    <SafeAreaView style={styles.areaSegura}>
      {/* ScrollView permite deslizar la pantalla si el contenido es más alto que el dispositivo */}
      <ScrollView contentContainerStyle={styles.contenedorScroll} showsVerticalScrollIndicator={false}>
        
        <Encabezado 
          titulo="Mi rutina de hoy" 
          subtitulo="Lunes · Tren superior" 
        />

        <View style={styles.filaEstadisticas}>
          <CajaEstadistica valor="4" etiqueta="ejercicios" />
          <CajaEstadistica valor="45" etiqueta="minutos" />
          <CajaEstadistica valor="320" etiqueta="kcal" />
        </View>

        <Text style={styles.tituloSeccion}>Ejercicios</Text>

        <TarjetaEjercicio 
          nombre="Press de banca" 
          series={4} 
          repeticiones={10} 
          grupoMuscular="Pecho" 
        />

        <TarjetaEjercicio 
          series={4}  
          repeticiones={12} 
          grupoMuscular="Espalda" 
          destacado={true}
        />

        <TarjetaEjercicio 
          nombre="Press militar con mancuernas" 
          series={3} 
          repeticiones={10} 
          grupoMuscular="Hombros" 
        />

        <TarjetaEjercicio 
          nombre="Curl de bíceps con barra" 
          series={3} 
          repeticiones={12} 
          grupoMuscular="Bíceps" 
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: '#F3F4F6', 
  },
  contenedorScroll: {
    padding: 20, 
  },
  filaEstadisticas: {
    flexDirection: 'row', 
    gap: 12,              
    marginBottom: 24,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
});