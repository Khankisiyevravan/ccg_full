import React from "react";
import "./ServiceCard.css";
const ServiceCard = ({ service }) => {
  return (
    <div className="service_card">
      <div className="service_card_text">
        <h4>{service?.service_name}</h4>
        <p>{service?.service_about}</p>
      </div>
      <div className="service_card_image">
        <img
          src={
            process.env.REACT_APP_IMAGE_URL +
            service?.service_image?.data?.attributes?.url
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default ServiceCard;
