import Button from "../button/button";
import "./cart-dropdown.scss";
import React from "react";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
