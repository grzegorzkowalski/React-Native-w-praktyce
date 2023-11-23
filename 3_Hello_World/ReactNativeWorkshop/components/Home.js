import React, {useState} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Name from "./Chapter05/Name";
import Surname from "./Chapter05/Surname";
import ShowDate from "./Chapter05/ShowDate";
import ColorBoxes from "./Chapter05/ColorBoxes";
import Map from "./Chapter05/Map";
import Layout from "./Chapter05/Layout";
import Pizza from "./Chapter05/Pizza";
import Invitation from "./Chapter05/Invitation";
import DataTimer from "./Chapter05/DataTimer";
import RandomNumberGenerator from "./Chapter05/RandomNumberGenerator";

const Home = () => {
    const [counter, setCounter] = useState(0);
    const inviteData = {
        day: "16.12.2023",
        hours: "18:00",
        place: "zamku imienia kota Wilhelma",
        dressCode: "wieczorowy"
    };
    const insets = useSafeAreaInsets();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingBottom: insets.bottom,
            paddingRight: insets.right,
        },
    });

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Name name="Grzegorz" age={37} foot={46} />
            <Surname surname="Kowalski"></Surname>
            <ShowDate />
            <ColorBoxes />
            <Map />
            <Layout />
            <Pizza />
            <Invitation inviteData={inviteData} />
            <DataTimer />
            <Text>{counter}</Text>
            <RandomNumberGenerator updateApp={setCounter} />
            <StatusBar style="auto" />
        </ScrollView>
    );
};
export default Home;
