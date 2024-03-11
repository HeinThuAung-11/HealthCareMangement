import {Button} from "@mui/material";
import {Link, Outlet} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className={"grid grid-cols-12 h-[60px] bg-slate-100"}>
            <div className={"col-span-4 flex items-center"}>
                <Link to="/" className="ml-40">
                    <h1 className="font-extrabold text-2xl">PocketDoc.</h1>
                </Link>
            </div>
            <ul className={"list-none col-span-8 flex justify-evenly items-center"}>
                <li className="hover:text-blue-500 transition duration-300 font-semibold"><Link to="/doctors">Find Doctors</Link></li>
                <li className="hover:text-blue-500 transition duration-300 font-semibold"><Link to="/lab-tests">Lab Tests</Link></li>
                <li className="hover:text-blue-500 transition duration-300 font-semibold"><Link to="/medicines">Medicines</Link></li>
                <li className="hover:text-blue-500 transition duration-300 font-semibold"><Link to="/reports">Reports</Link></li>
                <Button variant="contained">SignIn</Button>
            </ul>
            <Outlet/>
        </div>
    )
}