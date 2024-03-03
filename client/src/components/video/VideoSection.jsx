import React, { useEffect, useRef } from "react";
import WOW from "wowjs";
import "./VideoSection.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedText from "../animation/AnimationText";
const VideoSection = () => {
  const videoRef = useRef(null);
  const text =
    "Şirkətimiz, inşaat, mühəndislik, sənaye, təchizat, treydinq ve kənd təsərrüfatı sahələrində \n fəaliyyət göstərən beş fərqlisektorda xidmət verən bir şirkətlər qrubudur";
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
    new WOW.WOW().init();
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  }, []);

  return (
    <section id="video_section">
      <div className="container">
        <video
          ref={videoRef}
          width={"100%"}
          height={"100%"}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./assets/videos/video.mp4" type="video/mp4" />
        </video>
        <div id="video_text">
          <h3>
            Caspian <strong>Şirkətlər</strong> Qrupu
          </h3>
          <p>
            Şirkətimiz, inşaat, mühəndislik, sənaye, təchizat, treydinq ve kənd
            təsərrüfatı sahələrində fəaliyyət göstərən beş fərqli sektorda
            xidmət verən bir şirkətlər qrubudur .
          </p>

          <div id="video_buttons">
            {/* <button>
              <Link to="/services">Xidmətlər</Link>
            </button> */}
            <button>
              <Link to="/companies">Şirkətlər</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
