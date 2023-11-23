import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import goOutdoor from "../js/goOutdoor";

const PatternMatching = () => {
    const [name, setName] = useState("");
    const [month, setMonth] = useState("");
    const [text, setText] = useState(<></>);

    const activity = () => {
        console.log("przed if")
        if (!!name && !!month) {
            console.log("if")
            setText(<Text>{goOutdoor(name, month)}</Text>)
        }
    }

    return (
        <View>
            {text}
            <Text>Imię</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text>Miesiąc</Text>
            <TextInput
                style={styles.input}
                value={month}
                onChangeText={setMonth}
            />
            <Button title="wyślij" onPress={() => activity()} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: "black",
        borderWidth: 2,
        width: 100
    }
})

export default PatternMatching;
