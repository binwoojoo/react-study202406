import React from "react";
import { MdDelete, MdDone } from "react-icons/md";

import "./scss/TodoItem.scss";

const TodoItem = ({ item, onRemove, onCheck }) => {
  const { id, title, done } = item;

  // 삭제 클릭 이벤트
  const removeHandler = (e) => {
    onRemove(id);
  };
  
  const checkHandler = (e) => {
    onCheck(id);
  };

  return (
    <li className="todo-list-item">
      <div
        onClick={checkHandler}
        className={`check-circle ${done ? "active" : undefined}`}
      >
        {done && <MdDone />}
      </div>
      <span className={`text ${done ? "finish" : undefined}`}>{title}</span>
      <div onClick={removeHandler} className="remove">
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
