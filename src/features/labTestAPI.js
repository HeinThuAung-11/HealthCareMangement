import axios from "axios";
import {Labtest} from "../app/url.js";

export function apiBackendSaveBooking(booking) {
    console.log("Booking", booking)
    return axios.post(Labtest + "/booking", booking);
}