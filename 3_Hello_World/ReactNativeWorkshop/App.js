import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Image} from "react-native";
import Home from "./components/Home";
import Contact from "./components/Chapter06/Contact";
import AboutUsScreen from "./components/Chapter06/AboutUsScreen";
import FunScreen from "./components/Chapter06/FunScreen";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaProvider>
           <NavigationContainer>
               <Stack.Navigator screenOptions={{
                   headerTintColor: "#21094e",
                   headerStyle: {
                       backgroundColor: "#ec1d23"
                   },
                   // headerLeft: () => <Image
                   //     source="https://upload.wikimedia.org/wikipedia/commons/9/9d/LOGO_WAWER_biale_finansowanie.png"
                   //     style={{width: 20, height: 20} }
                   // />,
                   headerBackImage: () => <Image
                       source={"https://bi.im-g.pl/ldpic/participant/8673/logo/teamlogo_s1_26301.png"}
                       style={{width: 50, height: 50} }
                   />
               }}>
                   <Stack.Screen name="Home" component={Home}/>
                   <Stack.Screen name="Kontakt" component={Contact}
                   />
                   <Stack.Screen name="AboutUs" component={AboutUsScreen} />
                   <Stack.Screen name="Fun" component={FunScreen} />
               </Stack.Navigator>
           </NavigationContainer>
        </SafeAreaProvider>
    );
}