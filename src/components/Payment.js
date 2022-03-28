import "./Payment.css";

import React from "react";
import { useDataLayerValue } from "../Context/DataLayer";
import { Link } from "react-router-dom";

export const Payment = () => {
  const [{ basket, user }, dispatch] = useDataLayerValue();

  const removeFromCart = (basketId) => {
    console.log(basketId);
    dispatch({
      type: "REMOVE_FROM_CART",
      id: basketId,
    });
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>Los angeles ,CA</p>
          </div>
        </div>
        {/* Review Items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment_items">
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
        {/* Payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">{/* stripe payment */}</div>
        </div>
      </div>
    </div>
  );
};
