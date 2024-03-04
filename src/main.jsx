import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./modules/Home/Home.jsx";
import {LabTest} from "./modules/LabTest/LabTest.jsx";
import {FindDoctor} from './modules/FindDoctor/FindDoctor.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path={"/lab-tests"} element={<LabTest/>}/>
                    {/* <Route path={"/doctors"} element={<FindDoctor/>}/> */}
                </Routes>
            </App>
        </BrowserRouter>
    </React.StrictMode>,
)
