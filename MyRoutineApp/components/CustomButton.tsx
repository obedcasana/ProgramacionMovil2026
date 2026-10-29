import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CustomButtonProps = {
    title: string;
    onPressButton: ()=>void;
    //Se puede colocar ? para hacer opcional los diferentes props.
    variant?:"primary" | "secondary" | "tertiary"

}


export default function CustomButton({title, onPressButton, variant}: CustomButtonProps){

    return(
        //En la parte onPress es parte del TouchableOpacity y recibe el médoto enviado desde App por medio de los props.
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'navy',
        padding: 12,
        marginTop: 10,
        width: 180,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontWeight: '500'
    }
})