import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image, Text } from 'react-native';
import { useState } from 'react';
import Home from './screens/HomeScreen.js';
import ImageScreen from './screens/ImageScreen.js'
import Pexel from './assets/pexelsLogo.jpg'

const Stack = createNativeStackNavigator();

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerLeft: () => <Image style={{ width: 50, height: 50, marginRight: 10 }} source={Pexel} />,
            headerRight: () => <Text
              style={{ color: "#fff", fontSize: 18 }}
              onPress={() => setOpen(!open)}
            >{
                open ?
                  "Close"
                  :
                  "Search"
              }</Text>,
            title: "Pexels App",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: "#0D0D0D"
            }
          }}
        >
          {(props) => <Home {...props} open={open} />}
        </Stack.Screen>
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{
            title: "Pexels App",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: "#0D0D0D"
            }
          }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}