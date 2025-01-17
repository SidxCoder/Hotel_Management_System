import React from "react";
import Header from "../Components/Header";
import Section2 from "../Components/Section2";
import ScrollImages from "../Components/ScrollImages";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/700.css"; // Load specific weights
import Reviews from "../Components/Reviews";
import Description from "../Components/Description";
import Deals from "../Components/Deals";
const Landing = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <Header />
      <Section2 />
      <div className="section3 h[40%] p-10 -mt-10 pb-0 bg-gray-300  ">
        <ScrollImages />
      </div>
      <Description />
      <Deals />
      <Reviews />
      <Footer />
    </>
  );
};

export default Landing;
