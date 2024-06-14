import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  // dataPoints배열에서 12개 요소의 value를 합산하여
  // 연도 지출 총액을 계산 그리고 각 chart바에
  // 해당 월 지출 총액 / 연도 지출 총액 비율을 전달

  // 1년치 총액
  const totalValue = dataPoints
    .map((dp) => dp.value)
    .reduce((accum, curr) => accum + curr, 0);

  return (
    <div className="chart">
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          monthValue={dp.value}
          totalValue={totalValue}
        />
      ))}
    </div>
  );
};

export default Chart;
