import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Props tipadas
type EtiquetaProps = {
  texto: string;      
  colorFondo: string; 
};

export default function Etiqueta({ texto, colorFondo }: EtiquetaProps) {
  return (
    <View style={[estilos.pildora, { backgroundColor: colorFondo }]}>
      <Text style={estilos.textoEtiqueta}>{texto}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  pildora: {
    alignSelf: 'flex-start', 
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,       
  },
  textoEtiqueta: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',       
    textAlign: 'center',
    textTransform: 'uppercase', 
  },
});