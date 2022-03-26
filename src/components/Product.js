import "./Product.css";
import React from "react";
import { useDataLayerValue } from "../Context/DataLayer";

export const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useDataLayerValue();

  console.log("thhis is basket", basket);
  const addToBasket = () => {
    dispatch({
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
      type: "ADD_TO_BASKET",
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <p>{rating}</p>
        </div>
        <img className="product_image" src={image} />

        <button onClick={addToBasket} className="product_button">
          Add to basket
        </button>
      </div>
    </div>
  );
};
