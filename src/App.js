// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ExpenseItem from "./components/expenses/ExpenseItem";

const App = () => {
  // jsx 문법
  // const $h2 = React.createElement("h2", null, "반갑노");
  // const $h2 = <h2>ㅎㅇ~!~!~!~!~</h2>;

  // jsx 규칙
  // 1. return 안에 있는 태그는 반드시 하나의 태그로 묶어야함.
  // 2. 빈 태그(닫는 태그가 없는)는 반드시 />로 마감.
  // 3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
  // 4. 의미없는 부모는 <React.Fragment>로 감싸면 됨. <>로 표기 가능
  // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.

  return (
    <>
      <ExpenseItem title={"장독대집밥"} price={8000} date={new Date(2024, 6, 3)} />
      <ExpenseItem title="맘스터치" price={6000} date={new Date(2024, 6, 7)} />
      <ExpenseItem title="국밥" price={9000} date={new Date(2024, 6, 12)} />
    </>
  );
};

export default App;
