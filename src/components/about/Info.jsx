import React from "react";
import InfoImg from "/src/assets/aboutImg/InfoImg.png";
import Review from "../home/Review";

const Info = () => {
  return (
    <>
      <div className="bg-BackGround">
        <div className="container">
          <div className="grid grid-cols-2 items-center justify-center py-20">
            <div>
              <h2 className="h2 max-w-[550px]">
                A little information for our valuable guest
              </h2>
              <p className="text-[16px] my-5 max-w-[530px]">
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
              <div className="grid grid-cols-2 text-center px-10 mt-10 gap-5">
                <div className="bg-white border border-bg rounded-lg py-8">
                  <h2 className="h2 mb-3">3</h2>
                  <p className="font-DM sans font-medium">Location</p>
                </div>
                <div className="bg-white border border-bg rounded-lg py-8">
                  <h2 className="h2 mb-3">1995</h2>
                  <p className="font-DM sans font-medium">Founded</p>
                </div>
                <div className="bg-white border border-bg rounded-lg py-8">
                  <h2 className="h2 mb-3">65+</h2>
                  <p className="font-DM sans font-medium">Staff Members</p>
                </div>
                <div className="bg-white border border-bg rounded-lg py-8">
                  <h2 className="h2 mb-3">100%</h2>
                  <p className="font-DM sans font-medium">Satisfied Customer</p>
                </div>
              </div>
            </div>
            <div className="ml-32">
              <img src={InfoImg} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <Review />
    </>
  );
};

export default Info;
