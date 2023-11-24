import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {incrementValue, addToTab} from "./testSlice";
const TestComponent = () => {
    const globalState = useSelector(store => store);
    console.log(globalState);
    const dispatch = useDispatch();

    return (
        <View style={{marginTop: 30}}>
            <Button title="test dispatch" onPress={() => dispatch(incrementValue(5))} />
            <Button title="add to tab dispatch" onPress={() => dispatch(addToTab("pizza"))} />
            <Text>
                {globalState.test.value}
                {globalState.test.testTab}
            </Text>
        </View>

    );
};

export default TestComponent;
