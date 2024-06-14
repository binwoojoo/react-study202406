import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((dp) => (
        <ChartBar key={dp.label} label={dp.label} />
      ))}
    </div>
  );
};

export default Chart;
