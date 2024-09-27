import React from 'react'
import { View, StyleSheet } from 'react-native';
import Square from './Square';

const Boxes = () => {
    const colors = ['red', 'green', 'blue'];
  return (
    <View>
        {
            colors.map((color, index) => (
                <Square key={index} styles={[styles.container, styles[color]]} />
            ))
        }
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        margin: 10,
    },
    red: {
        backgroundColor: 'red',
    },
    green: {
        backgroundColor: 'green',
    },
    blue: {
        backgroundColor: 'blue',
    },
});

export default Boxes;
