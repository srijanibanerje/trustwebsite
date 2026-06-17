import React, { useState } from "react";
import "../Css/about.css";
import aboutImg from "../images/pic1.jpg";
import doc1 from "../images/deed.png";
import doc2 from "../images/pan.png";
import doc3 from "../images/10A.png";
import doc4 from "../images/sjh.png";
const Aboutus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const photos = [
    { id: 1, src: doc2, alt: "Image 1" },
    { id: 2, src: doc1, alt: "Image 2" },
    { id: 3, src: doc3, alt: "Image 3" },
    { id: 4, src: doc4, alt: "Image 4" },
    // { id: 4, src: doc3, alt: 'Image 4' },
    // { id: 5, src: doc4, alt: 'Image 5' },
    // { id: 6, src: doc5, alt: 'Image 6' },
    // { id: 7, src: doc6, alt: 'Image 6' },
  ];

  const openLightbox = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="about-section">
        <h2 className="abouthead">About Us</h2>
        <div className="about-container">
          <p className="about-heading">
            Hope and Humanity Trust, Serampore is a non profitable charitable
            organisation registered on 04 Aug 2025. Primarily, the trust was
            raised to organise people to get back their deposits in the hand of
            SDFX Global Private Ltd .
          </p>

          {/* Left Side Image */}

          {/* Right Side Content */}
          <div className="about-content">
            <h3>OBJECTS OF THE TRUST</h3>

            <p>
              The objects for which the Trust is established are exclusively
              charitable in nature and include:
            </p>

            <ol className="trust-objectives">
              <li>
                <strong>Prevention of Financial Fraud:</strong> To educate and
                protect the public, especially vulnerable groups, from financial
                fraud, scams, usury and economic exploitation through awareness
                programs, counseling, legal aid and advocacy.
              </li>

              <li>
                <strong>Healthcare & Medical Relief:</strong> To promote public
                health by organizing free medical camps, providing medicines and
                treatment to the needy, supporting surgeries for underprivileged
                patients, spreading health education, and aiding mental health
                initiatives.
              </li>

              <li>
                <strong>Educational Advancement:</strong> To promote education
                by granting scholarships, running free coaching centers,
                distributing books and study materials, conducting skill
                development and vocational training, and supporting schools in
                rural and backward areas.
              </li>

              <li>
                <strong>Welfare of Children:</strong> To provide care, shelter,
                food, clothing, education and rehabilitation to orphaned,
                abandoned, destitute and street children.
              </li>

              <li>
                <strong>Support for Elderly:</strong> To establish and maintain
                old age homes, daycare centers and support services, including
                medical care and companionship for senior citizens who are
                destitute or without family support.
              </li>

              <li>
                <strong>Food & Poverty Relief:</strong> To eradicate hunger by
                running community kitchens, distributing free food and rations,
                and providing relief during natural calamities and disasters to
                persons in distress.
              </li>

              <li>
                <strong>General Charitable Purpose:</strong> To undertake any
                other activity for the relief of the poor, education, medical
                relief, and advancement of any other object of general public
                utility not involving the carrying on of any activity for
                profit, as defined under Section 2(15) of the Income Tax Act,
                1961.
              </li>
            </ol>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="About Trust" />
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="gallery">
          {photos.map((photo, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openLightbox(photo.src)}
            >
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={currentImage} alt="Selected" />
            <span className="close" onClick={closeLightbox}>
              &times;
            </span>
          </div>
        </div>
      )}
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
              Our Trust is a non-profit organization dedicated to improving
              lives through education, healthcare, and social welfare
              initiatives. We believe that every individual deserves equal
              opportunities, dignity, and hope for a better future.
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
    </>
  );
};

export default Aboutus;
