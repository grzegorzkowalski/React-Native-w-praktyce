import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const DisplayWeather = ({weather}) => {
    return (
        <View>
            <Text style={styles.text}>Temperatura: {weather.main.temp} C</Text>
            <Text style={styles.text}>Ciśnienie: {weather.main.pressure}</Text>
            <Text style={styles.text}>Opis: {weather.weather[0].main}, {weather.weather[0].description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#FFF"
    }
});


export default DisplayWeather;
