import React from "react";
import "./CompanyCard.css";
const CompanyCard = ({ info }) => {
  return (
    <div className="company_card">
      <div className="company_card_logo">
        <img
          src={
            process.env.REACT_APP_IMAGE_URL + info?.logo?.data?.attributes?.url
          }
          alt=""
        />
      </div>
      <div className="company_card_name">{info?.name}</div>
    </div>
  );
};

export default CompanyCard;
