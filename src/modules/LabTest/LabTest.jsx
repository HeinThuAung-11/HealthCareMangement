import {FindByHealthConcern} from "./FindByHealthConcern.jsx";
import {OtherFeatures} from "../../common/components/OtherFeatures.jsx";
import {LabSample} from "./LabSample.jsx";
import {TopBookedTests} from "./TopBookedTests.jsx";
import { Articles } from "../../common/components/Articles.jsx";

export const LabTest = () => {
    return (
        <>
            <FindByHealthConcern/>
            <OtherFeatures/>
            <TopBookedTests/>
            <LabSample/>
            <Articles/>
        </>
    )
}