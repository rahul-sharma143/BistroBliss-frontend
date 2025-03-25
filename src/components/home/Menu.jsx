import React, { Fragment } from "react";
import MenuData from "../../data/MenuData";

const Menu = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="h2 font-PlayFair text-grayBlack font-medium my-10">
          Browser Our Menu
        </h2>
      </div>
      <div className="grid grid-cols-4 text-center gap-5 mb-20">
          {MenuData.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="border-2 rounded-xl p-12">
                <img
                  className="bg-bg rounded-3xl p-5 my-10 mx-auto"
                  src={item.icon}
                  alt="BreackFast"
                />
                <h3 className="h3 text-grayBlack font-bold font-DM sans">
                  {item.title}
                </h3>
                <p className="text-lg text-grayBlack font-DM sans my-8 max-w-md">
                  {item.desc}
                </p>
                <button className="bg-none text-lg font-semibold text-wine">
                  {item.button}
                </button>
                </div>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
