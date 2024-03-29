import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: "transparent",
  });
  const [menuShow, setMenuShow] = useState(false);
  const [headerClass, setHeaderClass] = useState(true);
  const [logoSrc, setLogoSrc] = useState(
    "/assets/images/ccg/bg_logo_white.png"
  );
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setHeaderClass(false);
      setHeaderStyle({ backgroundColor: "rgba(255, 255, 255, 0.933)" });
      setLogoSrc("/assets/images/ccg/bg_logo_blue.png");
    } else {
      setHeaderClass(true);
      setHeaderStyle({ backgroundColor: "transparent" });
      setLogoSrc("/assets/images/ccg/bg_logo_white.png");
    }
  };

  useEffect(() => {
    // fetch(
    //   "https://admin.caspiancapitalgroup.az/api/companies/1?locale=&&populate=*"
    // )
    //   .then((response) => response.json())
    //   .then((response) => console.log(response));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={!headerClass ? "scroll" : ""}>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logoSrc} alt="" />
        </Link>
        <div id="ul" className={menuShow ? "show" : ""}>
          <div id="cancel_btn" onClick={() => setMenuShow(false)}>
            <i className="fa-light fa-xmark"></i>
          </div>
          <ul>
            <li>
              <Link to=""> Ana Səhifə </Link>
            </li>
            {/* <li>
              <Link to="/companies"> Şirkətlər </Link>
            </li> */}
            <li>
              <Link to="/about">Haqqımızda </Link>
            </li>
            <li>
              <Link to="/News">Xəbərlər </Link>
            </li>
            <li>
              <Link to="/certificates"> Sertifikatlar </Link>
            </li>
            <li>
              <Link to="/contact_us"> Bizimlə əlaqə</Link>
            </li>
          </ul>
        </div>
        <div
          id="bar_menu"
          style={headerClass ? { color: "white" } : { color: "white" }}
          onClick={() => setMenuShow(true)}
        >
          <i className="fa-sharp fa-regular fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
