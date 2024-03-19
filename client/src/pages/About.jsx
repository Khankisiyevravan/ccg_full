import React from "react";
import Statics from "../components/statics/Statics";
import { Link } from "react-router-dom";
import "./about.css";
import Colleagues from "../components/SwiperSlider/Colleagues";
import PageHeader from "../components/pageInside/PageHeader";
import AboutSection from "../components/sections/AboutSection";
import InsaatPortfeli from "../components/sections/InsaatPortfeli";
function About() {
  const title = "Haqqımızda";
  const bg = "/assets/images/catalog_images/haqqimizda.jpeg";
  const locs = ["Ana səhifə", "Haqqımızda"];
  return (
    <>
      <PageHeader bg={bg} title={title} locs={locs} />
      <AboutSection />
      <InsaatPortfeli />
      {/* <Statics /> */}
      <Colleagues />
      {/* <section className="background_foto">
        <div className="container">
          <h1>Haqqımızda</h1>
          <p></p>
          <div className="flex_end">
            <div className="page_nav">
              <Link to="/" href="#">
                Ana səhifə
              </Link>
              <span>
                <i
                  className="fa-solid fa-chevrons-right"
                  style={{ fontSize: "9px", paddingRight: "5px" }}
                ></i>
                Blog
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="padding">
        <div className="container aboutus">
          <div className="row">
            <div className="fl_page_two">
              <h2 className="heading heading_space">
                Şirkətimizin <span> Tarixi</span>
                <span className="line_under"></span>
              </h2>
              <h4 className="mrg_btm">
                Caspian Capital Group fəaliyyət göstərdiyi sahələr üzrə
                ixtisaslaşmış şirkətləri, peşəkar komandası, qabaqcıl təcrübəsi,
                müasir və innovativ yanaşması ilə müştərilərinə keyfiyyətli və
                etibarlı xidmətlərini uğurla təmin edir.
              </h4>
              <p className="mrg_btm">
                Şirkətimiz inşaat və layihələndirmə, mühəndislik və sənaye
                xidmətləri, təchizat , treydinq, kənd təsərrüfatı sahələrində
                fəaliyyət göstərən şirkətlər qrupudur .
              </p>
              <p className="mrg_btm">
                Qrup daxilində 5 sektor üzrə 7 şirkətimiz fəaliyyət göstərir.
              </p>
            </div>
            <div className="fl_page_three">
              <div className="image">
                <img src="/assets/images/other/download.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="history" className="padding bg_grey">
        <div className="container">
          <div className="row">
            <div className="fl_page_one">
              <h2 className="heading heading_space">
                <span></span> Xidmətlər
                <span className="line_under"></span>
              </h2>
            </div>
          </div>
          <div id="dsad">
            {
              data.map((d)=>(
                <div>
                  {d.title}
                </div>
              ))
            }
          </div>
          {/* <div className="row">
            <div className="fl_page_four flex_page_one history_wrap mrg_btm">
              <div className="row">
                <div className="pos_rel_one fl_page_three flex_page_two">
                  <div className="image">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/history1.jpg"
                      alt="our history"
                    />
                  </div>
                </div>
                <div className="pos_rel_two fl_page_two flex_page_two">
                  <h3>
                    <span className="year">1991</span> . Structure was Founded
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    occaecat aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div className="fl_page_four flex_page_one history_wrap mrg_btm">
              <div className="row">
                <div className="pos_rel_one fl_page_three flex_page_two">
                  <div className="image">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/history2.jpg"
                      alt="our history"
                    />
                  </div>
                </div>
                <div className="pos_rel_two fl_page_two flex_page_two">
                  <h3>
                    <span className="year">1991</span> . Structure was Founded
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    occaecat aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div className="fl_page_four flex_page_one history_wrap mrg_btm">
              <div className="row">
                <div className="pos_rel_one fl_page_three flex_page_two">
                  <div className="image">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/history2.jpg"
                      alt="our history"
                    />
                  </div>
                </div>
                <div className="pos_rel_two fl_page_two flex_page_two">
                  <h3>
                    <span className="year">1991</span> . Structure was Founded
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    occaecat aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div className="fl_page_four flex_page_one history_wrap mrg_btm">
              <div className="row">
                <div className="pos_rel_one fl_page_three flex_page_two">
                  <div className="image">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/history4.jpg"
                      alt="our history"
                    />
                  </div>
                </div>
                <div className="pos_rel_two fl_page_two flex_page_two">
                  <h3>
                    <span className="year">1991</span> . Structure was Founded
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
      <Colleagues /> */}
    </>
  );
}

export default About;
