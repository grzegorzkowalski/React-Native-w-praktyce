import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isCounting: false,
    value: 0,
    testTab: []
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        incrementValue: (state, action) => {
            state.value += action.payload;
        },
        addToTab: (state, action) => {
            state.testTab.push(action.payload);
        }
    }
})

export const {
    incrementValue,
    addToTab
} = testSlice.actions;

export default testSlice.reducer;