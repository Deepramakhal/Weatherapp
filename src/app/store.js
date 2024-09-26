import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Features/weatherSlice";

const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
});
export default store;