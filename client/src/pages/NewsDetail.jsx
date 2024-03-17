import React from "react";
import "../components/cards/NewsCard.css";
import PageHeader from "../components/pageInside/PageHeader";
import "./NewsDetail.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const NewsDetail = () => {
  const title = "Xəbərlər";
  const bg = "/assets/images/other/cons_bg.jpg";
  const locs = ["Ana səhifə", "Xəbərlər"];
  return (
    <>
      <div
        className="page_heade0r"
        style={{
          height: "80px",
          backgroundColor: "rgba(4, 10, 68, 0.933)",
        }}
      >
        <div className="container"></div>
      </div>
      <section id="news_detail_section">
        <div className="container">
          <div
            to="/caspian-capital-group-sirkəti-ilə-turkiyənin-ozgun-insaat-sirkəti-arasida-sazis-imzalanib/"
            className="news_card"
          >
            <div className="news_card_image">
              <Swiper
                spaceBetween={30}
                // centeredSlides={true}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay,Pagination,Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="/assets/images/news/news1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/images/news/news2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/images/news/news3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/images/news/news4.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="news_card_text">
              <h3>
                “Caspian Capital Group” şirkəti ilə “Özgün İnşaat” şirkəti
                arasıda birgə əməkdaşlığa dair Sazişin imzalanma mərasimi
              </h3>
              <p>
                Azərbaycanın aparıcı tikinti şirkətlərindən biri olan “Caspian
                Capital Group” şirkəti ilə Türkiyənin “Özgün İnşaat” şirkəti
                arasıda birgə əməkdaşlığa dair Sazişin imzalanma mərasimi
                keçirilib.
              </p>
              <p>
                “Caspian Capital Group” şirkətinin təsisçisi Elxan Paşayev və
                “Özgün İnşaat” şirkətinin təsisçisi Özgün Karakullukçu
                tərəfindən imzalanmış memorandum şirkətlər arasında qarşılıqlı
                əməkdaşlığın gücləndirilməsi prosesində birgə fəaliyyət kimi
                məsələləri özündə ehtiva edir. İmzalanma mərasimində “Caspian
                Capital Group” və “Özgün İnşaat” şirkətinin əməkdaşları ilə
                yanaşı, müxtəlif şirkət, ictimai təşkilat nümayəndələri də
                iştirak etmişdir.
              </p>
            </div>
          </div>
          <div id="news_card_more_text">
            <p>
              “Caspian Capital Group” şirkətinin baş direktoru Tahir İskəndərov
              çıxış edərək bilirmişdir ki, təmsil etdiyi şirkət inşaat,
              layihələndirmə, mühəndislik, təchizat, informasiya texnologiyaları
              sahələrində fəaliyyət göstərən şirkətlər qrupudur. Şirkət
              fəaliyyətə başladığı gündən etibarən ixtisaslaşmış şirkətləri,
              müasir və innovativ yanaşması və peşəkar komandası ilə
              sifarişcilərinin etibarını qazanmışdır. Caspian Capital Group
              təkcə uğurlu müəssisə deyil, həm də fəaliyyət göstərdiyi mühitdə
              müsbət dəyişikliklər yaratmağa çalışan, dövlətçiliyə, cəmiyyətə,
              ətraf mühitə və dayanıqlılıq prinsiplərinə olan sadiqliyi,
              öhdəliyi və məsuliyyət şüuru ilə hərəkət edən etibarlı
              tərəfdaşdır. Şirkət öz tərəfdaşları və ictimaiyyətin iştirakı ilə
              cəmiyyətimizə davamlı təsir göstərməyi və öz irsini həyata
              keçirdiyi layihələrdən kənara çıxmasını təmin etməyi hədəfləyir.
            </p>
            <p>
              Tədbirdə “Özgün İnşaat” şirkətinin fəaliyyətinə dair video rolik
              təqdim edilib. Şirkətin icraçı direktoru Sıtkı Akdeniz qeyd
              etmişdir ki, “Özgün İnşaat” şirkəti 1993-cü ildə yaradılıb. Şirkət
              tunel, nəqliyyat, infrastruktur, mədənçıxarma və enerji
              sahələrində fəaliyyət göstərir. “Özgün İnşaat” şirkətinin əsas
              məqsədlərindən biri inşa etdiyi komplekslərdə geniş
              infrastrukturlu, rahat və sağlam yaşam tərzini təmin etməkdən
              ibarətdir
            </p>
            <p>
              Qeyd edək ki, bu görüş “Azərbaycan Françayzinq Assosiasiyası”nın
              vasitəçiliyi ilə baş tutub. Assosiasiyanın əsas fəaliyyət məqsədi
              ölkə markalarının xaricə daşınması və xarici markaların ölkədə
              fəaliyyətinin təşkilidir. Assosiasiya 2022-ci ilin 30 iyun
              tarixindən fəaliyyət göstərir.
            </p>
            <p>
              Tədbirin sonunda “Caspian Capital Group” şirkəti ilə “Özgün
              İnşaat” şirkəti arasıda birgə əməkdaşlığa dair Saziş imzalanıb.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
