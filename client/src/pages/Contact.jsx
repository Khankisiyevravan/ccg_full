import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/form/ContactForm";
const Contact = () => {

  return (
    <>
      <section class="background_foto">
        <div class="container">
          <h1>Bizimlə Əlaqə</h1>
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
                Bizimlə Əlaqə
              </span>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default Contact;
