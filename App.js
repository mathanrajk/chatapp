import React from 'react';
import Chatscreen from './screens/chatscreen';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Loginscreen from './screens/loginscreen';
import Signupscreen from './screens/signupscreen';
const Stack = createNativeStackNavigator();

export default function App() {
 return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Login">
  <Stack.Screen name='Chat' component={Chatscreen} />
  <Stack.Screen name='Login' component={Loginscreen} options={{headerShown:false}} />
  <Stack.Screen name='Signup' component={Signupscreen}  options={{headerShown:false}}/>

  </Stack.Navigator>

</NavigationContainer>
  )
}

