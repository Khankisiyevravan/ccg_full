import React from "react";
import PageHeader from "../components/pageInside/PageHeader";

const Services = () => {
  const title = "Service";
  const bg = "https://www.themesindustry.com/html/xwin/images/page-tittle.jpg";
  const locs =["Ana səhifə","servi"]
  return (
    <>
      <PageHeader bg={bg} title={title} locs={locs} />
    </>
  );
};

export default Services;
