import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Home";
import FindWeather from "./FindWeather";
import CityWeather from "./CityWeather";
import Test from "./Test";

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Test" component={Test} />
                    {/*<Stack.Screen name="Home" component={Home} />*/}
                    {/*<Stack.Screen name="CityWeather" component={CityWeather} />*/}
                    {/*<Stack.Screen name="FindWeather" component={FindWeather} />*/}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )};

export default Navigation;
