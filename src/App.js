import React, { useRef, useState } from "react";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

const App = () => {
  // 회원들이 저장될 배열
  const [userList, setUserList] = useState([]);

  const count = useRef(0);

  const addUserHandler = (user) => {
    count.current++;
    console.log(count.current);

    console.log(user);
    setUserList((prev) => [...prev, { ...user, id: Math.random().toString() }]);
  };

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
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
};

export default App;
