import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Surname extends Component {
    render() {
        return (
            <Text>
                {this.props.surname}
            </Text>
        );
    }
}

export default Surname;
