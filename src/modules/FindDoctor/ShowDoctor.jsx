import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.js";
import {apiGetDocs, getDepartment, getDoctors} from "../../features/labTestSlice.js";

export const ShowDoctor = () => {
    const dispatch = useAppDispatch()
    const doctors = useAppSelector(getDoctors)
    useEffect(() => {
        dispatch(apiGetDocs())
    }, []);
    const department = useAppSelector(getDepartment)
    let filteredDoctors
    if (department === "") {
        filteredDoctors = [...doctors]
    } else {
        filteredDoctors = doctors.filter(doc => doc.department === department)
    }
    console.log("Doctors", filteredDoctors)
    return (
        <div className={'mt-20'}>
            {
                filteredDoctors.length > 0 &&
                filteredDoctors.map(doctor => {
                    return <div key={doctor._id}
                                className={"flex my-5 items-center justify-evenly py-5 mx-80 rounded-md shadow-xl transform transition-transform hover:scale-105"}>
                        <img
                            className={"rounded-full"}
                            src={doctor.url}
                            alt={"doc"}/>
                        <div className={""}>
                            <h3 className={'text-xl font-bold'}>{doctor.name}</h3>
                            <h3 className={'text-lg'}>{doctor.department}</h3>
                            <h3 className={'text-lg'}>{doctor.exp}</h3>
                            <h3 className={'text-lg'}>{doctor.location}</h3>
                            <h3 className={'text-lg'}>{doctor.fees} Consultation Fees</h3>
                        </div>
                        <button className={"w-[100px] h-[50px] bg-blue-500 text-white rounded-md"}>Book Clinic Visit
                        </button>
                    </div>
                })

            }
        </div>
    )
}