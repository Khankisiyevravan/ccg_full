import React, { useState } from "react";
import axios from "../../api/axios";

const Contact = () => {
  const [contactData, setContactData] = useState({
    full_name: "",
    email: "",
    title: "",
    content: "",
  });
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const sendData = (e) => {
    e.preventDefault();
    console.log(contactData);
    axiosInstance
      .post("/api/contacts", {
        data: contactData,
      })
      .then((response) => {
        console.log(response);
        // setModalShow(true);
        // setModalMessage("success");
      })
      .catch((err) => {
        console.log(err);
        // setModalShow(true);
        // setModalMessage("error");
      });
  };

  return (
    <>
      <section id="contact_form">
        <div class="container">
          <div class="contact">
            <h2>
              Əlaqə <span> məlumatları</span>
              <span class="underline"></span>
            </h2>
            <p style={{ marginTop: "20px" }}>
              Aşağıdakı məlumatları istifadə edərək bizimlə əlaqə saxlaya
              bilərsiniz.
            </p>
            <div id="icons">
              <div id="icon_first">
                <i class="fa-light fa-location-dot"></i>
                <div>
                  <h4>Məkan</h4>
                  <span>Bakı şəhəri, Ibrahimpaşa Dadaşov 37</span>
                </div>
              </div>
              <div id="icon_second">
                <i class="fa-solid fa-envelope-open"></i>
                <div>
                  <h4>E-poçt</h4>
                  <span>info@caspiancapitalgroup.az</span>
                </div>
              </div>
              <div id="icon_third">
                <i class="fa-solid fa-phone"></i>
                <div>
                  <h4>Əlaqə nömrələri</h4>
                  <span>
                    +994 12 541 65 75 <br /> +994 50 224 31 70 ( Wp )
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="form">
            <h2>
              Əlaqə <span>formu </span>
              <span class="underline"></span>
            </h2>
            <div id="form_input">
              <input
                type="text"
                placeholder="Soyad Ad"
                class="name_email_web"
                name="full_name"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="E-poçt"
                class="name_email_web"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Başlıq"
                class="name_email_web"
                name="title"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <textarea
              name="content"
              placeholder="Məzmun"
              id="big_textarea"
              onChange={(e) => handleChange(e)}
            ></textarea>
            <button id="submit_btn" onClick={(e) => sendData(e)}>
              Göndər
            </button>
            <ul id="first_ul">
              <li>
                <a href="#" class="facebook">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" class="twit_vimeo">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" class="dribbble">
                  <i class="fa-brands fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#" class="instagram">
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
