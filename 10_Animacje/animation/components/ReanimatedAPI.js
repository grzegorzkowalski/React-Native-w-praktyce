import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, withDelay, withTiming, Easing, ReduceMotion } from 'react-native-reanimated';

export default function ReanimatedAPI() {
    const width = useSharedValue(100);

    const handlePress = () => {
        //width.value = withSpring(width.value + 50);
        width.value = withDelay(5000, withTiming(300));
    };

    return (
        <View style={styles.container}>
            <Animated.View style={{ ...styles.box, width }} />
            <Button onPress={handlePress} title="Click me" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    box: {
        padding: 20,
        backgroundColor: 'powderblue',
        height: 50,
        width: 5
    },
});