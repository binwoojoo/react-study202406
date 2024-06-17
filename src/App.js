import React, { useState } from "react";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";


const App = () => {
  // const [goals, setGoals] = useState(DUMMY_DATA);

  // // CourseInput에게 전달할 함수
  // const addGoalHandler = (goalObject) => {
  //   setGoals([...goals, goalObject]);
  // };

  // // CouseItem에게 전달할 함수
  // const deleteGoalHandler = (id) => {
  //   // goals.splice(
  //   //   goals.findIndex((g) => g.id === id),
  //   //   1
  //   // );

  //   const filterdGoals = goals.filter((g) => g.id !== id);

  //   setGoals(filterdGoals);
  // };

  return (
    <>
      <AddUsers />
      <UserList />
    </>
  );
};

export default App;
