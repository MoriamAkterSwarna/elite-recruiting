import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const marks = useLoaderData()
    // console.log(marks)
    return (
    
        <AreaChart
        width={1500}
        height={400}
        data={marks}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="assignmentName" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="attendance" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="quizMarks" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="assignmentMarks" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>


    

    );
};

export default Statistics;