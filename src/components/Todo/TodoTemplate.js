import React from "react";
import "./scss/TodoTemplate.scss";
import TodoHeader from "./TodoHeader";
import TodoMain from "./TodoMain";

const TodoTemplate = () => {

  const getTodo = (todos) => {
    return todos;
  };

  return (
    <div className="TodoTemplate">
      <TodoHeader todos={getTodo}/>
      <TodoMain getTodo={getTodo} />
    </div>
  );
};

export default TodoTemplate;
