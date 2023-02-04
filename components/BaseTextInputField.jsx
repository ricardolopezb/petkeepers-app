import {Text, TextInput, View} from "react-native";

export const BaseTextInputField = ({label, placeholder, setterFunction}) => {
    return(
        <View>
            <Text>{label}</Text>
            <TextInput placeholder={placeholder} onChangeText={(val) => setterFunction(val)}/>
        </View>
    )
}