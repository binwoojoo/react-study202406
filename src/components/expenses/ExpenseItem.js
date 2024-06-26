import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, price: exPrice }) => {
  // 변수 선언
  // let itemTitle = title;

  // useState는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
  /*
    - useState훅의 리턴값은 배열이며
    - 첫번째 요소는 관리할 상태값의 초기값
    - 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수
  */
  const [itemTitle, setItemTitle] = useState(title);

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(exPrice);

  const clickHandler = (e) => {
    console.log(e.target.previousElementSibling.firstElementChild.textContent);

    /*
     useState가 관리하는 상태값은 반드시 setter로만 변경해야 합니다.
    */
    setItemTitle("짜장면");
  };
  
  console.log("렌더링 전");

  return (
    <Card className="expense-item">
      <ExpenseDate exDate={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
      <button id="btn" onClick={clickHandler}>
        제목 수정
      </button>
    </Card>
  );
};

export default ExpenseItem;
