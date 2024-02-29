import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const data = [
    {
      image: "senayevemulki.jpg",
      title: "Sənaye və mülki obyektlərin tikintisi xidmətləri",
      content:
        "Layihələndirmədən başlayaraq birbaşa tikintiyə qədər şirkətimiz fərdi yaşayış evləri , yaşayış binaları, mülki təyinatlı obyektlər ilə yanaşı sənaye təyinatlı obyektlər, iri həcmli sənaye müəssisələri, obyektləri, qurğuları, infrastruktur layihələri üzrə tikinti, layihə idarəetmə, montaj-quraşdırma xidmətlərini təklif edir.",
    },
    {
      image: "",
      title: "Beton və dəmir - beton konstruksiyaları",
      content:
        "Şirkətimiz sizə bütün keyfiyyət standartlarına uyğun beton işləri təklif edir. Arsenalımızda beton və dəmir-beton işlərinin ən qısa müddətdə başa çatdırılması və nəticənin bütün gözləntilərinizi üstələməsi üçün bütün lazımi avadanlıqlar var. Bizim istehsal bazamıza aşağıdakılar daxildir: divarlar, sütunlar və tavanlar üçün qəliblər, vibrasiyalı lövhələr, dərin vibratorlar və s. Üstəlik, əsl peşəkarlardan ibarət komanda bizə keyfiyyəti itirmədən ən qısa müddətdə konkret işləri həyata keçirməyə imkan verir.",
    },
    {
      image: "",
      title: "Su kanalları, drenaj sistemləri və artezianların tikintisi",
      content:
        "Şirkətimiz hidrotexniki qurğuların, su axınlarının istiqamətləndirilməsi üçün nəzərdə tutulmuş kanalların, eləcədə drenaj boruları, quyular, kanallar, yeraltı qalereyalar və digər sistemlərdən istifadə edərək ərazidən və tikililərdən yeraltı suların yığılması və boşaldılması üçün drenajların tikintisi üçün bir sıra xidmətlər göstərir, çəkildiyi üçün bir sıra xidmətlər göstərir, çəkildiyi layihənin tələblərinə və texniki şərtlərə uyğunluğu yoxlanılır.",
    },
    {
      image: "",
      title: "YÜKSƏK KEYFİYYƏTLİ LAYİHƏLƏR",
      content:
        "Biz yüksək keyfiyyətli layihələr təqdim etməyə, uzunmüddətli tərəfdaşlıqları təşviq etməyə və tərəfdaşlarımızın və sənayelərin inkişafına tövhə verməyə sadiqik. Təcrübəmiz, dürüstlüyümüz və fədakarlığımız sayəsində müvəffəqiyyətlərini maksimuma çatdıran və dünyaya müsbət təsir göstərən etibarlı və hərtərəfli həllər axtaran bizneslər üçün üstünlük verilən seçim olmağı hədəfləyirik.",
    },
    {
      image: "",
      title: "Qaz təsərrüfatı obyektlərinin quraşdırılması",
      content:
        "Biz magistral boru kəmərləri daxil olmaqla qaz kəmərləri, neft kəmərləri, su kəmərləri kimi istənilən mürəkkəblikdə və uzunluqda boru kəmərlərinin quraşdırılmasını həyata keçiririk. Boru kəmərlərini quraşdırarkən qaynaqlanmış boru birləşmələri fırlanan, sabit və ya üfüqi ola bilər. Quraşdırma və qaynaqdan əvvəl boruların boru kəmərinin çəkildiyi layihənin tələblərinə və texniki şərtlərə uyğunluğu yoxlanılır.",
    },
    {
      image: "",
      title: "Dambaların, limanların, pirslərin tikintisi",
      content:
        "Dambaların, limanların, pirslərin tikintisi sahəsində fəaliyyət göstərən şirkət kimi, effektiv layihə idarəsi və mütəxəssis tikinti texnologiyaları ilə su nəqliyyatının təhlükəsiz və sürətli həyata keçirilməsində təcrübəyə sahibik. Müştərilərimizə keyfiyyətli infrastruktur layihələri təmin etmək üçün texniki bacarıq və mühəndisliklə məşğul oluruq.",
    },
    {
      image: "",
      title: "Bəndlər, su anbarlarının tikintisi və sahilbərkitmə işləri",
      content:
        "Yaşayış məntəqələrinin əksəriyyəti çay və dəniz kənarında yerləşir, bu isə ətraf ərazilərdə su basmasına səbəb ola bilər. Torpaqların daşqınlardan qorunması üçün yeganə yol bəndlər, daşqın divarları, bəndlər və sel su anbarlarının tikintisi mümkündür. Sakinlərin təhlükəsizliyi isə bu strukturların keyfiyyətinə asılıdır. Şirkətimizin mütəxəssisləri tikinti layihəsinin hazırlanmasından başlayaraq bəndin istismara verilməsinə qədər bütün işləri ən yaxşı şəkildə həyata keçirəcəklər.",
    },
    {
      image: "",
      title: "Aqroparkların və istixanaların tikintisi",
      content:
        "Layihənin icra proqramında istixana strukturları, suvarma sistemi, ikiqat qoruyucu sistem, istilik sistemi, qazanxana, kompüter nəzarəti, soyuducu kameralar, çeşidləmə və qablaşdırma avadanlığı, su anbarları, ehtiyat enerji təchizatı sistemi (elektrik generatoru), assimilyasiya işıqlandırması (əlavə işıqlandırma), yetişdirmə sistemləri, məhsulların daşınması və yığılması üçün arabalar, konstruksiyaların və avadanlıqların quraşdırılması daxildir.",
    },
    {
      image: "",
      title: "Təzyiq sınaqları",
      content:
        "Təzyiq altında işləyən qabların və boru sistemlərinin təhlükəsiz və səmərəli istismarını təmin etmək üçün ASME, API və DOT daxil olmaqla müxtəlif standart və qaydalara əsasən şirkətimiz neft və qaz, kimya, enerji istehsalı və s. daxil olmaqla, sənayenin geniş spektri üçün hidrostatik, vakuum, pnevmatik testikəri həyata keçirir.",
    },
    {
      image: "",
      title: "Boroskop imspeksiyası",
      content:
        "Biz sənayenin geniş spektri üçün qabaqcıl boroskop yoxlama xidmətlərini təqdim edirik. Yüksək ixtisaslı mütəxəssislərimiz boru kəmərlərinin, çənlərin, buxar qazanlarının və digər qurğularən yoxlanılması üçün ən müasir kamera avadanlıqlarından istifadə edirlər. Bizim boroskop yoxlamalarımız nəzarət edilməsi çətin olan qapalı yerləri vizual yoxlamağa potensial problemləri və təkmilləşdirilməli sahələri müəyyən etməyə imkan verir.",
    },
    {
      image: "",
      title: "Mühərriklərin təmiri və xidməti",
      content:
        "Biz müxtəlif növlü mühərriklər üçün yüksək keyfiyyətli təmir və texniki xidmət üzrə İxtisaslaşmışıq. Mühərrikinizin mükəmməl İşlək vəziyyətdə olmasını təmin etmək üçün təcrübəli mütəxəssislərimiz ən son alətlər və texnologiya ilə təchiz edilmişdir. Xidmətlərimiz yanacaq sistemi, soyutma sistemi və elektrik sistemi daxil olmaqla mühərrikin bütün aspektlərini əhatə edir.",
    },
    {
      image: "",
      title: "Nəzarət ölçü cihazları",
      content:
        "Biz nəzarət ölçü cihazlarının satınalınması, mühəndisliyi, quraşdırılması, texniki xidməti və kalibrasiyası sahəsində yüksək səviyyəli dəstək və bütün istehsal prosesi ərzində, o cümlədən layihələndirmə, mühəndislik, quraşdırma, istismara vermə və istismar mərhələlərində açar təslimi xidmətlər göstəririk",
    },
    {
      image: "",
      title: "Təchizat xidmətləri",
      content:
        "Şirkətimiz strateji təchizat partnyoru kimi tərəfdaş şirkətlərin satınalma proseslərinə töhfə verə bilmək və satınalma strategiyalarına uyğun olaraq şirkətləri ən yaxşı mal-material və xidmətlə təmin edə bilmək üçün təchizat xidmətlərini təklif edir və beynəlxalq brendlərin Azərbaycan ərazisində nümayəndəliyi, tanıdılması, satış və distribusiya fəaliyyətlərini həyata keçirir.",
    },
    {
      image: "",
      title: "Sənaye detallarının istehsalı",
      content:
        "Şirkətimiz ən müasir dəzgah və avadanlıqları və ixtisaslı kadrları ilə birlikdə beynəlxalq standartların tələblərinə uyğun olaraq sənaye detallarının emalını həyata keçirilir. Emal vaxtı detalların həssas hissələrinin ölçüləri və keyfiyyəti müvafiq qaydada yoxlanılır və müştərilərimiz onların tələblərinə uyğun olan ən keyfiyyətli məhsullar ilə təmin edilir.",
    },
    {
      image: "",
      title: "Metal konstruksiyaların quraşdırılması",
      content:
        "Uğurlu fəaliyyətimizin əsas komponentləri müasir və yüksək məhsuldar avadanlıqlar, ixtisaslı mühəndislər, peşəkar qaynaqçı və quraşdırıcılar işin bütün mərhələrində keyfiyyətə zəmanətdir.Biz müştərilərimizə müxtəlif növ və mürəkkəblikdə metal konstruksiyaları istehsal üsuluna görə pərçimlənmiş, möhürlənmiş və kombinə formada təklif edə bilirik.Biz müştərilərimizə layihələrin və çertyojların işlənib hazırlanmasından tutmuş konstruksiyaların yerində quraşdırılmasına qədər tam spektrli xidmətlər  təklif  edirik.",
    },
    {
      image: "",
      title: "Svay işləri",
      content:
        "Svayların vurulması üçün çəkic, vibrasiya presi, vibrasiya sürmə, fırlanan svaylar üçün quyu qazılması, şok-kanat və fırlanma üsulları, qazılmış svayların quraşdırılması üçün müasir texnologiyalar kimi müxtəlif üsullar nəzərdə tutulmuşdur. İxtisaslaşdırılmış qurğularımız və bacarıqlı kadrlarımız texniki sənədlərə tam uyğun olaraq, mümkün qədər qısa müddətdə yüksək keyfiyyətli svay quraşdırma işlərini həyata keçirməyə və maliyyə xərclərinə qənaət etməyə imkan verir.",
    },
    {
      image: "",
      title: "YÜKSƏK KEYFİYYƏTLİ LAYİHƏLƏR",
      content:
        "Birgə tərəfdaşlıqlar və ictimaiyyətin iştirakı ilə biz cəmiyyətimizə davamlı təsir göstərməyi və irsimizin həyata keçirdiyi layihələrdən kənara çıxmasını hədəfləyirik. Vizyonumuz, CCG - un innovasiya, dürüstlük və mükəmməlliklə sinonim olduğu gələcəyə doğru çalışır.Biz birlikdə imkanların hüdudsuz olduğu və təsirimizin gələcək nəsillər üçün hiss olunduğu bir dünya formalaşdırmaq üçün  çalışacağıq.",
    },
    {
      image: "",
      title: "Scaffolding",
      content:
        "Şirkətimiz scaffolding quraşdırmalarını həyata keçirir. Biz tikinti, quraşdırma və təmir işləri apararkən, montaj üsulları ilə fərqlənən üç növ scaffolding istifadə edirik: pin, sıxac və çərçivə scaffoldinglər. Şirkətimizin təcrübəli mütəxəssisləri sizə lazım olan istənilən tikinti meydançasında hər növ scaffolding quraşdırma bacarığına və təcrübəsinə malikdir.",
    },
    {
      image: "",
      title: "Nasosxana və xüsusi qurğuların tikintisi",
      content:
        "Su və xüsusi mayelərin vurulması üçün nasos stansiyalarının layihələndirilməsi və quraşdırılması. Layihə, tikinti, quraşdırma və istismara vermə işləri eyni vaxtda aparıldıqda, müxtəlif növ nasos stansiyalarının tikintisinin bütün prosesi kombinasiya üsulu ilə həyata keçirilir.Bina tikilir, texniki avadanlıqlar, boru kəmərləri, idarəetmə mərkəzi quraşdırılır, sazlama, işə salma və sınaq işləri aparılır.Mütəxəssislər, təcrübəli ustalar və peşəkarlardan ibarət komanda çətin coğrafi şəraitdə belə nasos stansiyasını tikib istismara verməyə  qadirdir.",
    },
    {
      image: "",
      title: "Kimvəvi təmizləmə",
      content:
        "Biz qurğu, boru və avadanlıqlarınızın qorunması, təmiz və işlək vəziyyətdə saxlanması və zərərli maddələrin təsirindən mühafizə edilməsi üçün kimyəvi va hidrojet təmizləmə xidmətlərini həyata keçiririk ",
    },
    {
      image: "",
      title: "Çən əməliyyatları",
      content:
        "Komandamız çənlərinizin optimal performansını, təhlükəsizliyini və uzunömürlülüyünü təmin edən geniş ceşidli çən xidmətləri üzrə ixtisaslaşmışdır. Geniş spektrli xidmətlərimizə çənlərin təmizlənməsi və təmiri,yenidən qurulmasi və bərpası, boruların çəkilməsi, nasosların təmiri, qaldırıcı kranların təmiri ve qulluğu,elektrokimyəvi təmizlənmə xidmətləri daxildir.",
    },
    {
      image: "",
      title: "Yanğından mühafizə sistemləri ",
      content:
        "Mütəxəssis komandamız yanğın ve qaz aşkarlama sistemlərin layihələndirilməsi tətbiqi və istismarı, potensial təhlükələrə çevik və dəqiq reaksiya göstərilməsini təmin etmək üçün yanğın mühafizə sistemləri təklif edir., Etibarlılığa və uyğunluğa diqqət yetirməklə, ən yüksək sənaye standartlarına cavab verən yanğından mühafizə və qaz aşkarlama xidmətlərimiz hərtərəfli risk qiymətləndirmələrini, qabaqcıl aşkarlama texnologiyalarını və müxtəlif mühitlər üçün uyğunlaşdırılmış həlləri  əhatə  edir. ",
    },
    {
      image: "",
      title: "Soyutma anbarları",
      content:
        "Biz sizin istehsalat zərurətinizi, müvafiq sənaye standartlarını və normativ tələbləri nəzərə alaraq soyutma anbarlarının tikilməsi, enerji səmərəliliyinin təmin olunması ilə soyutma sistemlərinin quraşdırılması, təmiri və dəstək xidmətlərinin göstərilməsi fəaliyyətlərini həyata  keçiririk. ",
    },
    {
      image: "",
      title: "Mühəndislik və sənaye xidmətləri ",
      content:
        "Bu seqment üzrə şirkətimiz sənaye müəssisələri üçün mexaniki, elektrik, elektronik, hidravlik sistemlərin qurulmasi, inteqrasiyası avtomatlaşdırılması, təmiri və qulluğu xidmətlərini, eləcə də sənaye inspeksiya və sinaqlarını, keyfiyyət və uyğunluq qiymətləndirmələrini həyata keçirir. Portfelə aşağıdakı şirkətlər  daxildir : ",
    },
    {
      image: "",
      title: "Sənaye və mülki obyektlərin tikintisi xidmətləri",
      content:
        "Layihələndirmədən başlayaraq birbaşa tikintiyə qədər şirkətimiz fərdi yaşayış evləri , yaşayış binaları, mülki təyinatlı obyektlər ilə yanaşı sənaye təyinatlı obyektlər, iri həcmli sənaye müəssisələri, obyektləri, qurğuları, infrastruktur layihələri üzrə tikinti, layihə idarəetmə, montaj-quraşdırma xidmətlərini təklif edir.",
    },
    {
      image: "",
      title: "Boru və qaynaq işləri",
      content:
        "Texnoloji avadanlıqlar və boru kəmərlərinin hazırlanması, modelləşdirilməsi, istehsalı və quraşdırılması sahəsində polad, paslanmayan polad, əlvan metaller və digər materiallardan xidmətlər təklif edirik. Müasir qaynaq proseslərindən, məsələn, elektrik qövsü, qaz və arqon qaynağından istifadə edirik və birləşdirilmiş hissələrin yerli qaynaqlanmasına diqqət yetirir Qaynaqçılarımızın təcrübəsi, hamar tərs qaynaqların effektiv hazırlanmasında böyük rol oynayır.Texnoloji boru kəmərlərinin quraşdırılma SNIP 3.05 .05 - 84 standartlarına əsaslanan layihə sənədləri, nodal tikinti üsulu və tam blok quraşdırma metodu ilə həyata  keçirilir. ",
    },
    {
      image: "",
      title: "Mühəndis- kommunikasiya şəbəkəsinin qurulması",
      content:
        "Əsas mühəndislik sistemlərinin layihələndirilməsi və tikintisinin bütün mərhələlərində hərtərəfli xidmətlər təqdim edirik. Müasir mühəndis kommunikasiyaları, bina müəssisə su təchizatı, kanalizasiya, ventilyasiya, elektrik, qaz və istilik sistemlərinə əvəzsiz mənbədir. Şirkətimiz mühəndis kommunikasiyalarının layihələndirilməsi, tikintisi və yenidən qurulması sahəsində böyük təcrübəyə sahibdir.",
    },
    {
      image: "",
      title: "Bina və fərdi yaşayış evlərinin tikintisi",
      content:
        "Biz layihələndirmədən başlayaraq birbaşa tikintiyə qədər əsaslı tikinti xidmətlərinin bütün mərhələlərini təqdim edirik. Mülki tikinti sahəsində fərdi yaşayış evləri və binaların tikintisi, səhiyyə, idman, təhsil mərkəzləri, inzibati binalar, monolit çoxmərtəbəli binalar, kotteclər kimi obyektlərin tikintisini həyata keçiririk. Peşəkar təcrübə və müasir avadanlıq ilə etibarlı və dayanıqlı bina təminatı üçün layihələrimizin müvafiq keyfiyyət tələbləri və müştəri istəklərinə uyğunluğu təminat veririk.",
    },
    {
      image: "",
      title: "Avtomobil yollarının tikintisi",
      content:
        "Şirkətimizin xidmətlərinə yolların və körpülərin tikintisi daxildir. Şirkət yuxarıda qeyd olunan sahələr üzrə ixtisaslaşmışdır və layihələri hərtərəfli və keyfiyyətli şəkildə həyata keçirmək üçün bütün resurslara, o cümlədən ixtisaslı kadrlara, materiallara və avadanlıqlara malikdir. Biz bütün lazımi işləri uğurla başa çatdırırıq və öz adimizi mükəmməl işlərlə təsdiqləyən şirkətlər sırasındayıq. Bizim üçün ən böyük üstünlüyü odur ki, bizim çəkdiyimiz yollardan istifadə edən insanlar gedəcəkləri yerə rahat və vaxtında çata bilirlər.",
    },
    {
      image: "",
      title: "Körpülərin, estakadaların və yol ötürücülərinin tikintisi",
      content:
        "Şirkətimiz, körpülər, estakadalar və yol ötürücülərinin tikintisi üçün effektiv layihə idarəsi və keyfiyyətli tikinti materialları ilə mütəxəssis xidmətlər təklif edir, nəqliyyat infrastrukturlarını sürətli və təhlükəsiz şəkildə təkmilləşdirməkdə müştərilərinə kömək edir.",
    },
    {
      image: "",
      title: "Elektrik ötürücü xəttlərinin qurulması",
      content:
        "Şirkətimiz elektrik təchizatı sistemlərinin dayaq növlərini və yarımstansiyalarını nəzərə alaraq texnoloji xəritələrdə göstərilən tələblərə uyğun elektrik xətlərinin çəkilməsi ilə məşğuldur. GOST və Elektrik xətlərinin çəkilməsi və elektrik quraşdırma işlərinin aparılması üçün təhlükəsizlik qaydaları toplusuna əməl olunur.Layihəcilərimiz öz dizaynlarını hazırlayıb, mühəndislərimizin yoxlanışına və yoxlamasına tabe olaraq layihələri həyata keçirir.Biz səhv etmirik və kompüter hesablamalarını əl  ilə  yoxlayırıq.",
    },
    {
      image: "",
      title: "Xüsusi torpaq işləri",
      content:
        "Sərfəli qiymət və keyfiyyət zəmanəti ilə qazıntı xidmətləri təklif edirik. İş istehsalı layihəsi hazırlanmasından torpağın çıxarılmasına qədər bütün əməliyyatları həyata keçiririk. Yüksək məhsuldar avadanlıqlardan istifadə edərək qazıntı işlərinin başa çatdırılma vaxtını minimuma endirməyə imkan veririk. Qazıntı İşləri, köhnə bünövrənin sökülməsindən, sahənin təmizlənməsinə, torpağın kəsilməsindən, kötüklərin çıxarılmasına qədər olan əməliyyatları  əhatə  edir.",
    },
    {
      image: "",
      title: "Flyans idarəetmə",
      content:
        "Şirkətimiz bütün istehsal prosesi ərzində, həmçinin montaj, quraşdırma, istismara vermə və istismar mərhələlərində flaynsların idarə olunması üzrə flyansın yoxlanması və qiymətləndirilməsi, flaynsların təmizlənməsi və hazırlanması, qaynaq, boltun bərkidilməsi, sahənin yoxlanılması, flyans hissələrinin qorunması və s. kimi fəaliyyətləri həyata keçirir.",
    },
    {
      image: "",
      title: "Boltlama, bərkitmə",
      content:
        "Təcrübəli mühəndis və texniklərdən ibarət komandamız boltinq ehtiyaclarınızın tez və səmərəli şəkildə ödənilməsini təmin etmək üçün ən son alətlər və texnologiya ilə təchiz edilmişdir. Biz bütün bolt birləşmələrinin dəqiq spesifikasiyalara uyğun yerinə yetirilməsini təmin edirik.",
    },
    {
      image: "",
      title: "Montaj və quraşdırma",
      content:
        "Şirkətimiz müxtəlif təyinatlı məqsədlər üçün sənaye obyektlərinin qurğuların, avadanlıqların, istehsal və kommunikasiya xəttlərinin quraşdırılması, montajı, istismara verilməsi üzrə geniş spektrli xidmətləri təklif edir.",
    },
    {
      image: "",
      title: "Sivirtmələrin təmiri və xidməti",
      content:
        "Təcrübəli mütəxəssislərimiz müasir texnika və avadanlıqlardan istifadə edərək bütün növ siyirtmələrin yoxlanılması və sınaqdan keçirilməsi, təmiri və ehtiyat hissələrinin dəyişdirilməsi, bərpası, təmizlənməsi və yağlanması, hermetizasiyası və sızmaların qarşısınının alınması xidmətlərini həyata keçirir.",
    },
    {
      image: "",
      title: "Mexaniki reduktorların sınağı, təmiri və xidməti",
      content:
        "Biz avadanlığınızın ən yaxşı vəziyyətdə qalmasını təmin etmək üçün mexaniki reduktorların sınağı, təmiri və qulluğu xidmətlərini təklif edirik. Bacarıqlı mütəxəssisirimiz müxtəlif növ reduktorlarla İşləmək təcrübəsinə malikdir.",
    },
    {
      image: "",
      title: "Qeyri dağıdıcı sınaqlar (NDT)",
      content:
        "NDT xidmətlərimizdən istifadə etməklə siz potensial problemləri böyük problemlərə çevrilməmişdən əvvəl müəyyən edə, avadanlığın təmirə dayanma müddətini və avadanlığın nasazlığı ilə bağlı xərcləri azalda bilərsiniz. Ultrasəs müayinəsi, maqneit hissəcik testi, maye penetrant testi, radiografik test kimi NDT sınaqlarımız avadanlıqlarınızın təhlükəsizliyini və davamlılığını təmin etmək üçün sənaye standartlarına və qaydalarına uyğun şəkildə həyata keçirilir.",
    },
    {
      image: "",
      title: "Qumlama",
      content:
        "Biz avadanlıqlarınızın hərtərəfli və səmərəli şəkildə təmizlənməsini təmin etmək, avadanlıq və qurğularınızın səthlərindən pas, boya və digər çirkləndiriciləri təmizləmək üçün ən son püskürtmə avadanlığı və texnikalarından və yüksək təzyiqli hava və aşındırıcı materiallardan istifadə edərək təcrübəli mütəxəssislərimiz ilə sizə keyfiyyətli və qabaqcıl qumlama xidmətlərini təklif edirik.",
    },
    {
      image: "",
      title: "Boyama",
      content:
        "Biz sizin istehsal tələblərinizə uyğun olaraqoptimal həlli təmin etmək üçün xüsusi epoksi örtüklər, uretan örtükləri və yüksək temperaturlu örtüklər daxil olmaqla bir sıra rəngləmə xidmətləri təklif edirik.",
    },
    {
      image: "",
      title: "Kontrol sistemlərinin inteqrasiyası (SKADA)",
      content:
        "Biz istehsal proseslərinə nəzarəti təmin etmək, proseslərin effektivliyini artırmaq üçün PLC üzərində texnoloji proseslərin avtomatlaşdırılması, inteqrasiya olunmuş məlumat əsaslı nəzarət və monitoring sisteminin qurulması (SKADA) və proseslərin idarə olunması xidmətlərini təklif edirik.",
    },
    {
      image: "",
      title: "Nasosların təmiri və qulluğu",
      content:
        "Biz sənaye standartlarına və qaydalarına uyğun olaraq nasosxana, nasos stansiyalarının qurulması, nasosların təmiri və texniki xidməti fəaliyyətlərini həyata  keçiririrk.",
    },
    {
      image: "",
      title: "Elektrik",
      content:
        "Biz layihələndirmə və quraşdırmadan istismara verməyə qədər layihənin bütün həyat dövrünə kompleks elektrik mühəndisliyi və elektrik alət və avadanlıqları üzrə dəstək xidmətlərimizi təqdim edirik. Həlllərimiz səmərəliliyi artırmaq, avadanlıqların işləmə müddətini artırmaq və əməliyyat xərclərini azaltmaq məqsədi daşıyır.",
    },
    {
      image: "",
      title: "Buxar və istilik qazanxanaları",
      content:
        "Biz ən yüksək performans va normativ bazaya uyğunluğu təmin etməklə qazanxanaların quraşdırılması, texniki xidməti, təmiri fəaliyyətlərini həyata keçiririk.",
    },
    {
      image: "",
      title: "Treyding",
      content:
        "Bu seqment üzrə şirkətimiz neft kimya məhsullarının ölkə daxili və ölkə xaricində satışını və logistikanı təşkil edir.",
    },
  ];
  return (
    <>
      <section class="background_foto">
        <div class="container">
          <h1>Xidmətlər</h1>
          <p></p>
          <div class="flex_end">
            <div class="page_nav">
              <Link to="/" href="#">
                Ana səhifə
              </Link>
              <span>
                <i
                  class="fa-solid fa-chevrons-right"
                  style={{ fontSize: "9px", paddingRight: "5px" }}
                ></i>
                Xidmətlər
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="blog">
        <div class="container">
          <div id="column_divs_first">
            {data.map((d) => (
              <div class="column_div_first">
                <div class="img_in_column_div">
                  <img
                    src={`/assets/images/catalog_images/${d.image}`}
                    alt=""
                    class="img_own"
                  />
                </div>
                <div class="text_in_column_div">
                  <h3>{d.title}</h3>
                  <p>{d.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
