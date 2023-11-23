import React, {useState, useEffect} from 'react';

import {Text} from 'react-native';

const MyComponent = () => {
    const [dataTime, setDataTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDataTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <Text>
            {dataTime}
        </Text>
    );
};

export default MyComponent;
