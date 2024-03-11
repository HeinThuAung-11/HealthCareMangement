import {Link} from "react-router-dom";
import fever from "./images/fever.jpg";
import diabetes from "./images/diabetes.jpeg";
import skin from "./images/skin.jpg";
import kidney from "./images/kidney.jpeg";
import digest from "./images/digestion.jpg";
import cancer from "./images/cancer.jpg";

export const FindByHealthConcern = () => {
    return (
        <>
            <h1 className={"text-center text-5xl font-bold text-blue-500 my-5 mt-10"}>
                Find Tests By Health Concern
            </h1>
            <div className="flex justify-center  mb-28">
                <div className="bg-blue-500 w-4 h-4 rounded-full mx-1"></div>
                <div className="bg-blue-500 w-4 h-4 rounded-full mx-1"></div>
                <div className="bg-blue-500 w-4 h-4 rounded-full mx-1"></div>
            </div>
            <div className={"flex justify-evenly items-center mt-24 mb-20 flex-wrap"}>
                <Link to={"#"} className="hover:scale-105 transition-transform duration-300">
                    <div className={"flex flex-col justify-center items-center "}>
                        <img src={fever} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Fever</h1>

                    </div>
                </Link>
                <Link to={"#"} className="hover:scale-105 transition-transform duration-300">
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={diabetes} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Diabetes</h1>
                    </div>
                </Link>
                <Link to={"#"} className="hover:scale-105 transition-transform duration-300">
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={skin} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Skin</h1>
                    </div>
                </Link>
                <Link to={"#"} className="hover:scale-105 transition-transform duration-300">
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={kidney} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Kidney</h1>
                    </div>
                </Link>
                <Link to={"#"} className="hover:scale-105 transition-transform duration-300">
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={digest} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Digestion</h1>
                    </div>
                </Link>
                <Link to={"#"} className="hover:scale-105 transition-transform duration-300">
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={cancer} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4 text-blue-900"}>Cancer</h1>
                    </div>
                </Link>
            </div>
        </>

    )
}