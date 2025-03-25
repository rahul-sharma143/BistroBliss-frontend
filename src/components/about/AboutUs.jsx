import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import AboutImg from "/src/assets/aboutImg/AboutImg.png";
import NavBar from "../home/NavBar";

const AboutUs = () => {
  return (
    <div className="bg-BackGround">
      <div className="container grid grid-cols-2 items-center justify-center py-20">
        <div className="relative z-0">
          <img
            className="relative -z-10 top-0 left-0 w-[600px]"
            src={AboutImg}
            alt="aboutus"
          />
          <div className="absolute z-0 -bottom-10 right-32 bg-bg rounded-xl p-10 animate-bounce">
            <h3 className="h3 font-DM sans text-grayBlack font-bold mt-2">
              Come and Visit us
            </h3>
            <div className="py-10">
              <p className="flex gap-4 items-center pb-3">
                <FiPhoneCall />
                <span className="font-DM sans text-lg text-grayBlack">
                  (414) 857 - 0107
                </span>
              </p>
              <p className="flex gap-4 items-center pb-3">
                <AiOutlineMail />
                <span className="font-DM sans text-lg text-grayBlack">
                  happytummy@restaurant.com
                </span>
              </p>
              <p className="flex gap-4 items-start">
                <SlLocationPin />
                <span className="max-w-64">
                  837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="h2 max-w-xl mb-10">
            We provide healthy food for your family.
          </h2>
          <p className="text-lg text-grayBlack font-DM sans font-medium max-w-[540px] mb-10">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p className="text-sm text-grayBlack font-DM sans max-w-[480px] mb-10">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
