import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import React from "react";

const ExpenseList = ({ expenses }) => {

  const onFilterChange = (year) => {

    // ExpenseFilter에 있는 연도값을 여기서 출력~!
    console.log(year);
  };

  return (
    <div className="expenses">
      <ExpenseFilter filteredYear={onFilterChange}/>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </div>
  );
};

export default ExpenseList;
