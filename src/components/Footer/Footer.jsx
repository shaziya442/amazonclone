import React from "react";
import "./Footer.css";
import amazonLogo from "../../assets/AmazonLogo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerCont1">
          <div className="contentFooterTitle">Get To Know Us</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">About us</div>
            <div className="contentFooterSubTitleCont">Careers</div>
            <div className="contentFooterSubTitleCont">Press release</div>
            <div className="contentFooterSubTitleCont">Amazon science</div>
          </div>
        </div>
        <div className="footerCont1">
          <div className="contentFooterTitle">Connect With Us</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">Instagram</div>
            <div className="contentFooterSubTitleCont">Twitter</div>
            <div className="contentFooterSubTitleCont">Facebook</div>
          </div>
        </div>

        <div className="footerCont1">
          <div className="contentFooterTitle">Make Money With US</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">Sell on Amazon</div>
            <div className="contentFooterSubTitleCont">
              Sell under Amazon Accelerator
            </div>
            <div className="contentFooterSubTitleCont">
              Protect and Build your Brand
            </div>
            <div className="contentFooterSubTitleCont">
              Amazon Global Selling
            </div>
            <div className="contentFooterSubTitleCont">Become an Affiliate</div>
            <div className="contentFooterSubTitleCont">
              Fulfilment by Amazon
            </div>
          </div>
        </div>

        <div className="footerCont1">
          <div className="contentFooterTitle">Lets Us Help You</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">COVID-19 and Amazon</div>
            <div className="contentFooterSubTitleCont">Your Account</div>
            <div className="contentFooterSubTitleCont">Return Center</div>
          </div>
        </div>
      </div>
      <div className="amazonImg">
        <img className="amazonImgFooter" src={amazonLogo} />
      </div>
    </div>
  );
};

export default Footer;
