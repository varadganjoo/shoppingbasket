import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import image from "./logo/telstra__logo.jpg";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__backButton headerIcon" data-tool-tip="Home">
          <Link to="/">
            <HomeIcon
              className="header__back"
              fontSize="large"
              style={{ color: "black" }}
            />
          </Link>
        </div>
        <div
          className="header__optionBasket headerIcon"
          data-tool-tip="Checkout"
        >
          <Link to="/checkout">
            <ShoppingBasketIcon
              className="header__basket"
              fontSize="large"
              style={{ color: "black" }}
            />
            <a className="header__basketCount">{basket?.length}</a>
          </Link>
        </div>
      </div>
      <div className="header__logo headerIcon" data-tool-tip="telstra.com.au">
        <a
          className="logo"
          href="https://telstra.com.au"
          rel="noreferrer"
          target="_blank"
        >
          <img src={image} className="telstra__logo" alt="Telstra Logo" />
        </a>
      </div>
    </div>
  );
}

export default Header;
