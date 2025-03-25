import React from "react";
import FooterLogo from "../../assets/footer/FooterLogo.png";
import Twitter from "../../assets/footer/twitter.png";
import Facebook from "../../assets/footer/facebook.png";
import Instagram from "../../assets/footer/instagram.png";
import Git from "../../assets/footer/git.png";
import Footer1 from "../../assets/footer/footer1.png"
import Footer2 from "../../assets/footer/footer2.png"
import Footer3 from "../../assets/footer/footer3.png"
import Footer4 from "../../assets/footer/footer4.png"

const Footer = () => {
  return (
    <div className="bg-[#474747]">
      <div className="container">
        <div className="grid grid-cols-2 items-center justify-center py-24">
          <div>
            <img className="mb-6" src={FooterLogo} alt="logo" />
            <p className="text-base text-gray-500 max-w-72 mb-3 font-DMsans">
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
            <div className="flex gap-3">
              <img src={Twitter} alt="twitter" />
              <img src={Facebook} alt="facebook" />
              <img src={Instagram} alt="instagram" />
              <img src={Git} alt="git" />
            </div>
          </div>
          <div>
            <h4 className="h4 mb-3 font-DMsans text-white">
              Follow Us On Instagram
            </h4>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <img src={Footer1} alt="Footer1" />
              </div>
              <div>
                <img src={Footer2} alt="Footer2" />
              </div>
              <div>
                <img src={Footer3} alt="Footer3" />
              </div>
              <div>
                <img src={Footer4} alt="Footer4" />
              </div>
            </div>
          </div>
        </div>
          <hr />
          <p className="text-base font-DMsans text-grayBlack text-center py-5">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
