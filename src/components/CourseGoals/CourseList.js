import React from "react";
import "./CourseList.css";
import CourseItem from "./CourseItem";

const CourseList = ({ items, onDelete }) => {
  return (
    <ul className="goal-list">
      {items.map((item) => (
        <CourseItem item={item} key={item.id} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default CourseList;
