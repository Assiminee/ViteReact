import React from 'react';
import PropTypes from "prop-types";

const SideNavDiv = ({img, text}) => {
    return (
        <div className="group flex flex-row">
            <div className="w-1 rounded transform group-hover:bg-[#007aff]"></div>
            <div
                className="flex flex-row mx-auto gap-2 lg:w-5/6 rounded-lg p-2 items-center justify-items-start lg:group-hover:bg-[#007aff] lg:group-hover:text-white">
                <div
                    className="w-5 h-5 bg-[#202224] group-hover:bg-[#007aff] lg:group-hover:bg-white"
                    style={{
                        WebkitMask: `url(${img}) no-repeat center / contain`,
                        mask: `url(${img}) no-repeat center / contain`
                    }}
                ></div>
                <p className="hidden lg:block lg:text-base">{text}</p>
            </div>
        </div>
    );
};

SideNavDiv.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    alt: PropTypes.string
}

export default SideNavDiv;