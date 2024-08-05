import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import galleries from './GalleryData';
import './GalleryPage.css';

const GalleryPage = () => {
  const { id } = useParams();
  const gallery = galleries.find((g) => g.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!gallery) {
    return <h1>Gallery not found</h1>;
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? gallery.photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === gallery.photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-page-container">
      <h1 className="gallery-title">{gallery.title}</h1>
      <div className="gallery-slider-container">
        <button onClick={goToPrevious} className="gallery-nav-button prev">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="gallery-image-container">
          <img
            className="gallery-slider-image"
            src={gallery.photos[currentIndex]}
            alt={`${gallery.title} ${currentIndex + 1}`}
          />
        </div>
        <button onClick={goToNext} className="gallery-nav-button next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <Link to="/photos" className="back-to-galleries-button">
        Back to Galleries
      </Link>
    </div>
  );
};

export default GalleryPage;
