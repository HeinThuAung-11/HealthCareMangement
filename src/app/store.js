import {configureStore} from '@reduxjs/toolkit'
import labTestReducer from "./../features/labTestSlice.js"

export const store = configureStore({
    reducer: {
        labTest: labTestReducer
    },
})