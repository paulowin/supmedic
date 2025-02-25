import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './app/screens/Login';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName='Login'>
  <Stack.Screen name='Login' component={Login} options={{headerShown : false}}/> 
  <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
    </NavigationContainer>
  );
};
