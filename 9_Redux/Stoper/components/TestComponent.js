import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {sendTest} from "../redux/actions";

const TestComponent = () => {
    const globalState = useSelector(store => store);
    console.log(globalState);
    const dispatch = useDispatch();

    return (
        <View style={{marginTop: 30}}>
            <Button title="test dispatch" onPress={() => dispatch(sendTest(5))} />
            <Text>
                {globalState.value}
            </Text>
        </View>

    );
};

export default TestComponent;
