import { StyleSheet, Text, View } from 'react-native';

//Props tipadas
type CajaEstadisticaProps = {
  valor: string;   
  etiqueta: string; 
};

export default function CajaEstadistica({ valor, etiqueta }: CajaEstadisticaProps) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.valor}>{valor}</Text>
      <Text style={estilos.etiqueta}>{etiqueta}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1, 
    backgroundColor: '#F9FAFB',
    borderRadius: 12, 
    borderWidth: 1,  
    borderColor: '#E5E7EB', 
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',    
    justifyContent: 'center', 
  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
  },
  etiqueta: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
    textTransform: 'uppercase', 
  },
});