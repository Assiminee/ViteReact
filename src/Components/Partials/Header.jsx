import React from 'react';
import DarkLogo from '../../assets/images/LogoDark.svg'
import profilePic from '../../assets/images/profilePic.png'
import PropTypes from "prop-types";

const  Header = () => {
    return (
        <header>
            <nav className="flex items-center justify-between p-2" aria-label="Global">
                <div className="flex">
                    <a href="#">
                        <img className="h-10 w-auto logo" src={ DarkLogo } alt=""/>
                    </a>
                </div>
                <div className="flex pe-2">
                    <img className="object-fill h-14 w-14 rounded-full" src={ profilePic } alt=""/>
                    <div className="hidden sm:block ms-3">
                        <p className="font-bold text-lg">Jane Doe</p>
                        <p className="text-base">Admin</p>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;