import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "redux-logger";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
