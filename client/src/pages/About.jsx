import React from "react";
import Statics from "../components/statics/Statics";
import { Link } from "react-router-dom";
import "./about.css";
import Colleagues from "../components/SwiperSlider/Colleagues";
function About() {
  return (
    <>
      <section class="background_foto">
        <div class="container">
          <h1>Haqqımızda</h1>
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
      <section id="about" class="padding">
        <div class="container aboutus">
          <div class="row">
            <div class="fl_page_two">
              <h2 class="heading heading_space">
                Şirkətimizin <span> Tarixi</span>
                <span class="line_under"></span>
              </h2>
              <h4 class="mrg_btm">
                Caspian Capital Group fəaliyyət göstərdiyi sahələr üzrə
                ixtisaslaşmış şirkətləri, peşəkar komandası, qabaqcıl təcrübəsi,
                müasir və innovativ yanaşması ilə müştərilərinə keyfiyyətli və
                etibarlı xidmətlərini uğurla təmin edir.
              </h4>
              <p class="mrg_btm">
                Şirkətimiz inşaat və layihələndirmə, mühəndislik və sənaye
                xidmətləri, təchizat , treydinq, kənd təsərrüfatı sahələrində
                fəaliyyət göstərən şirkətlər qrupudur .
              </p>
              <p class="mrg_btm">
                Qrup daxilində 5 sektor üzrə 7 şirkətimiz fəaliyyət göstərir.
              </p>
            </div>
            <div class="fl_page_three">
              <div class="image">
                <img src="/assets/images/other/download.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="history" class="padding bg_grey">
        <div class="container">
          <div class="row">
            <div class="fl_page_one">
              <h2 class="heading heading_space">
                <span></span> Tarixcə
                <span class="line_under"></span>
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="fl_page_four flex_page_one history_wrap mrg_btm">
              <div class="row">
                <div class="pos_rel_one fl_page_three flex_page_two">
                  <div class="image">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/history1.jpg"
                      alt="our history"
                    />
                  </div>
                </div>
                <div class="pos_rel_two fl_page_two flex_page_two">
                  <h3>
                    <span class="year">1991</span> . Structure was Founded
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    occaecat aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div class="fl_page_four flex_page_one history_wrap mrg_btm">
              <div class="row">
                <div class="pos_rel_one fl_page_three flex_page_two">
                  <div class="image">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/history2.jpg"
                      alt="our history"
                    />
                  </div>
                </div>
                <div class="pos_rel_two fl_page_two flex_page_two">
                  <h3>
                    <span class="year">1991</span> . Structure was Founded
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    occaecat aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div class="fl_page_four flex_page_one history_wrap mrg_btm">
              <div class="row">
                <div class="pos_rel_one fl_page_three flex_page_two">
                  <div class="image">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/history2.jpg"
                      alt="our history"
                    />
                  </div>
                </div>
                <div class="pos_rel_two fl_page_two flex_page_two">
                  <h3>
                    <span class="year">1991</span> . Structure was Founded
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    occaecat aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div class="fl_page_four flex_page_one history_wrap mrg_btm">
              <div class="row">
                <div class="pos_rel_one fl_page_three flex_page_two">
                  <div class="image">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/history4.jpg"
                      alt="our history"
                    />
                  </div>
                </div>
                <div class="pos_rel_two fl_page_two flex_page_two">
                  <h3>
                    <span class="year">1991</span> . Structure was Founded
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    occaecat aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Statics />
      <Colleagues />
    </>
  );
}

export default About;
