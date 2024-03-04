import {Outlet} from "react-router-dom";
import { Banner } from "../../common/components/Banner.jsx";
import homebanner from "./homebanner.png"
import { OtherFeatures } from "../../common/components/OtherFeatures.jsx";
import { Articles } from "../../common/components/Articles.jsx";
import { OurTeam } from "./OurTeam.jsx";


export const FindDoctor = () => {
    return (
        <>
            <Banner imageUrl={homebanner} altText={"Home Banner"}/>
            <OtherFeatures/>
            <OurTeam/>
        





            <Articles/>
            <Outlet/>
        </>

    )
}