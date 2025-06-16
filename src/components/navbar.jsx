import React from "react";
import "./navbar.css";
import NavbarBelt from "./NavbarBelt/NavbarBelt";
import NavbarBanner from "./NavbarBanner/NavbarBanner";

const navbar = () => {
  return (
    <div className="navbar">
      <NavbarBelt />
      <NavbarBanner />
    </div>
  );
};

export default navbar;
