import React, { useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ filteredYear }) => {
    
  const selectYear = (e) => {
    const year = e.target.value;
    filteredYear(year);
  };
  
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectYear}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
