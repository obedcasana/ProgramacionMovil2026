import { View, Text, StyleSheet } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Home</Text>
      <Text style={styles.subtitle}>Bienvenido al panel principal.</Text>
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