import React from 'react';

import {Text, View} from 'react-native';
import LottieView from "lottie-react-native";

const MyComponent = () => {
    return (
        <View>
            <LottieView source={require("../assets/logo.json")} autoPlay loop />
            <LottieView source={require("../assets/ok.json")} autoPlay loop />
        </View>
    );
};

export default MyComponent;
