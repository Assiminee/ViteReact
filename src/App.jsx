import React from "react";
import './App.css'
import Container from "./Components/Container.jsx";
import LoginDiv from "./Components/Login/LoginDiv.jsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <Outlet />
        </>
    )
}

export default App
