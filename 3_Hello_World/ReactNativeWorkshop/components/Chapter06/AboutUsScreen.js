import React from 'react';

import {Text, View, Button} from 'react-native';

const AboutUsScreen = ({navigation}) => {
    return (
        <View>
            <Text>
                To jest testowy komponent z AboutUs.
            </Text>
            <Button title="Idź od Fun" onPress={() => navigation.navigate("Fun")} />
        </View>
    );
};

export default AboutUsScreen;
