import React from "react";
import Certificates from "../components/cerificates/Certificates";
import { Link } from "react-router-dom";

const Certificate = () => {
  return (
    <>
      <section class="background_foto">
        <div class="container">
          <h1>Sertifikatlar</h1>
          <p></p>
          <div class="flex_end">
            <div class="page_nav">
              <Link to="/" href="#">
                Ana səhifə
              </Link>
              <span>
                <i
                  class="fa-solid fa-chevrons-right"
                  style={{ fontSize: "9px", paddingRight: "5px" }}
                ></i>
                Blog
              </span>
            </div>
          </div>
        </div>
      </section>
      <Certificates />
    </>
  );
};

export default Certificate;
