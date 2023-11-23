import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/Home";
import Contact from "./components/Chapter06/Contact";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaProvider>
           <NavigationContainer>
               <Stack.Navigator>
                   <Stack.Screen name="Home" component={Home} />
                   <Stack.Screen name="Kontakt" component={Contact} />
               </Stack.Navigator>
           </NavigationContainer>
        </SafeAreaProvider>
    );
}