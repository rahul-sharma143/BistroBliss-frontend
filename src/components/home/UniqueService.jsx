import React, { Fragment } from "react";
import UniqueServiceData from "../../data/UniqueServiceData";

const UniqueService = () => {
  return (
    <div className="container">
      <h2 className="h2 max-w-2xl mt-24 mb-10">
        We also offer unique services for your events
      </h2>
      <div className="grid grid-cols-4 mb-24 gap-5">
        {UniqueServiceData.map((item, index) => {
          return (
            <Fragment key={index}>
              <div>
                <img className="w-full" src={item.img} alt="catering" />
                <h3 className="h3 text-grayBlack font-bold font-DM sans my-5">
                  {item.title}
                </h3>
                <p className="text-sm text-grayBlack font-DM sans max-w-60">
                  {item.para}.
                </p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default UniqueService;
