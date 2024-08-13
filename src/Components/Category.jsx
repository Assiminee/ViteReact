import React, {useState} from 'react';
import filter from "../assets/images/filter.svg";
import x from '../assets/images/x.svg';
import arrow from "../assets/images/arrow.svg";
import reset from "../assets/images/reset.svg";
import search from "../assets/images/search.svg";
import DropdownBtn from "./DropdownBtn.jsx";


const Category = () => {
    const [filterOptions, setFilterOptions] = useState([]);
    const [priceFilter, setPriceFilter] = useState("highest to lowest");
    const [statusFilter, setStatusFilter] = useState("Active");
    const [nameFilter, setNameFilter] = useState("A-Z");


    // console.log(priceFilter);
    // console.log(statusFilter);
    // console.log(nameFilter);

    const filters = {
        Price: {values: ['highest to lowest', 'lowest to highest'], state: (selected) => setPriceFilter(selected)},
        Status: {values: ['Active', 'Inactive'], state: (selected) => setStatusFilter(selected)},
        Name: {values: ['A-Z', 'Z-A'], state: (selected) => setNameFilter(selected)},
    };

    const removeItem = (filter) => {
        const index = filterOptions.indexOf(filter);
        if (index > -1) {
            const copy = [...filterOptions];

            copy.splice(index, 1);
            setFilterOptions(copy);
        }
    }

    const appendFilter = (filter) => {
        if (!filterOptions.includes(filter))
            setFilterOptions([...filterOptions, filter]);
    }

    const btnImage = <img className="w-8 h-8" src={filter} alt="filter"/>

    return (
        <div className="grid grid-cols-12 grid-rows-subgrid gap-4">
            <div className="col-start-1 col-span-full row-start-1 row-span-1">
                <h1 className="text-4xl font-bold">Category</h1>
            </div>
            <div
                className="flex col-start-1 col-span-7 row-start-2 row-span-1 bg-white rounded-xl divide-gray-300 divide-x items-center">
                <DropdownBtn options={Object.keys(filters)} onSelect={appendFilter} btnContent={btnImage}/>
                <div className="p-2 h-full flex items-center">
                    <h4 className="text-lg font-semibold">Filter By</h4>
                </div>
                {
                    filterOptions.map((filter, index) => (
                        <div key={index} className="flex text-lg font-semibold items-center">
                            <DropdownBtn options={filters[filter].values} onSelect={filters[filter].state} btnContent={
                                <>
                                    {filter}
                                    <img className="mt-1 ms-2 w-5 h-5" src={arrow} alt={"dropdown"}/>
                                </>
                            }/>
                            {/*<button onClick={() => removeItem(filter)}><img className="mt-1 ms-5 w-7 h-7" src={x}*/}
                            {/*                                                alt={"cancel"}/></button>*/}
                        </div>
                    ))
                }
                <div className="flex p-2 h-full items-center justify-center">
                    <button
                        className="flex font-semibold text-red-500"
                        onClick={() => setFilterOptions([])}>
                        Reset Filters
                        <img className="m-auto ms-4 w-5 h-5" src={reset} alt={"reset"}/>
                    </button>
                </div>
            </div>
            <div
                className="flex col-start-9 col-span-full row-start-2 row-span-1 bg-white rounded-xl items-center justify-center">
                <img className="mx-3 w-5 h-5" src={search} alt="search"/>
                <input type="text" className="rounded-lg w-full focus:border-0" placeholder="Search name"/>
            </div>
        </div>
    );
};

export default Category;
