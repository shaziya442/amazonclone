import React from "react";
import "./NavbarBelt.css";
import amazonlogo from "../../assets/AmazonLogo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import india from "../../assets/india.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarBelt = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="navbarBelt">
      <div className="leftNavBelt">
        <Link to={"/"} className="leftNavBeltLogo">
          <img
            className="amazonNavbarLogo"
            src={amazonlogo}
            alt="amazone-logo"
          />
          <span className="navbar_inlogo">.in</span>
        </Link>
        <div className="navbarBeltLocation">
          <div className="navbarBeltLocationImg">
            <LocationOnIcon
              className="navbarBeltLocationImgIcon"
              sx={{ fontSize: "22px" }}
            />
          </div>
          <div className="navbarBeltLocationPlace">
            <div className="navbarBeltLocationTop">
              Delivering to pune 411032
            </div>
            <div className="navbarBeltLocationBottom">Update Location</div>
          </div>
        </div>
      </div>

      <div className="navbarBeltSearchBox">
        <div className="navbarBeltSearchDiv">
          <div className="navbarBeltSearchBoxAll">
            <div className="navbarBeltSearchBoxAllText">All</div>
            <ArrowDropDownIcon sx={{ fontSize: "20px" }} />
          </div>
          <input
            type="text"
            className="navbarBeltInputSearchBox"
            placeholder="Search Amazon.in"
          />
          <div className="searchIconNavbarBelt">
            <SearchIcon
              sx={{ fontSize: "26px" }}
              className="searchIconNavbarBeltIcon"
            />
          </div>
        </div>
      </div>

      <div className="rightNavBelt">
        <div className="indianFlagCode">
          <img src={india} alt="india-flag" className="indiaflag" />
          <div className="indiaCode">
            EN{" "}
            <ArrowDropDownIcon
              sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }}
              className="indiaCodeDrp"
            />
          </div>
        </div>

        <div className="helloSigninBelt">
          <div className="helloTopSigninBelt">Hello, User</div>
          <div className="helloBottomSigninBelt">Accounts & Lists</div>
        </div>

        <div className="helloSigninBelt">
          <div className="helloTopSigninBelt">Return</div>
          <div className="helloBottomSigninBelt">& Orders</div>
        </div>
        <Link to={"./cart"} className="helloSigninBelt">
          <span className="cartItemNumber">{cartItems.length}</span>
          <div className="helloTopSigninBelt">
            <ShoppingCartOutlinedIcon />
            <span className="cartTitle">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarBelt;
