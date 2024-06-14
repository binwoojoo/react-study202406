import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label }) => {
  // 인라인 스타일 객체
  let barfillHeight = "60%";

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
