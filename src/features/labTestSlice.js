import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {Labtest} from "../app/url.js";
import {apiBackendSaveBooking} from "./labTestAPI.js";

let initialState = {
    labTests: [],
    labTestId: null
};

export const apiGetLabTests = createAsyncThunk(
    "labTest/fetchTest",
    async () => {
        const response = await axios.get(Labtest + "labtests/api");
        return response.data;
    }
)
export const apiSaveBooking = createAsyncThunk(
    "labTest/saveBooking",
    async (booking) => {
        // console.log("booking", booking);
        const response = await apiBackendSaveBooking(booking);
        console.log("response", response);
        return response.data;
    }
);

export const labTestSlice = createSlice({
    name: "labTest",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(apiGetLabTests.fulfilled, (state, action) => {
            state.labTests = action.payload;
        })
    },
    reducers: {
        SetLabTestId(state, action) {
            state.labTestId = action.payload
        }
    }
})

export const getLabTests = (state) => state.labTest.labTests
export const {SetLabTestId} = labTestSlice.actions
export const getLabTestId = (state) => state.labTest.labTestId
export default labTestSlice.reducer