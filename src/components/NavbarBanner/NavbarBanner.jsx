import React from "react";
import "./NavbarBanner.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";

const NavbarBanner = () => {
  return (
    <div className="navbarBanner">
      <div className="optionNavbarBanner">
        <MenuOutlinedIcon sx={{ fontSize: "24px" }} />
        <div className="allOptionNavbarBanner">All</div>
      </div>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Fresh</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">MX Player</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Sell</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Best Seller</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Today's Deal</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Mobile</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Customer Service</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Fashion</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Prime</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">New Releases</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Electronic's</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Amazon Pays</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Home & Kitchen</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner">Car & Motorbike</div>
      </Link>

      <Link to="/product" className="optionNavbarBanner">
        <div className="allOptionNavbarBanner-1">Computers</div>
      </Link>
    </div>
  );
};

export default NavbarBanner;
