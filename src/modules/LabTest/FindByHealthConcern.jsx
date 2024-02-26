import {Link} from "react-router-dom";
import fever from "./fever.jpg";
import diabetes from "./diabetes.jpeg";
import skin from "./skin.jpg";
import kidney from "./kidney.jpeg";
import digest from "./digestion.jpg";
import cancer from "./cancer.jpg";

export const FindByHealthConcern = () => {
    return (
        <>
            <h1 className={"text-center text-5xl font-bold text-cyan-700 my-5"}>
                Find Tests By Health Concern
            </h1>
            <div className={"flex justify-evenly items-center mt-24 mb-20 flex-wrap"}>
                <Link to={"#"}>
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={fever} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4"}>Fever</h1>

                    </div>
                </Link>
                <Link to={"#"}>
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={diabetes} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4"}>Diabetes</h1>
                    </div>
                </Link>
                <Link to={"#"}>
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={skin} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4"}>Skin</h1>
                    </div>
                </Link>
                <Link to={"#"}>
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={kidney} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4"}>Kidney</h1>
                    </div>
                </Link>
                <Link to={"/#"}>
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={digest} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4"}>Digestion</h1>
                    </div>
                </Link>
                <Link to={"#"}>
                    <div className={"flex flex-col justify-center items-center"}>
                        <img src={cancer} alt={"fever"} className={"rounded-full w-[150px] h-[150px]"}/>
                        <h1 className={"font-bold text-lg my-4"}>Cancer</h1>
                    </div>
                </Link>
            </div>
        </>

    )
}