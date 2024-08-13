import React from 'react';
import PropTypes from "prop-types";
import greenArrow from "../../assets/images/greenArrow.svg";
import redArrow from "../../assets/images/redArrow.svg";

const Card = ({colStart, empty=true, title, count, text, icon}) => {
    if (empty)
        return <div className={`cardDiv col-start-${colStart}`}></div>;

    const sign = text.startsWith('+')
    const arrow = sign ? greenArrow : redArrow;
    text += sign ? " up" : " down";

    return (
        <div
            className={`cardDiv col-start-${colStart}`}>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-sm">Total {title}</p>
                    <p className="font-bold text-xl">{count}</p>
                </div>
                <img className="w-10 h-fit" src={icon} alt="Icon"/>
            </div>
            <div className="flex items-center">
                <img className="w-4 h-4" src={arrow} alt="Arrow"/>
                <p className="text-sm">&nbsp;{text.substring(1)} from yesterday</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    colStart: PropTypes.number,
    empty: PropTypes.bool,
    title: PropTypes.string,
    count: PropTypes.number,
    text: PropTypes.string,
    icon: PropTypes.string,
}

export default Card;