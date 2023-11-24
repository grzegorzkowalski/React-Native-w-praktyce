import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Test from "./components/Test";
import Home from "./components/Home";
import CityWeather from "./components/CityWeather";
import FindWeather from "./components/FindWeather";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/*<Stack.Screen name="Test" component={Test} />*/}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CityWeather" component={CityWeather} />
            <Stack.Screen name="FindWeather" component={FindWeather} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});