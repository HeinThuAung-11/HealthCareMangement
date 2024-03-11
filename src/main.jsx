import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./modules/Home/Home.jsx";
import {LabTest} from "./modules/LabTest/LabTest.jsx";
import {FindDoctor} from './modules/FindDoctor/FindDoctor.jsx';
import {Medicine} from "./modules/Medicine/Medicine.jsx";
import {store} from './app/store'
import {Provider} from 'react-redux'
import {LabTestDetail} from "./modules/LabTest/LabTestDetail.jsx";
import { Reports } from './modules/Reports/Reports.jsx';
import { Cardiologist } from './common/subModules/Cardiologist.jsx';
import { Subarticles } from './common/subModules/Subarticles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/doctors" element={<FindDoctor/>}/>
                        <Route path={"/lab-tests"} element={<LabTest/>}/>
                        <Route path={"/lab-tests/:labtestId"} element={<LabTestDetail/>}/>
                        <Route path={"/medicines"} element={<Medicine/>}/>
                        <Route path={"/reports"} element={<Reports/>}/>
                        <Route path={"/cardiologist"} element={<Cardiologist/>}/>
                        <Route path={"/heart-article"} element={<Subarticles/>}/>
                    </Routes>
                </App>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
