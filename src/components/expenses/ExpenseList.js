import ExpenseChart from "../chart/ExpenseChart";
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

  const filteredExpense = expenses.filter(
    (ex) => ex.date.getFullYear().toString() === year
  );

  // 지출 데이터가 없을 때 보여줄 태그
  let content = <p>지출 항목이 없습니다.</p>;

  if (filteredExpense.length > 0) {
    // 지출 데이터가 있을 때 보여줄 태그
    content = filteredExpense.map((ex) => (
      <ExpenseItem
        key={Math.random().toString()}
        title={ex.title}
        price={ex.price}
        date={ex.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpenseFilter filteredYear={onFilterChange} />
      <ExpenseChart />
      {content}
    </div>
  );
};

export default ExpenseList;
