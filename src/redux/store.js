import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './ColorSlice'

export const store = configureStore({
    reducer: {
        colorReducer: colorReducer
    }
})