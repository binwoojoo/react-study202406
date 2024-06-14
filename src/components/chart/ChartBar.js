import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label, monthValue, totalValue }) => {
    
  // 인라인 스타일 객체
  let barfillHeight = "0%";

  if (totalValue > 0) {
    const percantage = (monthValue / totalValue) * 100;
    barfillHeight = percantage + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barfillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
