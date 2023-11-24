import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {getWeather, getImage} from "../api";
import DisplayWeather from "./DisplayWeather";

const FindWeather = () => {
    const [weather, setWeather] = useState(false);
    const [image, setImage] = useState("");
    const [city, setCity] = useState("");

    const fetchWeather = () => {
        getWeather(setWeather, city);
    }

    useEffect(() => {
        if (weather) {
            getImage(setImage, city);
        }
    }, [weather]);

    return (
        <View style={styles.container}>
            <Text>Wpisz samodzielnie miasto</Text>
            <TextInput
                value={city}
                onChangeText={setCity}
            />
            <Button title="Wyświetl pogodę" onPress={fetchWeather} />
            <View>
                { image ? <Image source={image} style={{width: 300, height: 400}} /> : <></> }
            </View>
            {
                weather && <DisplayWeather weather={weather} />
            }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default FindWeather;
