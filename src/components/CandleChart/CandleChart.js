import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
} from "recharts";


const CandlestickBar = ({ x, y, width, height, fill, payload }) => {
  const { open, high, low, close } = payload;

  const barWidth = 10; 

  return (
    <g>
      <line
        x1={x + barWidth / 2}
        y1={y + height}
        x2={x + barWidth / 2}
        y2={y + height - (high - low)}
        stroke="#000"
      />
      <rect
        x={x}
        y={y + (open > close ? close - open : open - close)}
        width={barWidth}
        height={Math.abs(open - close)}
        fill={open > close ? "#FF6347" : "#32CD32"}
      />
    </g>
  );
};

const CandleChart = () => {
  const [candleChartData, setCandleChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://charts-api.onrender.com/api/candleChart/");
        const chartData = await response.json();
        const formattedData = chartData.data.map((item) => ({
          time: item.x,
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close,
        }));
        setCandleChartData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      
      <ResponsiveContainer width={500} height={400}>
      <h1 style={{textAlign:'center'}}>Candle Chart</h1>
        <ComposedChart data={candleChartData}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Bar dataKey="open" fill="#8884d8" shape={<CandlestickBar />} />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default CandleChart;
