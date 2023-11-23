import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Home";
import Camera from "./Camera";
import Location from "./Location";
import Vibration from "./Vibrations";

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Camera" component={Camera} />
                    <Stack.Screen name="Location" component={Location} />
                    <Stack.Screen name="Vibration" component={Vibration} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )};

export default Navigation;
