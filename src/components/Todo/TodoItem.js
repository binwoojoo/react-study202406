import React, { useState } from "react";
import { MdDelete, MdDone } from "react-icons/md";
import "./scss/TodoItem.scss";

const TodoItem = ({ id, text, onDelete }) => {
    
  const [checkItem, setCheckItem] = useState(false);

  const clickHandler = () => {
    setCheckItem(!checkItem);
  };

  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="todo-list-item">
      <div
        onClick={clickHandler}
        className={`check-circle ${checkItem ? "active" : ""}`}
      >
        <MdDone />
      </div>
      <span className={`text ${checkItem ? "finish" : ""}`}>
        {text}
      </span>
      <div onClick={deleteHandler} className="remove">
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
