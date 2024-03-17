import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Services_detail from "./pages/Services_detail";
import Service from "./pages/Service";
import { useEffect } from "react";
import Services from "./pages/Services";
import Certificate from "./pages/Certificate";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
// import AOS from "aos";
// import "aos/dist/aos.css";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    // AOS.init({
    //   once: false,
    //   mirror: false,
    // });
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/s_detail" element={<Services_detail />} />
        <Route path="/companies" element={<Service />} />
        <Route path="/services" element={<Services />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/news" element={<News />} />
        <Route
          path="/caspian-capital-group-sirkəti-ilə-turkiyənin-ozgun-insaat-sirkəti-arasida-sazis-imzalanib/"
          element={<NewsDetail />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
