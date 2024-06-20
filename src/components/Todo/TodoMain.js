import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "./scss/TodoMain.scss";

const TodoMain = ({ getTodo }) => {

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const removeHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  getTodo(todos);
  return (
    <div>
      <TodoInput onAddTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={removeHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoMain;
