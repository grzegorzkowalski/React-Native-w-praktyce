import React from 'react';

import {Text, View, Button} from 'react-native';

const FunScreen = ({navigation}) => {
    return (
        <View>
            <Text>
                To jest testowy komponent z AboutUs.
            </Text>
            <Button title="Wróć do Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
};

export default FunScreen;
