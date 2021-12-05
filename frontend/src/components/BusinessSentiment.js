import { useState, useEffect } from 'react';
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import data from './data/states.json';

export default function BusinessSentiment() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const url = 'http://localhost:8080/server/avgSentimentPerState/'
  //   const res = axios.get(url);
  //   console.log(res);
  //   setData(res);
  // }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        layout='vertical'
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type='number' />
        <YAxis type='category' dataKey="name" />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="sentiment" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}