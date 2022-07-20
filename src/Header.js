import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  console.log(basket);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* amazon logo on left */}
      <div>
        <Link to="/">
          <img
            className="header__logo"
            src="https://th.bing.com/th/id/R.d9c2f86b2be0c72318616c4e1415ac3f?rik=%2bvK1lFYKtoBA0g&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2flogopedia%2fimages%2f1%2f19%2fAmazon-logo-png-transparent-white.png%2frevision%2flatest%3fcb%3d20140523171103&ehk=C4SRGqsVQTWXcf08Ng5udn%2bbJrKFlbJbNWOkKhtaPmc%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </Link>
      </div>

      {/* search bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/*now npm install @material-ui/core and @material-ui/icons */}
        <SearchIcon className="header__searchicon" />
      </div>

      {/* 3 links including basket link are wrapped inside a header__nav container or class */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "./login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__option1">Hello {user?.email}</span>
            <span className="header__option2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header__option1">Returns</span>
            <span className="header__option2">& orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option1">Your</span>
            <span className="header__option2">Prime</span>
          </div>
        </Link>
        {/* 4th link or basket with the number of items */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionbasket">
            {/* 1-shopping basket icon */}
            <AddShoppingCartIcon className="header__iconbasket" />
            {/* 2-number of items in basket */}
            <span className="header__optionlinetwo header__basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
