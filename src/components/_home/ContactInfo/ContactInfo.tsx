import React from "react";
import LocationAndContactInfo from "./LocationAndContactInfo";
import LocationMap from "./LocationMap";

const ContactInfo = () => {
  return (
    <div className="section-gap mt-12">
      <h3 className="section-title text-center">Əlaqə</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

export default ContactInfo;
