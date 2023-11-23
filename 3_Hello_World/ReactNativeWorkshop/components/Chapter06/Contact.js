import React from 'react';

import {Button, Text, View} from 'react-native';

const Contact = ({route, navigation}) => {
    return (
        <View>
            <Text>
                To jest testowy komponent z kontaktem.
            </Text>
            <Button title="Idź do AboutUs" onPress={() => navigation.navigate("AboutUs")} />
        </View>


    );
};

export default Contact;
