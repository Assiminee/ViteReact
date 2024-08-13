import React from 'react';
import Header from "./Partials/Header.jsx";
import SideNav from "./Partials/SideNav.jsx";
import {Outlet} from "react-router-dom";

const Container = () => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className="w-full grid grid-rows-12 grid-cols-24">
            <Header expanded={expanded}/>
            <SideNav setExpanded={setExpanded}/>
            <div className={`innerDiv`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Container;