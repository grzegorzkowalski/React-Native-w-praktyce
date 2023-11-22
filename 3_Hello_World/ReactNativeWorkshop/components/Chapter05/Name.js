import React from 'react';

import {Text} from 'react-native';

const Name = (props) => {
    console.log(props);
    return (
        <Text>
            {props.name}
        </Text>
    );
};

export default Name;
