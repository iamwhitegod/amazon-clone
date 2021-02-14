import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src={
            "https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
          }
          alt="logo"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__search-icon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "./login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__option-line-1">{`Hello ${
              user ? user.email : "Guest"
            }`}</span>
            <span className="header__option-line-2">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option-line-1">Returns</span>
          <span className="header__option-line-2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-1">Your</span>
          <span className="header__option-line-2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__option-basket">
            <ShopingBasketIcon />
            <span className="header__option-line-2 header__basket-count">
              {/** Come back and understand how optional chaining works */}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
