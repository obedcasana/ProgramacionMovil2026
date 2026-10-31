import { StyleSheet, Text, View } from 'react-native';
import Etiqueta from './Etiqueta'; // Importamos el componente Etiqueta creado anteriormente

type TarjetaEjercicioProps = {
  nombre: string;         
  series: number;         
  repeticiones: number;   
  grupoMuscular: string;  
  destacado?: boolean;    
};

export default function TarjetaEjercicio({nombre,series,repeticiones,grupoMuscular,destacado = false}: TarjetaEjercicioProps) {
  // Asignamos un color de fondo dinámico para la etiqueta según si está destacada o no
  const colorEtiqueta = destacado ? '#D97706' : '#2563EB';

  return (
    // Aplica el estilo tarjeta y sólo si destacado es verdadero, aplica estilo destacado.
    <View style={[estilos.tarjeta, destacado && estilos.tarjetaDestacada]}>
      <View style={estilos.filaSuperior}>
        <Text style={[estilos.nombreEjercicio, destacado && estilos.textoDestacado]}>
          {nombre}
        </Text>
        <Etiqueta texto={grupoMuscular} colorFondo={colorEtiqueta} />
      </View>

      <Text style={estilos.detalleSeries}>
        {series} series × {repeticiones} repeticiones
      </Text>

    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    marginBottom: 12,
  },
  tarjetaDestacada: {
    backgroundColor: '#FEF3C7', 
    borderColor: '#F59E0B',     
    borderWidth: 1.5,
  },
  filaSuperior: {
    flexDirection: 'row',      
    justifyContent: 'space-between', 
    alignItems: 'center',       
    marginBottom: 8,
  },
  nombreEjercicio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,                    
    marginRight: 8,
  },
  textoDestacado: {
    color: '#92400E',           
  },
  detalleSeries: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
});