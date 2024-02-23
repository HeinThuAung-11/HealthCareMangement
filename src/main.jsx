import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./modules/Home/Home.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <App>
          <Routes>
              <Route exact path="/" element={<Home/>} />
          </Routes>
          </App>
      </BrowserRouter>
  </React.StrictMode>,
)
