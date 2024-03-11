import {FaUserDoctor} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {LuTestTube2} from "react-icons/lu";
import {GiMedicinePills} from "react-icons/gi";

export const OtherFeatures = () => {
    return (
        <div className={"flex justify-evenly my-5 mt-32"} style={{ backgroundColor: "#F5FAFE", padding: "10px"}}>
            <Link to={"#"}>
                <div className={"flex flex-col items-center mt-24 mb-24"}>
                    <FaUserDoctor style={{width: '32px', height: '32px', marginBottom: '15px',  color: '#3E8CFE'}}/>
                    <h1 className={"text-blue-900 text-lg"}>Consult with a doctor</h1>
                </div>
            </Link>
            <Link to={"#"}>
                <div className={"flex flex-col items-center mt-24 mb-24"}>
                    <LuTestTube2 style={{width: '32px', height: '32px', marginBottom: '15px', color: '#3E8CFE'}}/>
                    <h1 className={"text-blue-900 text-lg"}>Book Test</h1>
                </div>
            </Link>
            <Link to={"#"}>
                <div className={"flex flex-col items-center mt-24 mb-24"}>
                    <GiMedicinePills style={{width: '32px', height: '32px', marginBottom: '15px', color: '#3E8CFE'}}/>
                    <h1 className={"text-blue-900 text-lg"}>Order Medicine</h1>
                </div>
            </Link>
        </div>
    )
}