import React from "react";
import "./App.css";
// import ExpenseItem from "./components/expenses/ExpenseItem";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";
// import Greet from "./components/Greet";

const App = () => {
  // 서버에서 지출항목 JSON 배열을 응답받음
  const expenses = [
    {
      title: "치킨먹음",
      price: 30000,
      date: new Date(2024, 6 - 1, 3),
    },
    {
      title: "족발먹음",
      price: 40000,
      date: new Date(2023, 12 - 1, 7),
    },
    {
      title: "헬스장등록",
      price: 300000,
      date: new Date(2024, 6 - 1, 12),
    },
    {
      title: "파파존스",
      price: 40000,
      date: new Date(2022, 3 - 1, 4),
    },
    {
      title: "파리채",
      price: 1500,
      date: new Date(2023, 5 - 1, 6),
    },
  ];

  // ExpenseForm에게 내려보낼 함수
  const onAddExpense = (userInput) => {
    expenses.push(userInput);
    console.log(expenses);
  };

  return (
    <>
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenses} />
      {/* <Greet>
        <ul>
          <li>사과</li>
          <li>사과</li>
          <li>사과</li>
        </ul>
      </Greet>
      <Greet>
        <ul>
          <li>ddd</li>
          <li>aaa</li>
          <li>ccc</li>
        </ul>
      </Greet> */}
    </>
  );
};

export default App;
