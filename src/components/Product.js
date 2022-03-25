import "./Product.css";
import React from "react";

export const Product = () => {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean Startup</p>
        <p className="product_priice">
          <small>$</small>
          <strong>300</strong>
        </p>
        <div className="product_rating">
          <p>***</p>
        </div>
        <img
          className="product_image"
          src="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
        />

        <button>Add to basket</button>
      </div>
    </div>
  );
};
