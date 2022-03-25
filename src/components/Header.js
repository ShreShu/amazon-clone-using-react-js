import "./Header.css";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
export const Header = () => {
  return (
    <div className="header">
      <img
        src="http://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
        alt=""
        srcset=""
        className="header_logo"
      />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="optionLineOne">Hello Shubham</span>
          <span className="optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span className="optionLineTwo headerBasketCount">0</span>
        </div>
      </div>
    </div>
  );
};
