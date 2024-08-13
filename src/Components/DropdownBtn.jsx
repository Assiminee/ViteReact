import React, {useState} from 'react';
import PropTypes from "prop-types";

const DropdownBtn = ({ options, onSelect, btnContent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={toggleDropdown}
                    className="flex p-2 items-center justify-center bg-white rounded-lg">
                {btnContent}
            </button>
            {isOpen && (
                <div className="absolute mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option, index) => (
                            <button key={index}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                    onClick={() => handleOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

DropdownBtn.propTypes = {
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    btnContent: PropTypes.element.isRequired,
}

export default DropdownBtn;
