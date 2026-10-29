import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: ()=>void;
    //Se puede colocar ? para hacer opcional el prop.
    variant?:"primary" | "secondary" | "tertiary"

}


export default function CustomButton({title, onPress, variant}: CustomButtonProps){

    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
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