import "./Product.css";
import React from "react";

export const Product = ({ title, image, price, rating }) => {
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

        <button className="product_button">Add to basket</button>
      </div>
    </div>
  );
};
