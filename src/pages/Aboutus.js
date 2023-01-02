import React from "react";
import Aboutinfo from "../components/About-info";
import BannerPage from "../components/BannerPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <BannerPage
        heading="About Us"
        text="Our history"
        image="images/about.jpg"
      />
      <div className="about">
        <div className="about-container">
          <div className="about-left">
            <h5>Our Vision</h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className="about-right">
            <h5>Our Mission</h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
        </div>
      </div>
      <div>
      </div>
      <Aboutinfo />
      <Footer />
    </div>
  );
};

export default Aboutus;
