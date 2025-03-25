import React, { Fragment } from "react";
import AboutData from "../../data/AboutData";
import Review from "../home/Review";

const Video = () => {
  return (
    <div>
      <iframe
        className="w-full"
        height="720"
        src="https://www.youtube.com/embed/_dui6BUmMBg"
        title="ELEMENTS BAR AND GRILL || BEST CINEMATIC RESTAURANT PROMOTIONAL VIDEO || SYDNEY, AUSTRALIA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="container">
        <div className="grid grid-cols-3 gap-5 my-16">
          {AboutData.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="flex gap-5 items-start">
                  <img src={item.img} alt="img" />
                  <div>
                    <h4 className="h4 font-DM sans">{item.title}</h4>
                    <p className="max-w-72 font-DM sans text-sm mt-5">
                      {item.para}
                    </p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Video;
