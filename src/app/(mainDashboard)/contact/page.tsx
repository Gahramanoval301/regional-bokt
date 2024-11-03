import ContactForm from "@/components/_contact/ContactForm";
import LocationAndContactInfo from "@/components/_home/ContactInfo/LocationAndContactInfo";
import LocationMap from "@/components/_home/ContactInfo/LocationMap";
import React from "react";

const ContactPage = () => {
  return (
    <div className="mt-5">
      <h2 className="section-title-big text-center">ƏLAQƏ</h2>
      <ContactForm />

      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 section-gap">
        <div>
          <LocationAndContactInfo />
        </div>
        <div>
          <LocationMap />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
