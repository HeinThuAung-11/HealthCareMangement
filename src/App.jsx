import {Footer} from "./common/layout/Footer.jsx";
import {NavBar} from "./common/layout/NavBar.jsx";
import {Container} from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function App({children}) {
    return (
        <div>
            <NavBar/>
            <Container maxWidth="2xl">
                <main>{children}</main>
            </Container>
            <Footer/>
        </div>
    )
}
