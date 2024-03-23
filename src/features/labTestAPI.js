import axios from "axios";

export function apiBackendSaveBooking(booking) {
    console.log("Booking", booking)
    return axios.post('http://127.0.0.1:8000/booking/labtests', booking);
}