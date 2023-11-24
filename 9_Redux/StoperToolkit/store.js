import {configureStore} from "@reduxjs/toolkit";
import testSlice from "./features/Test/testSlice";
import {logger} from "redux-logger/src";

export const store = configureStore({
    reducer: {
        test: testSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});