import "./Subtotal.css";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDataLayerValue } from "../Context/DataLayer";
import { getBasketTotal } from "../Context/reducer";
export const Subtotal = () => {
  const [{ basket }, dispatch] = useDataLayerValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>proceed to checkout</button>
    </div>
  );
};
