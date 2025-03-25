import React from "react";
import BackGround from "/src/assets/bg.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const HnadleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="relative z-0">
      <img
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
        src={BackGround}
        alt="bg"
      />
      <div className="flex flex-col h-[800px] items-center justify-center text-center text-grayBlack">
        <h1 className="h1 max-w-2xl leading-[100px]">
          Best food for your taste
        </h1>
        <p className="text-xl max-w-lg my-5 font-DM sans">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className="flex gap-4 sm:gap-5 font-DM sans">
          <button
            className="button py-3 px-6 text-sm sm:text-base md:text-lg"
            onClick={() => HnadleNavigation("/booking")}
          >
            Book A Table
          </button>
          <button
            className="button py-3 px-6 text-sm sm:text-base md:text-lg"
            onClick={() => HnadleNavigation("/menu")}
          >
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
