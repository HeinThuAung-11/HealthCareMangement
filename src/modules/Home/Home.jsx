import {Outlet} from "react-router-dom";
import {Banner} from "../../common/components/Banner.jsx";
import homebanner from "./homebanner.png"
import {SearchBar} from "../../common/components/FindBook.jsx";

export const Home = () => {
    // const [data, setData] = useState(null);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://127.0.0.1:8000/labtests/');
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch data');
    //         }
    //         const result = await response.json();
    //         setData(result);
    //         console.log(result[0].lab_tests)
    //     };
    //
    //     fetchData();
    // }, []);
    return (
        <>
            <Banner imageUrl={homebanner} altText={"Home Banner"}/>
            <SearchBar/>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <Outlet/>
        </>

    )
}