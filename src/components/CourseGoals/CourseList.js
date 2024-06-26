import React from "react";
// import "./CourseList.css";
import CourseItem from "./CourseItem";
import styled from "styled-components";

const CourseUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseList = ({ items, onDelete }) => {
  return (
    <CourseUl>
      {items.map((item) => (
        <CourseItem item={item} key={item.id} onDelete={onDelete} />
      ))}
    </CourseUl>
  );
};

export default CourseList;

