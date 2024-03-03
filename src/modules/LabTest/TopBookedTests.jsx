import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.js";
import {apiGetLabTests, getLabTests} from "../../features/labTestSlice.js";
import {Link} from "react-router-dom";

export const TopBookedTests = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(getLabTests)

    useEffect(() => {
        dispatch(apiGetLabTests())
    }, [dispatch]);
    // console.log("data", data[0].lab_tests[0].test_name)
    return (
        <div className={"flex gap-5 m-3"}>
            {data && data?.length > 0 ?
                data[0].lab_tests.map((index) => {
                    return <div
                        className={"flex flex-col w-1/5  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  justify-between"}
                        key={index.test_name}>
                        <Link to={"1"}>
                            <div
                                className="relative flex flex-col">
                                <div className="p-6">
                                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {index.test_name}
                                    </h5>
                                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        {index.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <div className="p-6 pt-0">
                            <button
                                className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
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