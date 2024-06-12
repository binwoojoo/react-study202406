import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ exDate: date }) => {

  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, "0");
  };

  return (
    <div className="expense-date">
      <div className="expense-date__month">{year}</div>
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__day">{make2digit(day)}</div>
    </div>
  );
};
    
export default ExpenseDate;
