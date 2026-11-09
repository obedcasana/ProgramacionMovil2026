import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View, TextInput,StyleSheet, KeyboardTypeOptions, TouchableOpacity } from "react-native";

type Props = {
  onChangeText: (text: string) => void;
  type?: "default" | "email"  | "password" | "number";
  value: string;
  placeholder: string;
};

export default function CustomInput({onChangeText, type= "default", value, placeholder}: Props) {
    const keyboardType: KeyboardTypeOptions = 
        type === "email" ? "email-address" :
            type === "number" ? "numeric" :
                "default";

    return (
    <View 
        style={styles.inputContainer}
    >
      <MaterialIcons name={"password"} size={22} color={'black'}/>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry
        />
        <TouchableOpacity>
            <Ionicons name={"eye"} size={22} color={'black'} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 14,
        paddingRight: 14,
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8
    },
    input:{
        fontSize:15,
        paddingVertical: 5,
    }
})