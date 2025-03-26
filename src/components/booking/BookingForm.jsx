import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/booking`,
        data
      );
      console.log(response.data);
      toast.success("You have successfully booked a table!");
    } catch (error) {
      console.error("There was an error!", error);
      toast.error("There was an error with your booking.");
    }
  };
  return (
    <div className="container">
      <div className="bg-white w-[800px] shadow-xl rounded-2xl p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-5"
        >
          <div className="flex flex-col gap-3">
            <label
              className="text-start text-base font-DMsans font-bold"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="border border-bg rounded-3xl p-3"
              type="date"
              id="date"
              {...register("date", { required: "Date is required" })}
            />
            {errors.date && <span>{errors.date.message}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <label
              className="text-start text-base font-DMsans font-bold"
              htmlFor="time"
            >
              Time
            </label>
            <input
              className="border border-bg rounded-3xl p-3"
              type="time"
              id="time"
              {...register("time", { required: "Time is required" })}
            />
            {errors.time && <span>{errors.time.message}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <label
              className="text-start text-base font-DMsans font-bold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border border-bg rounded-3xl p-3"
              type="text"
              placeholder="Enter your name"
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <label
              className="text-start text-base font-DMsans font-bold"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="border border-bg rounded-3xl p-3"
              type="tel"
              placeholder="xxx-xxx-xxxx"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>

          <div className="flex flex-col gap-3 col-span-2">
            <label
              className="text-start text-base font-DMsans font-bold"
              htmlFor="totalPersons"
            >
              Total Persons
            </label>
            <input
              className="border border-bg rounded-3xl p-3"
              type="number"
              id="totalPersons"
              {...register("totalPersons", {
                required: "Total persons is required",
                min: 1,
              })}
            />
            {errors.totalPersons && <span>{errors.totalPersons.message}</span>}
          </div>
          <button type="submit" className="button col-span-2">
            Book A Table
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
