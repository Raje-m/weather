import { configureStore } from "@reduxjs/toolkit";
import weatherReaducer from '../feature/weatherSlice'
export const store= configureStore( {
    reducer: {
        weather:weatherReaducer
    },
})