import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';

export default function App() {

  const handleOnPressPrimaryButton = () => {
    console.log("Imprimiendo desde boton 1");
  }

  const handleOnPressSecondaryButton = () => {
    console.log("Imprimiendo desde boton 2");
  }
   const handleOnPressTertiaryButton = () => {
    console.log("Imprimiendo desde boton 3");
  }
  return (
    <View style={styles.container}>

      <Text>Open up App.tsx to start working on your app!</Text>
      <View style ={styles.buttonsContainer}>
          <CustomButton title = "My App Button" onPressButton={handleOnPressPrimaryButton} />
          <CustomButton title = "My App Button #2" onPressButton={handleOnPressSecondaryButton} variant='secondary'/>
          <CustomButton title = "My App Button #3" onPressButton={handleOnPressTertiaryButton} variant='tertiary' disabled />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#b6a8e4',
    alignItems: 'center',
  },
  buttonsContainer:{
    padding: 15,
    backgroundColor: 'pink'
  }
});