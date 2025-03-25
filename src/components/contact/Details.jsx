import React from "react";

const Details = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 mb-10">
        <div className="flex flex-col items-center">
          <h4 className="h4 mb-5">Call us:</h4>
          <p className="text-2xl text-wine font-DMsans font-bold">
            +1-234-567-8900
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="h4 mb-5">Hours:</h4>
          <p className="text-lg font-DMsans max-w-48">
            Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="h4 mb-5">Our Loaction:</h4>
          <p className="text-lg font-DMsans max-w-52">
            123 Bridge Street Nowhere Land, LA 12345 United States
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
