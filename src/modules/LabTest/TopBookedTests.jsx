import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.js";
import {apiGetLabTests, getLabTests} from "../../features/labTestSlice.js";
import {Link, useNavigate} from "react-router-dom";

export const TopBookedTests = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(getLabTests)
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(apiGetLabTests())
    }, [dispatch]);
    console.log("data", data)

    return (
        <div className={"flex overflow-x-auto gap-5 p-3 m-3"}>
            {data && data?.length > 0 ?
                data.map((data) => {
                    return <div
                        className={"flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg justify-between"}
                        key={data._id.$oid}>
                        <Link to={data._id.$oid}>
                            <div
                                className="relative flex flex-col">
                                <div className="p-6 w-[250px] ">
                                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {data.test_name}
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
                                onClick={() => navigate('/Booking')}
                            >
                                Book
                            </button>
                        </div>
                    </div>

                })

                : null
            }
        </div>
    )
}