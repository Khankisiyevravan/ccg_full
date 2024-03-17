import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div id="boxes">
            <div className="box">
              <h3>
                Haqqımızda
                <span></span>
              </h3>
              <div className="img_box">
                <a href="#">
                  <img
                    src="/assets/images/ccg/logo_ag.png"
                    alt=""
                    style={{ maxWidth: "300px" }}
                  />
                </a>
              </div>
              <p>
                Şirkətimiz inşaat və layihələndirmə, mühəndislik və sənaye
                xidmətləri, təchizat , treydinq, kənd təsərrüfatı sahələrində
                fəaliyyət göstərən şirkətlər qrupudur .{" "}
              </p>
              <ul id="one_ul">
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/caspiancapitalgroup.az"
                    className="facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twit_vimeo">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="dribbble">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="fa-brands fa-square-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twit_vimeo">
                    <i className="fa-brands fa-vimeo-v"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="box">
              <h3>
                Mənbələr
                <span></span>
              </h3>
              <ul id="second_ul">
                <li>
                  <a href="#">
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Ana səhifə
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Şirkətlər
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Haqqımızda
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Xəbərlər
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Bizimlə Əlaqə
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Sektorlar
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Sertifikatlar
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Əməkdaşlıq
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Contact Us
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="box">
              <h3>
                Əlaqə saxlayın
                <span></span>
              </h3>
              <p>
                <i className="fa-light fa-location-dot"></i>
                Bakı şəhəri, Ibrahimpaşa Dadaşov 37
              </p>
              <p>
                <i className="fa-solid fa-mobile-screen"></i>+994 12 541 65 75 ,
                +994 50 224 31 70 ( Wp )
              </p>
              <p>
                <i className="fa-thin fa-envelope-open"></i>
                <a href="#">info@caspiancapitalgroup.az</a>
              </p>
              <div id="img_in_footer">
                <img
                  src="https://www.themesindustry.com/html/xwin/images/footer-map.png"
                  alt=""
                  id="img_footer"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <div id="under_footer">
        <div className="container">
          <p id="under_footer_text">
            Copyright © 2024
            <a href="#"> ССG</a>. all rights reserved.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
