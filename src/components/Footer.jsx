import React from "react";
import "../Css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">

          {/* About */}
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-logo">Hope & Humanity Trust</h2>

            <p className="footer-text">
              Dedicated to helping people through education, healthcare,
              food support, women empowerment, and social welfare.
              Together we can build a brighter future.
            </p>

            <button className="banner-btn">Donate Now</button>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Quick Links</h5>

            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              {/* <li><a href="/">Projects</a></li> */}
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Mission */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Our Mission</h5>

            <ul className="footer-links">
              <li>Free Education</li>
              {/* <li>Medical Camps</li>
              <li>Food Distribution</li> */}
              <li>Women Empowerment</li>
              <li>Old Age Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Contact Us</h5>

            <p><i className="fa fa-map-marker me-2"></i>Serampore, West Bengal</p>
            <p><i className="fa fa-phone me-2"></i>+91 8697747566</p>
            <p><i className="fa fa-envelope me-2"></i>hopeandhumanitytrust@gmail.com</p>

            {/* <div className="footer-social">
              <a href="/"><i className="fa fa-facebook"></i></a>
              <a href="/"><i className="fa fa-instagram"></i></a>
              <a href="/"><i className="fa fa-twitter"></i></a>
              <a href="/"><i className="fa fa-youtube"></i></a>
            </div> */}
          </div>

        </div>

        <hr />

        <div className="footer-bottom text-center">
          <p>
            © 2026 Hope Charitable Trust. Made with{" "}
            <i className="fa fa-heart"></i> for humanity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;