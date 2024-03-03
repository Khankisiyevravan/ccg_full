import { Link } from "react-router-dom";
import VideoSection from "../components/video/VideoSection";
import Colleagues from "../components/SwiperSlider/Colleagues";
import Contact from "../components/form/ContactForm";
import Statics from "../components/statics/Statics";

const Homepage = () => {
  return (
    <>
      <VideoSection />
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
              Şirkətlərimiz inşaat-layihələndirmə, təchizat, mühəndis və servis
              xidmətləri sahələrində fəaliyyət göstərən şirkətlər qrupudur.
            </p>
            <p>
              Caspian Capital Group fəaliyyət göstərdiyi sahələr üzrə
              ixtsaslaşmış şirkətləri, peşakar komandası, qabaqcıl təcrübəsi,
              müasir və innovativ yanaşması ilə müştərilərinə keyfiyyətli və
              etibarlə xidmətlərini uğurla təqdim edir
            </p>
            <h4>Şirkətlərimiz</h4>
            <div>
              <div className="company_card">
                <div className="company_card_logo">
                  <img src="/assets/images/catalog_images/nd.jpg" alt="" />
                </div>
                <div className="company_card_name">ND Company QSC</div>
              </div>
              <div className="company_card">
                <div className="company_card_logo">
                  <img
                    src="/assets/images/catalog_images/goldconstruction2020.png"
                    alt=""
                  />
                </div>
                <div className="company_card_name">
                  Gold Construction 2020 MMC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="about_sec">
        <div className="container">
          <div id="about_main">
            <div id="about_text">
              <h3>
                <strong>Qrup</strong> Haqqında
              </h3>
              <p>
                Şirkətimiz inşaat və layihələndirmə, mühəndislik və sənaye
                xidmətləri, təchizat , treydinq, kənd təsərrüfatı sahələrində
                fəaliyyət göstərən şirkətlər qrupudur . Qrup daxilində 5 sektor
                üzrə 7 şirkətimiz fəaliyyət göstərir.
              </p>
              <p>
                Caspian Capital Group fəaliyyət göstərdiyi sahələr üzrə
                ixtisaslaşmış şirkətləri, peşəkar komandası, qabaqcıl təcrübəsi,
                müasir və innovativ yanaşması ilə müştərilərinə keyfiyyətli və
                etibarlı xidmətlərini uğurla təmin edir.
              </p>
              <button>
                <Link to="/about">Ətraflı...</Link>
              </button>
            </div>
            <div id="about_image">
              <img src="/assets/images/other/about.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="services_section">
        <div className="container">
          <h3>
            Bizim <strong>Şirkətlər</strong>
          </h3>
          <div id="services">
            <div className="service">
              <div className="service_image">
                <img src="/assets/images/other/gold_construction.png" alt="" />
              </div>
              <div className="text">
                <h5>GOLD CONSTRUCTION 2020</h5>
              </div>
            </div>
            <div className="service">
              <div className="service_image">
                <img src="/assets/images/other/nd_only.png" alt="" />
              </div>
              <div className="text">
                <h5>ND COMPANY</h5>
              </div>
            </div>
            <div className="service">
              <div className="service_image">
                <img src="/assets/images/other/elta_global_only.png" alt="" />
              </div>
              <div className="text">
                <h5>ELTA GLOBAL</h5>
              </div>
            </div>
            <div className="service">
              <div className="service_image">
                <img src="/assets/images/other/eta_oil_only.png" alt="" />
              </div>
              <div className="text">
                <h5>ETA OIL</h5>
              </div>
            </div>
            <div className="service">
              <div className="service_image">
                <img src="/assets/images/other/ekofar_only.png" alt="" />
              </div>
              <div className="text">
                <h5>EKOFARM</h5>
              </div>
            </div>
            <div className="service">
              <div className="service_image">
                <img src="/assets/images/other/azsafeservice.png" alt="" />
              </div>
              <div className="text">
                <h5>AZSAFE CITY</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="goals_section">
        <div className="container">
          <h3>
            <strong>Məqsədimiz</strong>
          </h3>
          <div id="about_main">
            <div id="about_image">
              <img src="/assets/images/other/missiya.jpg" alt="" />
            </div>
            <div id="about_text">
              <h4>Davamlılıq və etibarlılıq</h4>
              <p>
                Məqsədimiz, innovasiya, davamlılıq, etibarlılıq və mükəmməlliyin
                sərhədlərini aşaraq fəaliyyət göstərdiyimiz istiqamətlərdə
                inqilab etməkdir.
              </p>
              <p>
                Biz İnşaat, mühəndislik, sənaye xidmətləri, ticarət və kənd
                təsərrüfatı sektorlarında yenilikçi həllər və müstəsna xidmətlər
                təqdim edərək, müştərilərin gözləntilərini qarşılamaq və davamlı
                inkişafı təmin etmək üçün fəaliyyət göstəririk.
              </p>
            </div>
          </div>
          <h3>
            <strong>Missiyamız</strong>
          </h3>
          <div id="about_main">
            <div id="about_image">
              <img src="/assets/images/other/construction.jpg" alt="" />
            </div>
            <div id="about_text">
              <h4>Yüksək Keyfiyyətli layihələr</h4>
              <p>
                Biz yüksək keyfiyyətli layihələr təqdim etməyə, uzunmüddətli
                tərəfdaşlıqları təşviq etməyə və tərəfdaşlarımızın və
                sənayelərin inkişafına tövhə verməyə sadiqik.
              </p>
              <p>
                Təcrübəmiz, dürüstlüyümüz və fədakarlığımız sayəsində
                müvəffəqiyyətlərini maksimuma çatdıran və dünyaya müsbət təsir
                göstərən etibarlı və hərtərəfli həllər axtaran bizneslər üçün
                üstünlük verilən seçim olmağı hədəfləyirik.
              </p>
            </div>
          </div>
          <h3>
            <strong>Gələcəyə Baxış</strong>
          </h3>
          <div id="about_main">
            <div id="about_image">
              <img src="/assets/images/other/111.jpeg" alt="" />
            </div>
            <div id="about_text">
              <h4>Davamlılıq və etibarlılıq</h4>
              <p>
                Birgə tərəfdaşlıqlar və ictimaiyyətin iştirakı ilə biz
                cəmiyyətimizə davamlı təsir göstərməyi və irsimizin həyata
                keçirdiyi layihələrdən kənara çıxmasını hədəfləyirik.
              </p>
              <p>
                Vizyonumuz, CCG-un innovasiya, dürüstlük və mükəmməlliklə
                sinonim olduğu gələcəyə doğru çalışır. Biz birlikdə imkanların
                hüdudsuz olduğu və təsirimizin gələcək nəsillər üçün hiss
                olunduğu bir dünya formalaşdırmaq üçün çalışacağıq.
              </p>

            </div>
          </div>
        </div>
      </section>
      <Statics />
      <Colleagues />
      <Contact /> */}
    </>
  );
};

export default Homepage;
