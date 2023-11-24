import {View, Text, StyleSheet, Image} from "react-native";
import {useState, useEffect} from "react";
import {getWeather, getImage} from "../api";
import DisplayWeather from "./DisplayWeather";

const CityWeather = ({route}) => {
    const [weather, setWeather] = useState(false);
    const [image, setImage] = useState("");
    const {city} = route.params;

    useEffect(() => {
        getWeather(setWeather, city);
    }, []);

    useEffect(() => {
        if (weather) {
            getImage(setImage, city);
        }
    }, [weather]);

    return (
        <View style={styles.container}>
            <Text>To jest pogoda dla miasta: {city}</Text>
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
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#FFF"
    }
});

export default CityWeather;