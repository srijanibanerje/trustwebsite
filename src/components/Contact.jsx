import React from "react";
import "../Css/contact.css";
import {
  FaFacebookF,
  FaInstagram,
  FaAddressBook,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Left Side */}
        <div>
          <h1 className="contact-title">Contact Us</h1>

          <p className="contact-description">
            We would love to hear from you. Whether you have a question,
            feedback, or business inquiry, feel free to connect with us through
            our social media platforms or visit our location on the map.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <FaAddressBook size={28} color="#1877F2" />
              <h3>Address</h3>
              <p>
                Annapurna Bhaban, Arabinda Park, Sardar Para, P.S Serampore,
                Hoogly-712223
              </p>
            </div>

            <div className="contact-card">
              <FaPhoneAlt size={28} color="#1877F2" />
              <h3>Phone</h3>
              <p>
                +91 8697747566
                <br />
                +91 7003097947
              </p>
            </div>

            <div className="contact-card">
              <FaFacebookF size={28} color="#1877F2" />
              <h3>Facebook</h3>
              <p>Follow us for updates and community posts.</p>
            </div>

            <div className="contact-card">
              <FaInstagram size={28} color="#E1306C" />
              <h3>Instagram</h3>
              <p>See our latest photos, reels, and stories.</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117784.90241754125!2d88.25467147837765!3d22.69929927906505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8851b11ff9691%3A0xea4cbb9bdd0c5d8c!2sANNYAPURNA%20BHABAN%20LODGE!5e0!3m2!1sen!2sin!4v1781162240403!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;