import React, { useState, useEffect } from "react";
import "../Css/banner.css";
import banner1 from "../images/banner.jpg";
import {useNavigate} from "react-router-dom";
const Banner = () => {
  const images = [banner1, banner1, banner1, banner1];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="banner">
      {/* <button className="prev" onClick={prevSlide}>❮  </button> */}

      <img src={images[currentIndex]} alt="banner" className="banner-image" />

      {/* Overlay Content */}
      <div className="banner-content">
        <div className="hope">Hope & Humanity Trust</div>
        <p>"Together We Can Make a Difference"</p>
        <div className="d-flex gap-3 justify-content-center">
        <button className="banner-btn" onClick={() => navigate('/membershipform')}>
            Be a Member
          </button>
          <button className="banner-btn" onClick={() => navigate('/donateform')}>
            Donate Now
          </button>
        </div>
      </div>

      {/* <button className="next" onClick={nextSlide}>❯</button> */}
    </div>
  );
};

export default Banner;
