import { StyleSheet, Text, View } from 'react-native';

//Props tipadas del encabezado.
type EncabezadoProps = {
  titulo: string;
  subtitulo: string;
};

//Recibe los 
export default function Encabezado({ titulo, subtitulo }: EncabezadoProps) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 4,
  },
});