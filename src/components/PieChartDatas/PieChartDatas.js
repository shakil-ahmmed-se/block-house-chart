import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

const PieChartDatas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://charts-api.onrender.com/api/pieChart/"
        );
        const chartData = await response.json();
        const formattedData = chartData.labels.map((label, index) => ({
          name: label,
          value: chartData.data[index],
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const COLORS = ["#ff0000", "#0000ff", "#ffff00"];

  return (
    <ResponsiveContainer width="100%" height={400}>
        <h1 style={{textAlign:'center'}}>Pie Chart</h1>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartDatas;
