import React from "react";
import Service1 from "/src/assets/service1.png";
import Service2 from "/src/assets/service2.png";
import Service3 from "/src/assets/service3.png";
import { IoTimeOutline } from "react-icons/io5";
import { RiPriceTagLine } from "react-icons/ri";
import { PiTrolleySuitcase } from "react-icons/pi";

const Service = () => {
  return (
    <div className="bg-BackGround">
      <div className="container">
        <div className="grid grid-cols-2 items-center justify-center">
          <div className="flex gap-5 my-24">
            <img className="h-[580px]" src={Service1} alt="img" />
            <div className="flex flex-col gap-3 mt-6">
              <img src={Service2} alt="img" />
              <img src={Service3} alt="img" />
            </div>
          </div>
          <div className="my-24 pl-10">
            <h2 className="h2 max-w-lg mb-10">Fastest Food Delivery in City</h2>
            <p className="text-sm text-grayBlack font-DM sans max-w-[350px] mb-10">
              Our visual designer lets you quickly and of drag a down your way
              to customapps for both keep desktop.
            </p>
            <div className="">
              <p className="flex gap-4 m-5">
                <IoTimeOutline className="bg-wine rounded-full w-8 h-8 p-1" />
                <span className="text-xl font-DM sans font-medium">
                  Delivery within 30 minutes
                </span>
              </p>
              <p className="flex gap-4 m-5">
                <RiPriceTagLine className="bg-wine rounded-full w-8 h-8 p-1" />
                <span className="text-xl font-DM sans font-medium">
                  Best Offer & Prices
                </span>
              </p>
              <p className="flex gap-4 m-5">
                <PiTrolleySuitcase className="bg-wine rounded-full w-8 h-8 p-1" />
                <span className="text-xl font-DM sans font-medium">
                  Online Services Available
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
