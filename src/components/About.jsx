import React from "react";
import "../Css/about.css";
import aboutImg from "../images/pic1.jpg";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        
        {/* Left Side Image */}
        <div className="about-image">
          <img src={aboutImg} alt="About Trust" />
        </div>

        {/* Right Side Content */}
        <div className="about-content">
          <h2>About Our Trust</h2>
          <p>
            Our Trust is a non-profit organization dedicated to improving lives 
            through education, healthcare, and social welfare initiatives. 
            We believe that every individual deserves equal opportunities, 
            dignity, and hope for a better future.
          </p>

          <h3>Our Mission</h3>
          <p>
            To empower underprivileged communities by providing access to 
            quality education, essential healthcare, and sustainable support 
            systems.
          </p>
          <h3>Our Vision</h3>
          <p>
            To create a society where no one is deprived of basic needs, 
            opportunities, and respect.
          </p>

          <button className="about-btn">Join Our Mission</button>
        </div>

      </div>
    </div>
  );
};

export default About;