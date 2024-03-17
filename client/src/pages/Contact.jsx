import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/form/ContactForm";
import PageHeader from "../components/pageInside/PageHeader";
const Contact = () => {
  const title = "Contact";
  const bg =
    "/assets/images/other/cons_bg.jpg";
  const locs = ["ANA", "Contact"];
  return (
    <>
      <PageHeader bg={bg} title={title} locs={locs} />
      <ContactForm />
    </>
  );
};

export default Contact;
