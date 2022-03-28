import "./Checkout.css";

import React from "react";
import { Subtotal } from "./Subtotal";
import { useDataLayerValue } from "../Context/DataLayer";
import matchers from "@testing-library/jest-dom/matchers";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const [{ basket, user }, dispatch] = useDataLayerValue();

  const removeFromCart = (basketId) => {
    console.log(basketId);
    dispatch({
      type: "REMOVE_FROM_CART",
      id: basketId,
    });
  };

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images.freekaamaal.com/festivals/amazon-great-india-banner.jpg"
          alt=""
          srcset=""
          className="checkout_ad"
        />
        <div>
          <h2 className="checkout_title">
            Hello {user ? user.email : "Guest"}
          </h2>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {/* basket Item */}
          {basket.map((basketItem) => (
            <div className="basket" key={Math.random()}>
              <div className="basket_image">
                <img src={basketItem.image} alt="" srcset="" />
              </div>
              <div className="basket_infor">
                <h3>{basketItem.title}</h3>
                <p>{basketItem.price}</p>
                <p>{basketItem.rating}</p>
                <button onClick={() => removeFromCart(basketItem.id)}>
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};
