import {FaUserDoctor} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {LuTestTube2} from "react-icons/lu";
import {GiMedicinePills} from "react-icons/gi";

export const OtherFeatures = () => {
    return (
        <div className={"flex justify-evenly my-5"}>
            <Link to={"#"}>
                <div className={"flex flex-col items-center"}>
                    <FaUserDoctor style={{width: '32px', height: '32px'}}/>
                    <h1 className={"text-cyan-700 text-lg"}>Consult with a doctor</h1>
                </div>
            </Link>
            <Link to={"#"}>
                <div className={"flex flex-col items-center"}>
                    <LuTestTube2 style={{width: '32px', height: '32px'}}/>
                    <h1 className={"text-cyan-700 text-lg"}>Book Test</h1>
                </div>
            </Link>
            <Link to={"#"}>
                <div className={"flex flex-col items-center"}>
                    <GiMedicinePills style={{width: '32px', height: '32px'}}/>
                    <h1 className={"text-cyan-700 text-lg"}>Order Medicine</h1>
                </div>
            </Link>
        </div>
    )
}