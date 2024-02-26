import {FindByHealthConcern} from "./FindByHealthConcern.jsx";
import {OtherFeatures} from "../../common/components/OtherFeatures.jsx";
import {LabSample} from "./LabSample.jsx";

export const LabTest = () => {
    return (
        <>
            <FindByHealthConcern/>
            <OtherFeatures/>
            <LabSample/>
        </>
    )
}