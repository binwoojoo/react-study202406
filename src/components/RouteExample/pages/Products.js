import React from "react";
import { Link } from 'react-router-dom';

const Products = () => {
  console.log("products!");
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        <Link to="/">home</Link>페이지로 이동하기
      </p>
    </>
  );
};

export default Products;
