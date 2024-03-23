import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks.js";
import {apiGetHealthConcern, getHealthConcerns, setHealthConcern} from "../../features/labTestSlice.js";
import {useEffect} from "react";

export const FindByHealthConcern = () => {
    const healthConcerns = useAppSelector(getHealthConcerns)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(apiGetHealthConcern())
    }, []);
    const handleClick = (id) => {
        dispatch(setHealthConcern(id))
    }
    // console.log("healthconcenr", healthConcerns)
    return (
        <>
            <h1 className={"text-center text-5xl font-bold text-blue-500 my-5 mt-10"}>
                Find Tests By Health Concern
            </h1>
            <div className={"flex justify-evenly items-center m-5 flex-wrap"}>
                {healthConcerns.length > 0 && healthConcerns.map((element, index) => {
                    return <Link to={`/health-concerns/${index + 1}`}
                                 onClick={() => handleClick(index + 1)}
                                 className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transform transition-transform hover:scale-105"
                                 key={element._id.$oid}>
                        <div className={"flex flex-col justify-center items-center "}>
                            <img src={element.ImageUrl} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                            <h1 className={"font-bold text-lg my-4 text-blue-900"}>{element.name}</h1>
                        </div>
                    </Link>
                })}

                {/*<Link to={"#"} className="hover:scale-105 transition-transform duration-300">*/}
                {/*    <div className={"flex flex-col justify-center items-center"}>*/}
                {/*        <img src={diabetes} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>*/}
                {/*        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Diabetes</h1>*/}
                {/*    </div>*/}
                {/*</Link>*/}
                {/*<Link to={"#"} className="hover:scale-105 transition-transform duration-300">*/}
                {/*    <div className={"flex flex-col justify-center items-center"}>*/}
                {/*        <img src={skin} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>*/}
                {/*        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Skin</h1>*/}
                {/*    </div>*/}
                {/*</Link>*/}
                {/*<Link to={"#"} className="hover:scale-105 transition-transform duration-300">*/}
                {/*    <div className={"flex flex-col justify-center items-center"}>*/}
                {/*        <img src={kidney} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>*/}
                {/*        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Kidney</h1>*/}
                {/*    </div>*/}
                {/*</Link>*/}
                {/*<Link to={"#"} className="hover:scale-105 transition-transform duration-300">*/}
                {/*    <div className={"flex flex-col justify-center items-center"}>*/}
                {/*        <img src={digest} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>*/}
                {/*        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Digestion</h1>*/}
                {/*    </div>*/}
                {/*</Link>*/}
                {/*<Link to={"#"} className="hover:scale-105 transition-transform duration-300">*/}
                {/*    <div className={"flex flex-col justify-center items-center"}>*/}
                {/*        <img src={cancer} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>*/}
                {/*        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Cancer</h1>*/}
                {/*    </div>*/}
                {/*</Link>*/}
            </div>
        </>

    )
}