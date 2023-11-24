import * as React from 'react';
import {MD3Colors, ProgressBar,} from 'react-native-paper';
import {Button, SafeAreaView, StyleSheet, View} from "react-native";
import {useState} from "react";

const RNPaper = () => {
    const [activeProgress, setActiveProgress] = useState(0);

    const intervalColor =  () => {
        const intervalId = setInterval(() => {
            if (activeProgress < 1) {
                setActiveProgress(prev => prev + 0.1)
            }
            else {
                clearInterval(intervalId);
            }
        }, 500)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ProgressBar progress={activeProgress} color='powderblue' style={{ height: 50, width: 300 }} />
            <View style={styles.buttonRow}>
                <Button title="Load progressbar" onPress={() => intervalColor()} />
            </View>
        </SafeAreaView>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
        height: 50,
        width: 5
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
    },
});

export default RNPaper;