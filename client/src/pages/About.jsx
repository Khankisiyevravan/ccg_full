import React from "react";
import Statics from "../components/statics/Statics";
import { Link } from "react-router-dom";

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
      {/* <section id="tours" class="bg_grey padding">
        <div class="container tour_media">
          <div class="row">
            <div class="tour_body">
              <h2 class="heading heading_space">
                <span>Our </span> Company<span class="line_under"></span>
              </h2>
              <h4 class="mrg_btm">
                It’s all going about making ideas happen. Nor again is anyone
                who loves or pursues or desires{" "}
              </h4>
              <p class="mrg_btm">
                Proin sagittis feugiat elit finibus pretium. Donec et tortor non
                purus vulputate tincidunt. Cras congue posuer eros eget egestas.
                Aenean varius ex ut ex laoreet fermentum. odio Proin mattis
                congue tristique.
              </p>
              <a class="btn_common blue border_radius" href="#">
                Read more
              </a>
            </div>
            <div class="tour_feature">
              <img
                src="https://www.themesindustry.com/html/xwin/images/tour.jpg"
                alt="our Tour"
              />
            </div>
          </div>
        </div>
        <div class="container_items">
          <div class="cbp-item">
            <img
              src="https://www.themesindustry.com/html/xwin/images/tour1.jpg"
              alt=""
            />
            <div class="overlay">
              <div class="centered text-center">
                <a href="#" class="cbp-lightbox opens">
                  {" "}
                  <i class="fa-regular fa-maximize"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="cbp-item">
            <img
              src="https://www.themesindustry.com/html/xwin/images/tour1.jpg"
              alt=""
            />
            <div class="overlay">
              <div class="centered text-center">
                <a href="#" class="cbp-lightbox opens">
                  {" "}
                  <i class="fa-regular fa-maximize"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="cbp-item">
            <img
              src="https://www.themesindustry.com/html/xwin/images/tour1.jpg"
              alt=""
            />
            <div class="overlay">
              <div class="centered text-center">
                <a href="#" class="cbp-lightbox opens">
                  {" "}
                  <i class="fa-regular fa-maximize"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="cbp-item">
            <img
              src="https://www.themesindustry.com/html/xwin/images/tour1.jpg"
              alt=""
            />
            <div class="overlay">
              <div class="centered text-center">
                <a href="#" class="cbp-lightbox opens">
                  {" "}
                  <i class="fa-regular fa-maximize"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="cbp-item">
            <img
              src="https://www.themesindustry.com/html/xwin/images/tour1.jpg"
              alt=""
            />
            <div class="overlay">
              <div class="centered text-center">
                <a href="#" class="cbp-lightbox opens">
                  {" "}
                  <i class="fa-regular fa-maximize"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="swiper_in_about">
        <div class="container">
          <div class="row">
            <div class="fl_page_one">
              <h2 class="heading heading_space">
                <span>Our </span> Team<span class="line_under"></span>
              </h2>
            </div>
          </div>
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="image bottom20">
                  <img
                    src="https://www.themesindustry.com/html/xwin/images/team1.jpg"
                    alt="experts"
                    class="img-responsive border_radius"
                  />
                  <div class="overlay">
                    <div class="centered">
                      <ul class="social_icon">
                        <li>
                          <a href="#" class="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="twitter">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dribble">
                            <i class="fa-light fa-basketball"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="instagram">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="bottom5">Cathy Winslet</h3>
                <h5 class="color mar-bot">
                  <strong>Founder &amp; CEO</strong>
                </h5>
                <p class=" no_bottom">
                  We offer the most complete house renovating services...{" "}
                </p>
                <p> in the country, from kitchen design to remodeling.</p>
              </div>
              <div class="swiper-slide">
                <div class="image bottom20">
                  <img
                    src="https://www.themesindustry.com/html/xwin/images/team1.jpg"
                    alt="experts"
                    class="img-responsive border_radius"
                  />
                  <div class="overlay">
                    <div class="centered">
                      <ul class="social_icon">
                        <li>
                          <a href="#" class="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="twitter">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dribble">
                            <i class="fa-light fa-basketball"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="instagram">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="bottom5">Cathy Winslet</h3>
                <h5 class="color mar-bot">
                  <strong>Founder &amp; CEO</strong>
                </h5>
                <p class=" no_bottom">
                  We offer the most complete house renovating services...{" "}
                </p>
                <p> in the country, from kitchen design to remodeling.</p>
              </div>
              <div class="swiper-slide">
                <div class="image bottom20">
                  <img
                    src="https://www.themesindustry.com/html/xwin/images/team1.jpg"
                    alt="experts"
                    class="img-responsive border_radius"
                  />
                  <div class="overlay">
                    <div class="centered">
                      <ul class="social_icon">
                        <li>
                          <a href="#" class="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="twitter">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dribble">
                            <i class="fa-light fa-basketball"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="instagram">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="bottom5">Cathy Winslet</h3>
                <h5 class="color mar-bot">
                  <strong>Founder &amp; CEO</strong>
                </h5>
                <p class=" no_bottom">
                  We offer the most complete house renovating services...{" "}
                </p>
                <p> in the country, from kitchen design to remodeling.</p>
              </div>
              <div class="swiper-slide">
                <div class="image bottom20">
                  <img
                    src="https://www.themesindustry.com/html/xwin/images/team1.jpg"
                    alt="experts"
                    class="img-responsive border_radius"
                  />
                  <div class="overlay">
                    <div class="centered">
                      <ul class="social_icon">
                        <li>
                          <a href="#" class="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="twitter">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dribble">
                            <i class="fa-light fa-basketball"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="instagram">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="bottom5">Cathy Winslet</h3>
                <h5 class="color mar-bot">
                  <strong>Founder &amp; CEO</strong>
                </h5>
                <p class=" no_bottom">
                  We offer the most complete house renovating services...{" "}
                </p>
                <p> in the country, from kitchen design to remodeling.</p>
              </div>
              <div class="swiper-slide">
                <div class="image bottom20">
                  <img
                    src="https://www.themesindustry.com/html/xwin/images/team1.jpg"
                    alt="experts"
                    class="img-responsive border_radius"
                  />
                  <div class="overlay">
                    <div class="centered">
                      <ul class="social_icon">
                        <li>
                          <a href="#" class="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="twitter">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dribble">
                            <i class="fa-light fa-basketball"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="instagram">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="bottom5">Cathy Winslet</h3>
                <h5 class="color mar-bot">
                  <strong>Founder &amp; CEO</strong>
                </h5>
                <p class=" no_bottom">
                  We offer the most complete house renovating services...{" "}
                </p>
                <p> in the country, from kitchen design to remodeling.</p>
              </div>
              <div class="swiper-slide">
                <div class="image bottom20">
                  <img
                    src="https://www.themesindustry.com/html/xwin/images/team1.jpg"
                    alt="experts"
                    class="img-responsive border_radius"
                  />
                  <div class="overlay">
                    <div class="centered">
                      <ul class="social_icon">
                        <li>
                          <a href="#" class="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="twitter">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dribble">
                            <i class="fa-light fa-basketball"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="instagram">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="bottom5">Cathy Winslet</h3>
                <h5 class="color mar-bot">
                  <strong>Founder &amp; CEO</strong>
                </h5>
                <p class=" no_bottom">
                  We offer the most complete house renovating services...{" "}
                </p>
                <p> in the country, from kitchen design to remodeling.</p>
              </div>
              <div class="swiper-slide">
                <div class="image bottom20">
                  <img
                    src="https://www.themesindustry.com/html/xwin/images/team1.jpg"
                    alt="experts"
                    class="img-responsive border_radius"
                  />
                  <div class="overlay">
                    <div class="centered">
                      <ul class="social_icon">
                        <li>
                          <a href="#" class="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="twitter">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dribble">
                            <i class="fa-light fa-basketball"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="instagram">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="bottom5">Cathy Winslet</h3>
                <h5 class="color mar-bot">
                  <strong>Founder &amp; CEO</strong>
                </h5>
                <p class=" no_bottom">
                  We offer the most complete house renovating services...{" "}
                </p>
                <p> in the country, from kitchen design to remodeling.</p>
              </div>
              <div class="swiper-slide">
                <div class="image bottom20">
                  <img
                    src="https://www.themesindustry.com/html/xwin/images/team1.jpg"
                    alt="experts"
                    class="img-responsive border_radius"
                  />
                  <div class="overlay">
                    <div class="centered">
                      <ul class="social_icon">
                        <li>
                          <a href="#" class="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="twitter">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dribble">
                            <i class="fa-light fa-basketball"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="instagram">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="bottom5">Cathy Winslet</h3>
                <h5 class="color mar-bot">
                  <strong>Founder &amp; CEO</strong>
                </h5>
                <p class=" no_bottom">
                  We offer the most complete house renovating services...{" "}
                </p>
                <p> in the country, from kitchen design to remodeling.</p>
              </div>
              <div class="swiper-slide">
                <div class="image bottom20">
                  <img
                    src="https://www.themesindustry.com/html/xwin/images/team1.jpg"
                    alt="experts"
                    class="img-responsive border_radius"
                  />
                  <div class="overlay">
                    <div class="centered">
                      <ul class="social_icon">
                        <li>
                          <a href="#" class="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="twitter">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dribble">
                            <i class="fa-light fa-basketball"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="instagram">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="bottom5">Cathy Winslet</h3>
                <h5 class="color mar-bot">
                  <strong>Founder &amp; CEO</strong>
                </h5>
                <p class=" no_bottom">
                  We offer the most complete house renovating services...{" "}
                </p>
                <p> in the country, from kitchen design to remodeling.</p>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default About;
