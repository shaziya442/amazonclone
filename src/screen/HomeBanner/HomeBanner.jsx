import React from "react";
import "../HomeBanner/HomeBanner.css";
import homeBannerItemProduct from "../../../src/HomeProduct.json";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img
        className="homeBannerImg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/SVM/ncq/2X_buasdhuif._CB795788272_.jpg"
        alt="bannerimage"
      />
      <div className="greyBackgroundHomeBanner"></div>

      <div className="homeBannerItemDiv">
        {homeBannerItemProduct.product.map((item, ind) => {
          return (
            <div className="homeBannerItemDivCard">
              <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
              <div className="imgHomeBannerItemDivCard">
                {item.imgs.map((it, ind) => {
                  return (
                    <div className="imgBannerHomeDiv">
                      <img src={it} alt="" className="imgBannerHomeDivImg" />
                      <div className="imgBannerImgName">See Details</div>
                    </div>
                  );
                })}
              </div>
              <div className="seeMoreHomeBanner">See more</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeBanner;
