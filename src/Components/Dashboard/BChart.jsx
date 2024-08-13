import React from 'react';
import {
    BarChart, Bar,
    XAxis, YAxis,
    ResponsiveContainer
} from "recharts";

const BChart = () => {
    const data = [
        // {month: 'Jan', orders: 100},
        {month: 'Feb', orders: 57},
        {month: 'Mar', orders: 290},
        {month: 'Apr', orders: 400},
        {month: 'May', orders: 760},
        {month: 'Jun', orders: 450},
        {month: 'Jul', orders: 700},
        {month: 'Aug', orders: 900},
    ];

    return (
        <ResponsiveContainer width={'90%'} height={'80%'} className="m-auto">
            <BarChart data={data}
                margin={{bottom: 15}}
            >
                <XAxis
                    className='text-sm'
                    dataKey="month" axisLine={false}
                    tickLine={false}
                />
                <Bar barSize={10} dataKey="orders" fill={'#007aff'}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BChart;