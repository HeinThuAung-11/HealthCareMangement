import {BrowseMedicine} from "./BrowseMedicine.jsx";
import {OtherFeatures} from "../../common/components/OtherFeatures.jsx";

export const Medicine = () => {
    return (
        <div className={"px-32 my-5"}>
            <BrowseMedicine/>
            <div className={"my-10"}>
                <OtherFeatures/>
            </div>
        </div>
    )
}