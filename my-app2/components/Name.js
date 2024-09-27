import React from 'react';
import { View, Text } from 'react-native';

const Name = ({name, age}) => {
  return (
    <View>
        <Text>{name}</Text>
        <Text>{age}</Text>
    </View>
  )
};

export default Name;

