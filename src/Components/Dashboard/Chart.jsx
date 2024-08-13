import React from 'react';
import {
    XAxis, YAxis, ResponsiveContainer, Area, AreaChart, LineChart, Line
} from 'recharts'

const Chart = () => {
    const data = [
        {x: 0, y: 0},
        {x: 2, y: 10},
        {x: 3, y: 3},
        {x: 14, y: 45},
        {x: 22, y: 45},
        {x: 31, y: 30},
        {x: 56, y: 10},
        {x: 41, y: 45},
        {x: 10, y: 100},
        {x: 21, y: 45},
        {x: 5, y: 12},
    ].sort((a, b) => a.x - b.x);

    console.log(data);

    const ticks = (length, step) => Array.from({length: length}, (_, i) => i * step);

    return (
        <ResponsiveContainer width="100%" height="100%" className="m-auto">
            <AreaChart
                data={data}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#007aff" stopOpacity={0.7}/>
                        <stop offset="80%" stopColor="#007aff" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="x" ticks={ticks(13, 5)} domain={[0, 60]}/>
                <YAxis ticks={ticks(6, 20)} domain={[0, 100]}
                       tickFormatter={(tick) => `${tick}%`}/>
                <Area dataKey="y" stroke="#007aff" fill="url(#colorUv)">
                </Area>
            </AreaChart>
        </ResponsiveContainer>
    )
        ;
};

export default Chart;