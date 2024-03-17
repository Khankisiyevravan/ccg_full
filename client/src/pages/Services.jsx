import PageHeader from "../components/pageInside/PageHeader";
import ServiceCard from "../components/cards/ServiceCard";
import "./Services.css";
import { useEffect, useState } from "react";
import axios from "../api/axios";
const Services = () => {
  const title = "Tikinti quraşdırma xidmətləri";
  const bg = "/assets/images/other/tikintiqurasdirma_bg.jpg";
  const locs = ["Ana səhifə", "servi"];
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    axios.get("/services?populate=*").then((data) => {
      console.log(data);
      setServicesData(data?.data?.data);
    });
  }, []);
  return (
    <>
      <PageHeader bg={bg} title={title} locs={locs} />
      <section id="services">
        <div className="container">
          {servicesData.map((service, index) => (
            <ServiceCard service={service?.attributes} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
