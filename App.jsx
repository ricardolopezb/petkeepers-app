import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import {InitialPage, LoginPage} from "./pages";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"/initial"} component={InitialPage}/>
        <Stack.Screen name={"/login"} component={LoginPage}/>
      </Stack.Navigator>
    </NavigationContainer>

  );

  // options={{headerShown: false} para el <Stack.Screen>
}
