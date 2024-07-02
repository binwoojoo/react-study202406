import React from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: "p1", name: "세탁기" },
  { id: "p2", name: "에엉컨" },
  { id: "p3", name: "청소기" },
];

const Products = () => {
  console.log("products!");
  return (
    <>
      <h1>My products Page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => 
          <li key={prod.id}>
            <Link to={`${prod.id}/page/10`}>{prod.name}</Link>
          </li>
        )}
      </ul>
      {/* <p>
        <Link to="..">home</Link>페이지로 이동하기
      </p> */}
    </>
  );
};

export default Products;
