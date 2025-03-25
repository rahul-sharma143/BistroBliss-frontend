import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryMenuData from "../../data/CategoryMenuData";

const FoodItems = () => {
  const Category = useSelector((state) => state.menu.value);
  return (
    <div className="container">
        <div className="grid grid-cols-4 gap-5 font-DMsans mb-10">
      {CategoryMenuData.filter((item) => {
        if (Category === "All") {
          return item.title;
        } else {
          return Category === item.category;
        }
      }).map((item, index) => {
        return (
          <Fragment key={index}>
            <div className="flex flex-col items-center text-center border-2 border-bg rounded-2xl">
              <img className="w-full rounded-t-xl" src={item.img} alt="img" />
              <span className="text-2xl font-bold text-wine mt-5">
                {item.price}
              </span>
              <h3 className="h3 my-3 font-bold">{item.title}</h3>
              <p className="max-w-60 mb-8">{item.desc}</p>
            </div>
          </Fragment>
        );
      })}
    </div>
    </div>
  );
};

export default FoodItems;
