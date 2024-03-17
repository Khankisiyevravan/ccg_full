import React from "react";
import { Link } from "react-router-dom";

import "./NewsCard.css";
const NewsCard = () => {
  return (
    <Link to="/caspian-capital-group-sirkəti-ilə-turkiyənin-ozgun-insaat-sirkəti-arasida-sazis-imzalanib/" className="news_card">
      <div className="news_card_image">
        <img src="/assets/images/news/news1.jpg" alt="" />
      </div>
      <div className="news_card_text">
        <h3>
          “Caspian Capital Group” şirkəti ilə “Özgün İnşaat” şirkəti arasıda
          birgə əməkdaşlığa dair Sazişin imzalanma mərasimi
        </h3>
        <p>
          “Caspian Capital Group” şirkətinin təsisçisi Elxan Paşayev və “Özgün
          İnşaat” şirkətinin təsisçisi Özgün Karakullukçu tərəfindən imzalanmış
          memorandum şirkətlər arasında qarşılıqlı əməkdaşlığın gücləndirilməsi
          prosesində birgə fəaliyyət kimi məsələləri özündə ehtiva edir.
          İmzalanma mərasimində “Caspian Capital Group” və “Özgün İnşaat”
          şirkətinin əməkdaşları ilə yanaşı, müxtəlif şirkət, ictimai təşkilat
          nümayəndələri də iştirak etmişdir.
        </p>
        <button>
          <Link to="/caspian-capital-group-sirkəti-ilə-turkiyənin-ozgun-insaat-sirkəti-arasida-sazis-imzalanib/">Ətraflı</Link>
        </button>
      </div>
    </Link>
  );
};

export default NewsCard;
