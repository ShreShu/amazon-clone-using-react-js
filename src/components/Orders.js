import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../Context/DataLayer";
import { db } from "../firebase/firebase";

export const Orders = () => {
  const [{ basket, user }, dispatch] = useDataLayerValue();
  const [orders, setOrders] = useState([]);

  const getSubCollections = async (email) => {
    const subcollections = await getDocs(
      collection(db, "users", email, "12501184723")
    );
    subcollections.forEach((doc) => {
      console.log(doc.data());
      setOrders(doc.data().basket);
    });
  };

  useEffect(() => {
    getSubCollections(user.email);
  }, []);

  return (
    <div>
      <h1>
        {orders.map((order) => (
          <div className="basket" key={Math.random()}>
            <div className="basket_image">
              <img src={order.image} alt="" srcset="" />
            </div>
            <div className="basket_infor">
              <h3>{order.title}</h3>
              <p>{order.price}</p>
              <p>{order.rating}</p>
            </div>
          </div>
        ))}
      </h1>
    </div>
  );
};
