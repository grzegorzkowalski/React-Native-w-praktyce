import React from 'react';
import {Button, FlatList, Text, View, StyleSheet} from 'react-native';

const Home = () => {
    const cities = [
        {
            id: 1,
            name: "Warsaw"
        },
        {
            id: 2,
            name: "London"
        },
        {
            id: 3,
            name: "Pekin"
        },
        {
            id: 4,
            name: "Chicago"
        },
        {
            id: 5,
            name: "Cairo"
        },
        {
            id: 6,
            name: "Sydney"
        }
    ]
    const renderItem = (name) => {
        return <Button
            title={name}
            onPress={() => {navigation.navigate("CityWeather",  {city: name})}}
        />
    }
    const renderItems = ({item}) => {
        const name = item.name;
        console.log(name);
        return (renderItem(name))}

    return (
        <View style={styles.container}>
            <Text>Wybierz miasto</Text>
            <FlatList
                data={cities}
                keyExtractor={item => item.id}
                renderItem={renderItems}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF"
    }
})
export default Home;
