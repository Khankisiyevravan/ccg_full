import React from "react";
import "./Statics.css";
const Statics = () => {
  return (
    <section
      id="counter"
      className="parallax padding"
      style={{ marginTop: "100px" }}
    >
      <div className="container">
        <div className="row number-counters">
          <div className="fl_page_five flex_page_one counters-item text-center">
            <i className="fa-regular fa-layer-group"></i>
            <strong>125</strong>
            <p>Proyekt</p>
          </div>
          <div className="fl_page_five flex_page_one counters-item text-center">
            <i className="fa-light fa-trophy"></i>
            <strong>18</strong>
            <p>Tender</p>
          </div>
          <div className="fl_page_five flex_page_one counters-item text-center">
            <i className="fa-light fa-alarm-clock"></i>
            <strong>10</strong>
            <p>İllik təcrübə</p>
          </div>
          <div className="fl_page_five flex_page_one counters-item text-center">
            <i className="fa-light fa-face-smile"></i>
            <strong>9</strong>
            <p>Əməkdaşlıq</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statics;
