import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, price: exPrice }) => {
  //   console.log("props: ", aaa);

  // 변수 선언
  //   const expenseDate = date;
  //   const expenseTitle = title;
  //   const expensePrice = exPrice;

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(exPrice);

  const clickHandler = (e) => {
    console.log("클릭함");
    console.log(e.target.previousElementSibling.firstElementChild.textContent);

    // const $price = document.querySelectorAll(".expense-item__price");
    // console.log($price);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate exDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
      <button id="btn" onClick={clickHandler}>
        버튼
      </button>
      <button id="btn2" onMouseOver={e => {alert('ㅋㅋ')}}>
        버튼2
      </button>
    </Card>
  );
};

export default ExpenseItem;
