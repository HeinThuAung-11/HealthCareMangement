import {Outlet} from "react-router-dom";
import {Banner} from "../../common/components/Banner.jsx";
import homebanner from "./homebanner.png"
import {SearchBar} from "../../common/components/FindBook.jsx";
import { FindByDepartment } from "./FindByDepartment.jsx";
import { OtherFeatures } from "../../common/components/OtherFeatures.jsx";
import { Articles } from "../../common/components/Articles.jsx";



export const Home = () => {
    return (
        <>
            <Banner imageUrl={homebanner} altText={"Home Banner"}/>
            <SearchBar/>
            <FindByDepartment/>
            <OtherFeatures/>
            <Articles/>

            <Outlet/>
        </>

    )
}