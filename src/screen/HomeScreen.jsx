import React from "react";
import "../screen/HomeScreen.css";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeDetails from "./HomeDetails/HomeDetails";

const HomeScreen = () => {
  return (
    <div className="homescreens">
      <HomeBanner />
      <HomeDetails />
    </div>
  );
};

export default HomeScreen;
