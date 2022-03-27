import "./Header.css";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useDataLayerValue } from "../Context/DataLayer";
export const Header = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
          alt=""
          srcset=""
          className="header_logo"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="optionLineOne">Hello Shubham</span>
            <span className="optionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingCartIcon onClick={() => navigate("checkout")} />
          <span className="optionLineTwo headerBasketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
};
