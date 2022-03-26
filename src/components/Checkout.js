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
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};
