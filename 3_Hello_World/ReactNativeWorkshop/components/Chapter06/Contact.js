import React from 'react';

import {Button, Text, View} from 'react-native';

const Contact = ({route, navigation}) => {
    return (
        <View>
            <Text>
                To jest testowy komponent z kontaktem.
            </Text>
            <Button title="Wróć do Home" onPress={() => navigation.navigate("Home")} />
        </View>


    );
};

export default Contact;
