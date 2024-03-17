import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      <section className="background_foto">
        <div className="container">
          <h1>Şirkətlər</h1>
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
                Şirkətlər
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="inshaat_section">
        <div className="container">
          <h1>Inşaat portfeli</h1>
          <p>
            Bu seqment üzrə şirkətimiz fərdi yaşayış evləri, yaşayış binaları,
            mülki təyinatlı obyektlər ilə yanaşı sənaye təyinatlı obyektlər, iri
            həcmli sənaye müəssisələri, qurğuları, infrastruktur layihələri üzrə
            tikinti, layihə idarəetmə, montaj-quraşdırma xidmətlərini təklif
            edir.
          </p>
          <p>Portfelə aşağıdakı şirkətlər daxildir :</p>
          <div id="companies_in_inshaat">
          
            <div className="company">
              <div className="img_gold">
                <img
                  src="/assets/images/other/gold_construction.png"
                  alt=" "
                  className="img_company"
                />
              </div>
              <div className="text_in_inshaat">
                <h4>Gold Construction 2020 MMC</h4>
              </div>
            </div>
            <div className="company">
              <div className="img_nd">
                <img
                  src="/assets/images/other/nd_only.png"
                  alt=" "
                  className="img_company"
                />
              </div>
              <div className="text_in_inshaat">
                <h4>
                  <br />
                  ND company QSC
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="inshaat_section">
        <div className="container">
          <h1>Mühəndəslik və Sənaye Xidmətləri</h1>
          <p>
            Bu seqment üzrə şirkətimiz sənaye müəssisələri üçün mexaniki,
            elektrik, elektronik,hidravlik sistemlərin qurulmasi, inteqrasiyası
            avtomatlaşdırılması,təmiri və qulluğu xidmətlərini, eləcə də sənaye
            inspeksiya və sinaqlarını, keyfiyyət və uyğunluq
            qiymətləndirmələrini həyata keçirir. Portfelə aşağıdakı şirkətlər
            daxildir :
          </p>
          <p>Portfelə aşağıdakı şirkətlər daxildir :</p>
          <div id="companies_in_inshaat">
            <div className="company">
              <div className="img_construction">
                <img
                  src="/assets/images/other/azsafeservice.png"
                  alt=" "
                  className="img_company"
                />
              </div>
              <div className="text_in_inshaat">
                <h4>AzSafe City MMC</h4>
              </div>
            </div>
        
          </div>
        </div>
      </section>
      <section id="inshaat_section">
        <div className="container">
          <h1>Təchizat və nümayəndəlik</h1>
          <p>
            Bu seqment üzrə şirkətimiz strateji təchizat partnyoru kimi tərəfdaş
            şirkətlərin satınalma proseslərinə töhfə verə bilmək və satınalma
            strategiyalarına uyğun olaraq şirkətləri ən yaxşı mal-material və
            xidmətlə təmin edə bilmək üçün təchizat xidmətlərini təklif edir və
            beynəlxalq brendlərin Azərbaycan ərazisində nümayəndəliyi,
            tanıdılması, satış və distribusiya fəaliyyətlərini həyata keçirir
          </p>
          <p>Portfelə aşağıdakı şirkətlər daxildir :</p>
          <div id="companies_in_inshaat">
            <div className="company">
              <div className="img_construction">
                <img
                  src="/assets/images/other/elta_global.png"
                  alt=" "
                  className="img_company"
                />
              </div>
              <div className="text_in_inshaat">
                <h4>ELTA Global MMC</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="inshaat_section">
        <div className="container">
          <h1>Treydinq</h1>
          <p>
            Bu seqment üzrə şirkətimiz neft kimya məhsullarının ölkə daxili və
            ölkə xaricində satışını və logistikanı təşkil edir.
          </p>
          <p>Portfelə aşağıdakı şirkətlər daxildir :</p>
          <div id="companies_in_inshaat">
            <div className="company">
              <div className="img_construction">
                <img
                  src="/assets/images/other/eta_oil.png"
                  alt=" "
                  className="img_company"
                />
              </div>
              <div className="text_in_inshaat">
                <h4>ETA OIL TRADE</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="inshaat_section">
        <div className="container">
          <h1> Kənd təsərrüfatı</h1>
          <p>
            Bu seqment üzrə şirkətimiz quşçuluq, heyvandarlıq, bağçılıq,
            ekoturzim sahələrində fəaliyyət göstərir.
          </p>
          <p>Portfelə aşağıdakı şirkətlər daxildir :</p>
          <div id="companies_in_inshaat">
            <div className="company">
              <div className="img_construction">
                <img
                  src="/assets/images/other/ekofarm.jpeg"
                  alt=" "
                  className="img_company"
                />
              </div>
              <div className="text_in_inshaat">
                <h4>ETA OIL TRADE</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
