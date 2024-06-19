import React, { useState } from "react";
import { MdDelete, MdDone } from "react-icons/md";
import "./scss/TodoItem.scss";

const TodoItem = ({ onDelete }) => {
  const [checkItem, setCheckItem] = useState(false);

  const clickHandler = (e) => {
    setCheckItem(!checkItem);
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
        할 일 어쩌구~~
      </span>
      <div onClick={onDelete} className="remove">
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
