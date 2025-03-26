import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactUser } from "../../utils/userUtils";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await contactUser(data);
      console.log(response.data);
      toast.success("Message has been sent");
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
    <div className=" bg-white w-[800px] shadow-xl rounded-2xl p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-8"
      >
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-bg p-3 rounded-3xl"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-bg p-3 rounded-3xl"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Subject Field */}
        <div className="flex flex-col col-span-2">
          <label htmlFor="subject" className="font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="border border-bg p-3 rounded-3xl"
            placeholder="Enter the subject"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">
              {errors.subject.message}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col col-span-2">
          <label htmlFor="message" className="font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="border border-bg p-3 rounded-3xl"
            placeholder="Write your message"
            rows="4"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <button type="submit" className="button col-span-2">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
