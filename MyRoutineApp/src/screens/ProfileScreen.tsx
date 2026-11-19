import { View, Text, StyleSheet } from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla del Perfil</Text>
      <Text style={styles.subtitle}>Bienvenido a la pantalla del perfil.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5F7FA' },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#1E293B', 
    marginBottom: 8 },
  subtitle: { 
    fontSize: 16, 
    color: '#64748B' },
});