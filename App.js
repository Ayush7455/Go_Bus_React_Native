import { StyleSheet, Text, View ,StatusBar, Image} from 'react-native';
import {NativeBaseProvider} from "native-base"
import HomeScreen from './screens/HomeScreen';
import DriverLogin from './screens/DriverLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminLogin from './screens/AdminLogin';
import Admin from './screens/Admin';
import AddBus from './screens/AddBus';
import DriverLocation from './screens/DriverLocation';
import TrackBus from './screens/TrackBus';
import ForgetAdmin from './screens/ForgetAdmin';

export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NativeBaseProvider>
      <StatusBar/>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DriverLogin" component={DriverLogin} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="AddBus" component={AddBus} />
        <Stack.Screen name="DriverLocation" component={DriverLocation} />
        <Stack.Screen name="TrackBus" component={TrackBus} />
        <Stack.Screen name="ForgetAdmin" component={ForgetAdmin} />
      </Stack.Navigator>
  </NavigationContainer>
    </NativeBaseProvider>
  );
}
