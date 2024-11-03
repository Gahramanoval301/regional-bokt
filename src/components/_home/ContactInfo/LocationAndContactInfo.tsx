import { contacts, locations } from "@/data/ContactLocations";
import React from "react";

const LocationAndContactInfo = () => {
  return (
    <div className="text-base md:text-lg">
      <h5 className="font-semibold mb-2">Ünvanlarımız</h5>
      <div className="mb-5">
        {locations.map((location, i) => (
          <p key={i}>{location}</p>
        ))}
      </div>
      <div>
        {contacts.map(({ id, link, title, Icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            className="flex gap-2 items-center"
          >
            <Icon className="text-lg" />
            <p>{title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LocationAndContactInfo;
