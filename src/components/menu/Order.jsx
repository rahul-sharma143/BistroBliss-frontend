import React, { Fragment } from "react";
import OrderAppsData from "../../data/OrderAppsData";

const Order = () => {
  return (
    <div className="bg-BackGround mt-24">
      <div className="container">
        <div className="grid grid-cols-2 items-center justify-center">
          <div className="max-w-lg my-20 pl-20">
            <h2 className="h2">You can order through apps</h2>
            <p className="font-DMsans max-w-xs mt-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
          <div className="grid grid-cols-3 my-24 gap-5">
            {OrderAppsData.map((item, index) => {
              return (
                <Fragment key={index}>
                  <div className="bg-white py-8 px-10 rounded-xl">
                    <img src={item.img} alt="apps" />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
