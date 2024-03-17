import React from "react";
import "./PageHeader.css"
const PageHeader = ({ bg, title, locs }) => {
  return (
    <div
      className="page_header"
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      <div className="container">
        <h4>{title}</h4>
        {/* <div className="page_navigation">
          <span>{locs&&locs[0]}</span>
          <i className="fa-regular fa-chevrons-right"></i>
          <span>{locs&&locs[1]}</span>
        </div> */}
      </div>
    </div>
  );
};

export default PageHeader;
