import React from "react";
import PageHeader from "../components/pageInside/PageHeader";
import NewsCard from "../components/cards/NewsCard";
import "./News.css"
const News = () => {
  const title = "Xəbərlər";
  const bg = "/assets/images/other/cons_bg.jpg";
  const locs = ["Ana səhifə", "Xəbərlər"];
  return (
    <>
      <PageHeader bg={bg} title={title} locs={locs} />
      <div id="news_section">
        <div className="container">
          <NewsCard />
      
        </div>
      </div>
    </>
  );
};

export default News;
