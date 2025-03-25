import React from "react";
import ContactBanner from "../components/contact/ContactBanner";
import ContactForm from "../components/contact/ContactForm";
import Details from "../components/contact/Details";

const ContactUs = () => {
  return (
    <div>
      <div className="relative z-0">
        <ContactBanner />
        <div className="absolute z-10 -bottom-1/2 left-[30%]">
          <ContactForm />
        </div>
      </div>
      <Details />
    </div>
  );
};

export default ContactUs;
