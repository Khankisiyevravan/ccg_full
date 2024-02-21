import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div id="boxes">
            <div class="box">
              <h3>
                Haqqımızda
                <span></span>
              </h3>
              <div class="img_box">
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
                    class="facebook"
                  >
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
                <li>
                  <a href="#" class="twit_vimeo">
                    <i class="fa-brands fa-vimeo-v"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="box">
              <h3>
                Mənbələr
                <span></span>
              </h3>
              <ul id="second_ul">
                <li>
                  <a href="#">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Ana səhifə
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Şirkətlər
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Haqqımızda
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Xəbərlər
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Bizimlə Əlaqə
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Sektorlar
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Sertifikatlar
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Əməkdaşlıq
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    Contact Us
                  </a>
                </li> */}
              </ul>
            </div>
            <div class="box">
              <h3>
                Keep in Touch
                <span></span>
              </h3>
              <p>
                <i class="fa-light fa-location-dot"></i>
                Bakı şəhəri, Ibrahimpaşa Dadaşov 37
              </p>
              <p>
                <i class="fa-solid fa-mobile-screen"></i>+994 12 541 65 75 ,
                +994 50 224 31 70 ( Wp )
              </p>
              <p>
                <i class="fa-thin fa-envelope-open"></i>
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
      <div id="under_footer">
        <div class="container">
          <p id="under_footer_text">
            Copyright © 2024
            <a href="#"> ССG</a>. all rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
