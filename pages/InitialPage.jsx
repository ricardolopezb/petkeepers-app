import {Button, Text, View} from "react-native";

export const InitialPage = ({ navigation }) => {

    return(
        <View>
            <Text>PetKeepers</Text>
            <Button title={"Login"} onPress={() => navigation.navigate("/login", {})}/>
            <Button title={"Register"}/>
        </View>
    )
}
