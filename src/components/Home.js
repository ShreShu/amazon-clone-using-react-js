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
        <Product
          id="1"
          title="The lean startup"
          image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
          price="2.99"
          rating="4/5"
        />
        <Product
          id="1"
          title="The lean startup"
          image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
          price="2.99"
          rating="4/5"
        />
      </div>
      <div className="home_row">
        <Product
          id="2"
          title="Alexa"
          image="https://topreveal.com/wp-content/uploads/2017/05/Best-Amazon-Alexa-Devices-Featured.jpg"
          price="2.99"
          rating="4/5"
        />
        <Product
          id="3"
          title="Siri"
          image="http://cdn.theunlockr.com/wp-content/uploads/2011/11/Siri.jpg"
          price="2.99"
          rating="4/5"
        />
        <Product
          id="4"
          title="Narzo 20 pro"
          image="https://images.fonearena.com/blog/wp-content/uploads/2020/09/realme-Narzo-20A.jpg"
          price="2.99"
          rating="4/5"
        />
      </div>
      <div className="home_row">
        <Product
          id="1"
          title="The lean startup"
          image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
          price="2.99"
          rating="4/5"
        />
      </div>
    </div>
  );
};
