import {Button, Text, TextInput, View} from "react-native";
import {BaseTextInputField} from "../components/BaseTextInputField";
import {useState} from "react";
import axios from "axios";
import {SERVER_URL} from '@env';

export const LoginPage = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState(false)

    const sendData = () => {
        axios.post(SERVER_URL + '/auth/login', {
            email: email,
            password: password

        }).then(function (response) {
            setLoggedIn(true)

        }).catch(function (error) {
            console.log(error.response.data)
            setError(true)
        });
    }

    return(
        <View>
            <Text>LOGIN</Text>

            <View>
                <BaseTextInputField label={"Email"} placeholder={"Enter your email..."} setterFunction={setEmail}/>
                <BaseTextInputField label={"Password"} placeholder={"Enter your password..."} setterFunction={setPassword}/>
                <Button title={"Login"} onPress={sendData}/>
            </View>

            {loggedIn && <Text>LOGGED IN!</Text>}
            {error && <Text>ERROR!</Text>}
        </View>
    )
}