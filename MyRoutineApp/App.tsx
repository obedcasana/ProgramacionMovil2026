import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';

export default function App() {
  //Métodos que se enviarán eventualmente en el return de esta función según se requiera. 
  const handleOnPressPrimaryButton = () =>{
    console.log("Imprimiendo desde boton 1")
  }
  //Métodos que se enviarán eventualmente en el return de esta función según se requiera. 
  const handleOnPressSecondaryButton = () =>{
    console.log("Imprimiendo desde boton 2")
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      //Se asigna el tipo de estilo buttonsContainer definida previamente en la StyleSheet
      <View style ={styles.buttonsContainer}>
          <CustomButton title = "My App Button #1" onPressButton={handleOnPressPrimaryButton}/>
          <CustomButton title = "My App Button #2" onPressButton={handleOnPressSecondaryButton}/>
      </View>
    </View>
  );
}
//Se crean diferentes tipos de estilo en la hoja de estilo.
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonsContainer:{
    padding: 15,
    backgroundColor: 'pink'
  }
});