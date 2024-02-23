import {Outlet} from "react-router-dom";
import {Banner} from "../../common/components/Banner.jsx";
import homebanner from "./homebanner.png"
import {SearchBar} from "./FindBook.jsx";

export const Home = () => {
    return (
        <>
            <Banner imageUrl={homebanner} altText={"Home Banner"}/>
            <SearchBar/>
            <Outlet/>
        </>

    )
}