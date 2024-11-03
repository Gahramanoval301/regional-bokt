import React from "react";

const LocationMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9511415562124!2d49.85458757575429!3d40.38777545740148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d3e29ec4453%3A0xb7471273ab116539!2sRegional%20BOKT!5e0!3m2!1saz!2saz!4v1730562561957!5m2!1saz!2saz"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
