import React, { Component } from 'react';
import { View, Text } from 'react-native-web';

export default class Surname extends Component {
  render() {
    const {text} = this.props;
    return (
      <View>
        <Text>{text}</Text>
      </View>
    )
  }
}
