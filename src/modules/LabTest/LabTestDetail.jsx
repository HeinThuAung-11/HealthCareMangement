import kidney from "./images/kidney.jpeg"
import {FaCertificate} from "react-icons/fa";
import {IoCheckmarkCircle} from "react-icons/io5";
import {Button} from "@mui/material";
import sample from "./images/sample.png"
import report from "./images/report.png"
import offers from "./images/offers.png"
import {Link, useParams} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks.js";
import {SetLabTestId} from "../../features/labTestSlice.js";

export const LabTestDetail = () => {
    const dispatch = useAppDispatch();
    const {labTestId} = useParams()
    const handleClick = () => {
        dispatch(SetLabTestId(labTestId));
    };

    return (
        <div className={"grid grid-cols-12 mx-32 my-10"}>
            <img src={kidney} alt={"photo"} className={"col-span-4"}/>
            <div className={"col-span-7 ml-10 flex flex-col gap-y-3"}>
                <div className={"flex flex-col gap-y-3"}>
                    <h1 className={"text-3xl font-bold"}>T3 T4 TSH</h1>
                    <h2 className={"text-lg font-semibold"}>Also known as Complete Blood Count Automated Blood
                    </h2>
                    <p className={"flex items-center gap-3 text-lg font-medium"}>
                        <FaCertificate/>
                        Certified Labs</p>
                    <p className={"flex items-center gap-3 text-lg font-medium border-b border-gray-300"}>
                        <IoCheckmarkCircle/>
                        Free Home Sample Pickup on orders above £50
                    </p>
                </div>
                <div className={"flex justify-between"}>
                    <h1 className={"text-2xl font-bold"}>£50</h1>
                    <Link to="/Booking" onClick={handleClick}>
                        <Button variant="contained">Book Now</Button>
                    </Link>

                </div>
                <p className={"border-b border-gray-300"}></p>
                <div>
                    <h1 className={"text-lg font-semibold"}>Our Partner Lab</h1>
                    <p>
                        Your tests will be conducted in one of our partner labs to ensure highest accuracy of your
                        reports.
                    </p>
                    <p className={"border-b border-gray-300 my-5"}></p>
                    <div className={"flex mb-5"}>
                        <img src={sample} alt={"sample"}/>
                        <div className={"flex flex-col ml-5"}>
                            <h2 className={"text-lg font-semibold"}>Home sample collection for FREE</h2>
                            <p className={"text-md font-medium"}>A certified professional will collect your sample from
                                your
                                preferred
                                location</p>
                        </div>
                    </div>
                    <div className={"flex mb-5"}>
                        <img src={report} alt={"report"}/>
                        <div className={"flex flex-col ml-5"}>
                            <h2 className={"text-lg font-semibold"}>
                                Get digital report within a day</h2>
                            <p className={"text-md font-medium"}>Our labs ensure turn-around-time of 24 hours from
                                specimen pickup</p>
                        </div>
                    </div>
                    <div className={"flex"}>
                        <img src={offers} alt={"offers"}/>
                        <div className={"flex flex-col ml-5"}>
                            <h2 className={"text-lg font-semibold"}>
                                Offers and affordable prices
                            </h2>
                            <p className={"text-md font-medium"}>Get great discounts and offers on tests and
                                packages.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}