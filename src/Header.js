import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img
        src={
          "https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
        }
        alt="logo"
        className="header__logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__search-icon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-line-1">Hello Guest</span>
          <span className="header__option-line-2">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-1">Returns</span>
          <span className="header__option-line-2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-1">Your</span>
          <span className="header__option-line-2">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
