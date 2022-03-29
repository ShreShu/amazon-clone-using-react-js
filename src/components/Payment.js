import "./Payment.css";

import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../Context/DataLayer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../Context/reducer";
import axios from "../axios";
import { db } from "../firebase/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore/lite";

export const Payment = () => {
  const [{ basket, user }, dispatch] = useDataLayerValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const element = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate a special stripe secret which allows to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies sub units{for dollar it takes cent}
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
    };
    getClientSecret();
  }, [basket]);

  const removeFromCart = (basketId) => {
    console.log(basketId);
    dispatch({
      type: "REMOVE_FROM_CART",
      id: basketId,
    });
  };
  const handlSubmit = (event) => {
    event.preventDefault();
    // setProcessing(true);
    // const payload = await stripe
    //   .confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: element.getElement(CardElement),
    //     },
    //   })
    //   .then(async ({ paymentIntent }) => {
    //     //[paymentIntent =>payment confirmation

    //     const docRef = doc(db, "users", user?.id);
    //     await setDoc(docRef, {
    //       basket: basket,
    //       amount: 1000,
    //       created: "yes",
    //     });

    //     setSucceeded(true);
    //     setError(null);
    //     setProcessing(false);
    //     dispatch({
    //       type: "EMPTY_BASKET",
    //     });
    //     navigate("/orders");
    //   });

    // const createNote = async (note) => {
    //   await setDoc(doc(db, "users", user?.email), note);
    // };
    // createNote({
    //   basket: basket,
    //   amount: 1000,
    //   created: "yes",
    // });

    const random = Math.random();
    const docRef = doc(db, "users", user?.email);
    const colRef = collection(
      docRef,
      Math.ceil(random * 100000000000).toString()
      // "checkout_session"
    );
    addDoc(colRef, {
      basket: basket,
      amount: getBasketTotal(basket),
      created: "yes",
    });

    setSucceeded(true);
    setError(null);
    setProcessing(false);
    dispatch({
      type: "EMPTY_BASKET",
    });
    navigate("/orders");
  };
  const handleChange = (event) => {
    //listen to changes in cardElememnt
    //and display any error as the customer type their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
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
          <div className="payment_details">
            {/* stripe payment */}
            <form onSubmit={handlSubmit}>
              <CardElement onChange={handleChange}></CardElement>
              <div className="payment_priceContainer">
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
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
