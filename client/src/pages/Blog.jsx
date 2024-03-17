import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section className="background_foto">
        <div className="container">
          <h1>Yeniliklər</h1>
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
      <section id="blog">
        <div className="container">
          <div id="column_divs_first">
            Xəbər yoxdur !!!
            {/* <div className="column_div_first">
              <div className="img_in_column_div">
                <img
                  src="https://www.themesindustry.com/html/xwin/images/blog1.jpg"
                  alt=""
                  className="img_own"
                />
              </div>
              <div className="text_in_column_div">
                <h3>Before Making your Dream Living Room Make 3D Room Model</h3>
                <ul>
                  <li>
                    <a href="#">May 10, 2017</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-message-lines"></i> 5
                    </a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  debitis ea est illum ipsa itaque libero optio quasi voluptas!
                  Consequuntur deserunt expedita.
                </p>
                <p>
                  fugiat hic illum porro quidem quis recusandae vero? Aliquid
                  assumenda cum delectus eaque eligendi, enim eum excepturi
                  fugit illum impedit in iste laudantium modi natus […]
                </p>
                <button className="read_more_btn">READ MORE</button>
              </div>
            </div>
            <div className="column_div_first">
              <div className="img_in_column_div">
                <img
                  src="https://www.themesindustry.com/html/xwin/images/blog1.jpg"
                  alt=""
                  className="img_own"
                />
              </div>
              <div className="text_in_column_div">
                <h3>Before Making your Dream Living Room Make 3D Room Model</h3>
                <ul>
                  <li>
                    <a href="#">May 10, 2017</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-message-lines"></i> 5
                    </a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  debitis ea est illum ipsa itaque libero optio quasi voluptas!
                  Consequuntur deserunt expedita.
                </p>
                <p>
                  fugiat hic illum porro quidem quis recusandae vero? Aliquid
                  assumenda cum delectus eaque eligendi, enim eum excepturi
                  fugit illum impedit in iste laudantium modi natus […]
                </p>
                <button className="read_more_btn">READ MORE</button>
              </div>
            </div>
            <div className="column_div_first">
              <div className="img_in_column_div">
                <img
                  src="https://www.themesindustry.com/html/xwin/images/blog1.jpg"
                  alt=""
                  className="img_own"
                />
              </div>
              <div className="text_in_column_div">
                <h3>Before Making your Dream Living Room Make 3D Room Model</h3>
                <ul>
                  <li>
                    <a href="#">May 10, 2017</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-message-lines"></i> 5
                    </a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  debitis ea est illum ipsa itaque libero optio quasi voluptas!
                  Consequuntur deserunt expedita.
                </p>
                <p>
                  fugiat hic illum porro quidem quis recusandae vero? Aliquid
                  assumenda cum delectus eaque eligendi, enim eum excepturi
                  fugit illum impedit in iste laudantium modi natus […]
                </p>
                <button className="read_more_btn">READ MORE</button>
              </div>
            </div> */}
          </div>
          {/* <aside id="featured_courses">
            <form>
              <input type="text" id="search" placeholder="Search Here" />
              <i className="fa-light fa-magnifying-glass"></i>
            </form>
            <div>
              <h3>Featured Courses</h3>
              <div className="ds_flex">
                <div className="img_in_aside">
                  <a href="#">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/post1.png"
                      alt=""
                      className="img_own_in_aside"
                    />
                  </a>
                </div>
                <div className="text_aside">
                  <h5>BASIC TIME MANAGEMENT COURSE</h5>
                  <button className="free_btn">FREE</button>
                  <div className="icons_aside">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="name_in_aside">Michael Windzor</span>
                </div>
              </div>
              <div className="ds_flex">
                <div className="img_in_aside">
                  <a href="#">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/post1.png"
                      alt=""
                      className="img_own_in_aside"
                    />
                  </a>
                </div>
                <div className="text_aside">
                  <h5>BASIC TIME MANAGEMENT COURSE</h5>
                  <button className="free_btn">FREE</button>
                  <div className="icons_aside">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="name_in_aside">Michael Windzor</span>
                </div>
              </div>
              <div className="ds_flex">
                <div className="img_in_aside">
                  <a href="#">
                    <img
                      src="https://www.themesindustry.com/html/xwin/images/post1.png"
                      alt=""
                      className="img_own_in_aside"
                    />
                  </a>
                </div>
                <div className="text_aside">
                  <h5>BASIC TIME MANAGEMENT COURSE</h5>
                  <button className="free_btn">FREE</button>
                  <div className="icons_aside">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="name_in_aside">Michael Windzor</span>
                </div>
              </div>
              <div id="top_tags">
                <h3>Top Tags</h3>
                <ul>
                  <li>
                    <a href="#">Books</a>
                  </li>
                  <li>
                    <a href="#">Midterm test</a>
                  </li>
                  <li>
                    <a href="#">Presentation</a>
                  </li>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">Certifications</a>
                  </li>
                  <li>
                    <a href="#">Teachers</a>
                  </li>
                  <li>
                    <a href="#">Student Life</a>
                  </li>
                  <li>
                    <a href="#">Study</a>
                  </li>
                  <li>
                    <a href="#">Midterm test</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside> */}
        </div>
      </section>
      {/* <section id="transition_section">
        <div className="container">
          <ul>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">
                Next{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  //   style="font-size: 19px; margin-left: 5px;"
                  style={{ fontSize: "19px", marginLeft: "5px" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </section> */}
    </>
  );
};

export default Blog;
