import "./Checkout.css";

import React from "react";
import { Subtotal } from "./Subtotal";
import { useDataLayerValue } from "../Context/DataLayer";

export const Checkout = () => {
  const [{ basket }, dispatch] = useDataLayerValue();
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
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {/* basket Item */}

          {basket.map((basketItem) => (
            <div className="basket">
              <div className="basket_image">
                <img src={basketItem.image} alt="" srcset="" />
              </div>
              <div className="basket_infor">
                <h3>{basketItem.title}</h3>
                <p>{basketItem.price}</p>
                <p>{basketItem.rating}</p>
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
