import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {
  
  const { cartItems } = useContext(CartContext);

  // const calcTotalAmount = () => {
  //   let totalAmount = 0;
  //   for (const item of cartItems) {
  //     totalAmount += item.amount;
  //   }
  //   return totalAmount;
  // };

  const numberOfCart = cartItems.reduce((accum, current) => {
    // console.log("accum: ", accum);
    // console.log("current: ", current);
    return accum + current.amount;
  }, 0);

  const { button, icon, badge } = styles;

  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
