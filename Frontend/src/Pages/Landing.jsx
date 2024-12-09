import React from "react";
import styles from "./Landing.module.css";
import Header from "../Components/Header";
import Section2 from "../Components/Section2";
import ScrollImages from "../Components/ScrollImages";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/700.css'; // Load specific weights

const Landing = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="">
      <Header />
      <div className="section2">
        <Section2 />
      </div>
      <div
        className="section3 h[40%] p-10 -mt-10 pb-0 bg-gray-300  "
        // data-aos="zoom-out"
      >
        <ScrollImages />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
