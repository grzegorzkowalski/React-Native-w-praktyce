import React, {useRef} from 'react';
import {
    Animated,
    Text,
    View,
    StyleSheet,
    Button,
    SafeAreaView, Easing,
} from 'react-native';

const AnimaterAPIProgressbar = () => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 300,
            duration: 5000,
            useNativeDriver: false,
            //easing: Easing.linear
        }).start();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        // transform: [
                        //   {
                        //     scaleX: fadeAnim
                        //   },
                        // ],
                        width: fadeAnim
                    },
                ]}>
            </Animated.View>
            <View style={styles.buttonRow}>
                <Button title="Fade In View" onPress={fadeIn} />
            </View>
        </SafeAreaView>
    );
};

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

export default AnimaterAPIProgressbar;