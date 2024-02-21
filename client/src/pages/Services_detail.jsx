import React from "react";
import Contact from "../components/form/ContactForm";

const Services_detail = () => {
  return (
    <>
      <section class="background_foto">
        <div class="container">
          <h1>Caspian Energy Construction</h1>
          {/* <p>
            We offer the most complete house renovating services in the country
          </p> */}
          <div class="flex_end">
            <div class="page_nav">
              {/* <span>You are here:</span> */}
              <a href="#">Ana səhifə</a>
              <span>
                <i
                  class="fa-solid fa-chevrons-right"
                  style={{ fontSize: "9px" }}
                ></i>
                CapianEnergyCo
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="sdetails_section">
        <div class="container">
          <div id="left_detail">
            <div
              id="img_in_details"
              style={{
                border: "1px solid black",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img src="/assets/images/other/caspianenergyco.jpg" alt="" />
            </div>
            {/* <div id="div_course">
              <div id="name_of_teacher">
                <div>
                  <i class="fa-solid fa-users"></i>
                </div>
                <div>
                  <p>Teacher</p>
                  <h5>JOHN PARKER</h5>
                </div>
              </div>
              <div id="name_of_teacher">
                <div>
                  <i class="fa-solid fa-users"></i>
                </div>
                <div>
                  <p>Category</p>
                  <h5>Software Training / Web Coures</h5>
                </div>
              </div>
              <div class="icons_aside">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div> */}
            <div id="text_in_sdetail">
              <h3>Accounting Technologies</h3>
              <p>
                İnşaat dünyasında hər bir layihə insanın innovasiyasının,
                sənətkarlığının və mükəmməlliyə amansız yanaşmasının sübutudur.
                Caspian Energy Construction olaraq biz bu səylərin əhəmiyyətini
                başa düşürük və tikinti planlarınızı reallığa çevirməkdə
                etibarlı tərəfdaşınız olmaqdan qürur duyuruq. Mükəmməllik
                mirası, keyfiyyətə sadiqlik və innovasiyaya olan həvəsimizlə biz
                daha yaxşı gələcək qurmaq üçün buradayıq.
              </p>
              <p>
                Caspian Energy Construction 5 ildən artıqdır ki, tikinti
                sənayesinin ön sıralarındadır. Bu illər ərzində biz,
                qeyri-yaşayış binalarının o cümlədən zavod, sex, xəstəxana,
                məktəb, ofislər, restoran, mağaza, kommersiya mərkəzləri, idman
                zalları, dayanacaqlar, anbarlar və s. tikintisi ilə məşğul
                olmuşuq.
              </p>
              <p>
                Caspian Energy Construction-da keyfiyyət sadəcə bir söz deyil;
                vəddir. Biz yüksək keyfiyyətli materiallardan və ən son tikinti
                texnikalarından istifadə edərək ən yüksək sənaye standartlarına
                riayət edirik. Keyfiyyətə sadiqliyimiz təhlükəsizlik, davamlılıq
                və müştəri məmnuniyyətinə sadiqliyimizlə vurğulanır.
              </p>
              <p>
                Komandamız uğurlarımızın dayağıdır. Caspian Energy Construction
                sənayedə ən bacarıqlı və fədakar mütəxəssislərdən bəzilərini işə
                götürməkdən qürur duyur. Layihə menecerlərindən tutmuş
                sənətkarlara qədər kadrlarımız hər bir layihəyə öz
                təcrübələrini, yaradıcılıqlarını gətirir, sizin vizyonunuzun
                reallığa çevrilməsini təmin edir.
              </p>
              <p>
                Sizin məmnuniyyətiniz bizim əsas məqsədimizdir. Biz açıq
                ünsiyyətə və əməkdaşlığa inanırıq, layihənin hər addımında sizi
                məlumatlandırırıq. Ehtiyaclarınızı və seçimlərinizi başa düşmək
                üçün sizinlə sıx əməkdaşlıq edirik və son nəticənin
                gözləntilərinizi üstələyən bir tikinti layihəsi olmasını təmin
                edirik.
              </p>
              <p>
                Sürətlə dəyişən dünyada biz ən son tikinti innovasiyalarını və
                davamlı təcrübələri layihələrimizə daxil etməyə sadiqik.
                Enerjiyə qənaət edən dizaynlardan tutmuş ekoloji cəhətdən təmiz
                materiallara qədər biz sizə sərfəli, müasir həllər təqdim
                edərkən ətraf mühitə təsirimizi azaltmağı hədəfləyirik.
              </p>
              <p>
                Caspian Energy Construction olaraq biz təkcə tikinti işində
                deyilik; biz xəyallar qurmaq işindəyik. Böyük və ya kiçik
                olmasından asılı olmayaraq, növbəti tikinti layihənizdə sizinlə
                əməkdaşlıq etmək fürsətini səbirsizliklə gözləyirik. Birlikdə
                biz ilham verən, gözəl fəaliyyət göstərən və zamanın sınağına
                tab gətirən məkanlar yaradacağıq. Növbəti tikinti işinizi
                müzakirə etmək və Caspian Energy Construction fərqini yaşamaq
                üçün bu gün bizimlə əlaqə saxlayın.
              </p>
              <h2>Xidmətlər</h2>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Qaz xətlərinin çəkilməsi</li>
                <li>Qeyri-yaşayış təyinatlı obyektərin tikintisi </li>
                <li>Satınalmada iştirak</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Services_detail;
