import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import React, { useState } from "react";

const ExpenseList = ({ expenses }) => {
  // 선택된 연도로 재 렌더링하기 위해 연도를 상태값으로 관리
  const [year, setFilteredYear] = useState(new Date().getFullYear().toString());

  const onFilterChange = (year) => {
    // ExpenseFilter에 있는 연도값을 여기서 출력~!
    console.log(year);
    setFilteredYear(year);
  };

  // App.js에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수
  // const convertToComponentArray = () => {

  //   // const newArray = [];
  //   // for (const ex of expenses) {
  //   //   const tag = (
  //   //     <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />
  //   //   );
  //   //   newArray.push(tag);
  //   // }

  //   return expenses.map((ex) => (
  //     <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />
  //   ));
  // };

  return (
    <div className="expenses">
      <ExpenseFilter filteredYear={onFilterChange} />
      {expenses
        .filter((ex) => ex.date.getFullYear().toString() === year)
        .map((ex) => (
          <ExpenseItem
            key={Math.random().toString()}
            title={ex.title}
            price={ex.price}
            date={ex.date}
          />
        ))}
    </div>
  );
};

export default ExpenseList;
