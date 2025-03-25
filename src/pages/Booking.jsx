import React from "react";
import BookingBanner from "../components/booking/BookingBanner";
import BookingForm from "../components/booking/BookingForm";
import MapImg from "../components/booking/MapImg";

const Booking = () => {
  return (
    <div>
      <div className="relative z-0">
        <BookingBanner />
        <div className="absolute z-10 -bottom-1/2 left-[30%]">
          <BookingForm />
        </div>
      </div>
      <MapImg />
    </div>
  );
};

export default Booking;
