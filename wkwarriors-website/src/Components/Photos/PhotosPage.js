// src/Components/Photos/PhotosPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import galleries from './GalleryData';
import './PhotosPage.css';

const PhotosPage = () => {
  return (
    <div className="photos-page-container">
      <div className="photos-page-container-header">
        <h1>Galleries</h1>
      </div>
      <div className="gallery-cards-container">
        {galleries.map((gallery) => (
          <Link to={`/gallery/${gallery.id}`} key={gallery.id} className="gallery-card">
            <img src={gallery.coverPhoto} alt={gallery.title} />
            <h2>{gallery.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;
