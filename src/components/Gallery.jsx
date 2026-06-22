import React, { useState } from "react";
import doc5 from "../images/p1.jpeg";
import doc1 from "../images/pj2.jpeg";
import doc2 from "../images/g2.jpeg";
import doc3 from "../images/g3.jpeg";
import doc4 from "../images/g4.jpeg";
const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
  
    const photos = [
      { id: 1, src: doc2, alt: "Image 1" },
      { id: 2, src: doc1, alt: "Image 2" },
      { id: 3, src: doc3, alt: "Image 3" },
      { id: 4, src: doc4, alt: "Image 4" },
      { id: 5, src: doc5, alt: "Image 5" },
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
    </>
  )
}

export default Gallery