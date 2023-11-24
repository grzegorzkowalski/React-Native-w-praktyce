import {TEST} from "../actions";

const initialState = {
    "isCounting": false,
    "value": 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                value: state.value + action.payload
            };
        default:
            return state;
    }
}

export default reducer;