import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";


export default function Login (){
        //hooks de react: useState, useEffect, useMemo, etc. 
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleOnPressPrimaryButton = () => {
            console.log("Imprimiendo desde boton 1");
        }

        const handleOnPressSecondaryButton = () => {
            console.log("Imprimiendo desde boton 2");
        }
        const handleOnPressTertiaryButton = () => {
            console.log("Imprimiendo desde boton 3");
        }
    return(
 <View style={styles.container}>

      <Text>Open up App.tsx to start working on your app!</Text>
      <CustomInput  
        onChangeText={setEmail}
        value={email}
        placeholder='Correo'
        type='email'
        />
      <CustomInput  
        onChangeText={setPassword}
        value={password}
        placeholder='Contraseña'
        type='password'
        />
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
    alignItems: 'center',
  },
  buttonsContainer:{
    padding: 15,
  }
});