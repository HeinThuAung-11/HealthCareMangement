import {useAppDispatch, useAppSelector} from "../../app/hooks.js";
import {apiGetHealthConcernById, getHealthConcernsById, SetLabTestId} from "../../features/labTestSlice.js";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

export const HealthConcernsById = () => {
    const data = useAppSelector(getHealthConcernsById)
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    console.log("data", data)
    useEffect(() => {
        dispatch(apiGetHealthConcernById(id))
    }, []);

    return (<>
            <h1 className={"text-center text-blue-700 text-3xl font-bold my-10"}>Lab Tests</h1>
            <div className={"flex gap-5 p-3 m-3"}>
                {data && data?.length > 0 ?
                    data.map((data) => {
                        return <div
                            className={"flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg justify-between h-[300px]"}
                            key={data._id.$oid}>
                            <Link to={`/lab-tests/${data._id.$oid}`}>
                                <div
                                    className="relative flex flex-col">
                                    <div
                                        className="flex items-center justify-center absolute rounded-full p-6 shadow-xl left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2">
                                        <img src={data.ImageUrl} alt={data.name} className={"w-[250px] h-[80px]"}/>
                                    </div>
                                    <div className="p-6 w-[250px] mt-20 line-clamp-3">
                                        <h5 className="mb-2 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                            {data.name}
                                        </h5>
                                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <div className="p-6 pt-0 flex items-center justify-center">

                                <button
                                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                    onClick={() => {
                                        navigate(`/Booking`)
                                        dispatch(SetLabTestId(data._id.$oid))
                                    }}
                                >
                                    Book
                                </button>
                            </div>
                        </div>

                    })

                    : null
                }
            </div>
        </>

    )
}