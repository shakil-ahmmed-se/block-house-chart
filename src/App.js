import React from "react";
import CandleChart from "./components/CandleChart/CandleChart";
import LineChartData from "./components/LineChart/LineChartData";
import BarChartDatas from "./components/BarChart/BarChartDatas";
import PieChartDatas from "./components/PieChartDatas/PieChartDatas";


const App = () => {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Dashboard</h1>
      <div style={{display:'flex'}}>
        <BarChartDatas></BarChartDatas>
        <PieChartDatas></PieChartDatas>
      </div>
      <div style={{marginTop:'100px',display:'flex'}}>
      <CandleChart></CandleChart>
      <LineChartData></LineChartData>
      </div>
      

    </div>
  );
};

export default App;

