import React, { Suspense, useEffect, useState } from "react";
import "./AboutSection.css";
// import CompanyCard from "../cards/CompanyCard";
import axios from "../../api/axios";
const CompanyCard = React.lazy(() => import("../cards/CompanyCard"));
const AboutSection = () => {
  const [companiesData, setCompaniesData] = useState([]);
  useEffect(() => {
    axios
      .get("/companies?populate=*")
      .then((response) => {
        console.log(response);
        setCompaniesData(response?.data?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <section id="about_section">
      <div className="container">
        <div id="about_section_image">
          <img src="/assets/images/catalog_images/about.jpeg" alt="" />
        </div>
        <div id="about_section_text">
          <h3>
            İnşaat-layihələndirmə <br /> Təchizat və nümayəndəlik
          </h3>
          <p>
            Caspian Capital Group, inşaat-layihələndirmə, təchizat və
            mühəndislik sahələrində fəaliyyət göstərən şirkətlər qrupudur.
            İxtisaslaşmış şirkətləri, müasir və innovativ yanaşması və peşəkar
            komandası ilə sifarişçilərin güvənini qazanmışdır.
          </p>
          {/* <p>
            Caspian Capital Group fəaliyyət göstərdiyi sahələr üzrə ixtsaslaşmış
            şirkətləri, peşakar komandası, qabaqcıl təcrübəsi, müasir və
            innovativ yanaşması ilə müştərilərinə keyfiyyətli və etibarlə
            xidmətlərini uğurla təqdim edir
          </p> */}
          <h4>Şirkətlərimiz</h4>
          <Suspense fallback={<div style={{ height: "200px" }}>Yuklenir</div>}>
            <div>
              {companiesData?.map((company) => (
                <CompanyCard key={company.id} info={company?.attributes} />
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
