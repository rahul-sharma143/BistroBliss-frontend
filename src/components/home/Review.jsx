import React, { Fragment } from "react";
import ReviewData from "../../data/ReviewData";

const Review = () => {
  return (
    <div className="container">
      <h2 className="h2 text-center my-24">
        What Our Customer Say
      </h2>
      <div className="grid grid-cols-3 items-center mb-24">
        {ReviewData.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="bg-BackGround w-[416px] rounded-xl p-10">
                <h3 className="h3 font-DM sans font-bold text-wine">
                  "{item.reviews}"
                </h3>
                <p className="text-lg text-grayBlack font-DM sans max-w-[350px] my-8">
                  {item.para}
                </p>
                <hr />
                <div className="flex gap-5 items-center mt-5">
                  <img src={item.img} alt="img" />
                  <div className="flex flex-col">
                    <p className="font-DM sans font-bold">{item.name}</p>
                    <span>{item.city}</span>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
