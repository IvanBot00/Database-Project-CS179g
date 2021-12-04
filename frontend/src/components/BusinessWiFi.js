import { useState, useEffect } from 'react';
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
// import data from './data/states.json';

export default function BusinessWiFi() {
  const [data, setData] = useState([]);

  useEffect( async () => {
    // under construction

    // const dummyData = [{"label":"first", "value" : 1}, {"label":"second","value":2}]
    // setData(dummyData);
    const url = 'http://cs179g-fall-2021-01.cs.ucr.edu:8080/server/wifi/'
    let res = await axios.get(url);
    console.log(res);
    console.log(res.statusText);
    setData(res.data);
  }, []);
  
  // console.log(data)

  return (
    <ResponsiveContainer width="100%" height="150%">
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
        {/* <YAxis type='category' dataKey="state wifi" /> */}
        <YAxis type='category' dataKey="state" />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Average Rating WiFi" fill="#8884d8" />
        <Bar dataKey="Average Rating no WiFi" fill="#11bbd8" />
      </BarChart>
    </ResponsiveContainer>
  );
}