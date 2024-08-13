import React from 'react';
import Card from "./Card.jsx";
import users from "../../assets/images/users.svg";
import bookings from "../../assets/images/bookings.svg";
import earnings from "../../assets/images/earnings.svg";
import pending from "../../assets/images/pending.svg";
import Chart from "./Chart.jsx";
import BChart from "./BChart.jsx";

const Dashboard = () => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const cardData = [
        {colStart: 2, text: "+8.5%", title: "Users", count: 40689, icon: users, empty: false},
        {colStart: 4, text: "+1.3%", title: "Bookings", count: 10293, icon: bookings, empty: false},
        {colStart: 6, text: "-4.3%", title: "Earnings", count: 89000, icon: earnings, empty: false},
        {colStart: 8, text: "+1.8%", title: "Pending", count: 2040, icon: pending, empty: false}
    ];

    return (
        <>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                {cardData.map((data, index) => (
                    <Card key={index} colStart={data.colStart} text={data.text} title={data.title}
                          count={data.count} icon={data.icon} empty={data.empty}/>
                ))}
            </div>

            <div className="grid grid-cols-4 grid-rows-22 gap-4">
                <div
                    className="p-3 grid grid-cols-subgrid row-start-1 row-span-full col-start-1 col-span-3 rounded-2xl bg-white gap-5">
                    <div className={'flex justify-between col-start-1 col-span-full'}>
                        <h1 className="text-xl font-bold">Details</h1>
                        <select>
                            {monthNames.map((month, index) => (
                                <option key={index} value={month}>{month}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-start-1 col-span-full me-7 ">
                        <Chart/>
                    </div>
                </div>
                <div className="row-start-1 row-span-full col-start-4 col-span-1 rounded-2xl bg-white">
                    <h1 className="p-3 text-xl font-bold">Total Orders</h1>
                    <BChart/>
                </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                {[2, 4, 6, 8].map((val, index) => (
                    <Card key={index} colStart={val}/>
                ))}
            </div>
        </>
    );
};

export default Dashboard;