import "./Home.css";

import React from "react";
import { Product } from "./Product";

export const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
          srcset=""
          className="home_image"
        />
      </div>
      <div className="home_row">
        <Product />
        <Product />
      </div>
      <div className="home_row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home_row">
        <Product />
      </div>
    </div>
  );
};
