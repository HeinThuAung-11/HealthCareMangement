import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {Labtest} from "../app/url.js";
import {apiBackendSaveBooking} from "./labTestAPI.js";

let initialState = {
    labTests: [],
    labTestId: null,
    healthConcerns: [],
    healthConcernsId: [],
    doctors: [],
    department: null
};

export const apiGetLabTests = createAsyncThunk(
    "labTest/fetchTest",
    async () => {
        const response = await axios.get(Labtest + "labtests/api");
        console.log('fetchTest', response)
        return response.data;
    }
)
export const apiGetDocs = createAsyncThunk(
    "labTest/fetchDocs",
    async () => {
        const response = await axios.get(Labtest + "doctors/api");
        console.log('fetchTest', response)
        return response.data;
    }
)
export const apiGetHealthConcern = createAsyncThunk(
    "healthConcern/fetchHealthConcern",
    async () => {
        const response = await axios.get(Labtest + "healthconcerns/api")
        // console.log("response", response);
        return response.data
    }
)
export const apiGetHealthConcernById = createAsyncThunk(
    "healthConcern/fetchHealthConcernById",
    async (id) => {
        const response = await axios.get(Labtest + "healthconcerns/api/" + id)
        // console.log("response", response);
        return response.data
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
        builder.addCase(apiGetHealthConcern.fulfilled, (state, action) => {
            state.healthConcerns = action.payload
        })
        builder.addCase(apiGetHealthConcernById.fulfilled, (state, action) => {
            state.healthConcernsId = action.payload
        })
        builder.addCase(apiGetDocs.fulfilled, (state, action) => {
            state.doctors = action.payload
        })
    },
    reducers: {
        SetLabTestId(state, action) {
            state.labTestId = action.payload
        },
        SetDepartment(state, action) {
            state.department = action.payload
        }
    }
})

export const getLabTests = (state) => state.labTest.labTests
export const getDoctors = (state) => state.labTest.doctors
export const getLabTestById = (state, id) => state.labTest.labTests.filter(data => data._id.$oid === id)
export const getHealthConcerns = (state) => state.labTest.healthConcerns
export const getHealthConcernsById = (state) => state.labTest.healthConcernsId
export const {SetLabTestId, setHealthConcern, SetDepartment} = labTestSlice.actions
export const getLabTestId = (state) => state.labTest.labTestId
export const getDepartment = (state) => state.labTest.department
export default labTestSlice.reducer