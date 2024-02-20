import React from "react";
import Contact from "../components/form/ContactForm";

const Services_detail = () => {
  return (
    <>
      <section class="background_foto">
        <div class="container">
          <h1>Services Detail</h1>
          <p>
            We offer the most complete house renovating services in the country
          </p>
          <div class="flex_end">
            <div class="page_nav">
              <span>You are here:</span>
              <a href="#">Home</a>
              <span>
                <i
                  class="fa-solid fa-chevrons-right"
                  style={{ fontSize: "9px" }}
                ></i>
                Services
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="sdetails_section">
        <div class="container">
          <div id="left_detail">
            <div
              id="img_in_details"
              style={{
                border: "1px solid black",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img src="/assets/images/other/caspianenergyco.jpg" alt="" />
            </div>
            <div id="div_course">
              <div id="name_of_teacher">
                <div>
                  <i class="fa-solid fa-users"></i>
                </div>
                <div>
                  <p>Teacher</p>
                  <h5>JOHN PARKER</h5>
                </div>
              </div>
              <div id="name_of_teacher">
                <div>
                  <i class="fa-solid fa-users"></i>
                </div>
                <div>
                  <p>Category</p>
                  <h5>Software Training / Web Coures</h5>
                </div>
              </div>
              <div class="icons_aside">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <div id="text_in_sdetail">
              <h3>Accounting Technologies</h3>
              <p>
                Maecenas cursus mauris libero, a imperdiet enim pellentesque id.
                Aliquam erat volutpat. Suspendisse sit amet sapien at risus
                efficitur sagittis Pellentesque.
              </p>
              <p>
                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                erat dignissim. Sed quis rutrum tellus, sit amet viverra felis.
                Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum,
                venenatis malesuada felis quis, ultricies convallis neque.
                Pellentesque tristique fringilla tempus. Vivamus bibendum nibh
                in dolor pharetra, a euismod nulla dignissim. Aenean viverra
                tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium,
                consectetur leo at, congue quam. Nullam hendrerit porta ante
                vitae tristique. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia Curae; Vestibulum ligula
                libero, feugiat faucibus mattis eget, pulvinar et ligula.
              </p>
              <ul>
                <li>Donec porta ultricies urna, faucibus magna dapibus.</li>
                <li>
                  Etiam varius tortor ut ligula facilisis varius in a leo.
                </li>
                <li>Folutpat tempor tur duis mattis dapibus, felis amet.</li>
                <li>Donec porta ultricies urna, faucibus magna dapibus.</li>
                <li>
                  Etiam varius tortor ut ligula facilisis varius in a leo.
                </li>
                <li>Folutpat tempor tur duis mattis dapibus, felis amet.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Services_detail;
