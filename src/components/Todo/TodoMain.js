import React from "react";

import "./scss/TodoMain.scss";
import TodoItem from "./TodoItem";

const TodoMain = () => {

  const removeHandler = (e) => {
    console.log('씨발');
  };

  return (
    <ul className="todo-list">
      <TodoItem onDelete={removeHandler} />
    </ul>
  );
};

export default TodoMain;
