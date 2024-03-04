import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {Labtest} from "../app/url.js";

let initialState = {
    labTests: []
};

export const apiGetLabTests = createAsyncThunk(
    "labTest/fetchTest",
    async () => {
        const response = await axios.get(Labtest + "labtests/");
        return response.data;
    }
)
export const labTestSlice = createSlice({
    name: "labTest",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(apiGetLabTests.fulfilled, (state, action) => {
            console.log(
                "action extra reducer",
                action.payload,
                state.labTests
            );
            state.labTests = action.payload;
        })
    }
})

export const getLabTests = (state) => state.labTest.labTests

export default labTestSlice.reducer