import React, { useState } from 'react';
import './MediaSection.css';

const cards = [
  {
    title: "Jaylon Tyson: The Newest Addition to the Cavaliers",
    time: "13h",
    draft: "2024 draft",
    description: "Description for Jaylon Tyson",
    imgSrc: "../../Images/teamPhoto.png"
  },
  {
    title: "Prospect Profile: Kyshawn George",
    time: "3d",
    draft: "2024 draft",
    description: "Description for Kyshawn George",
    imgSrc: "../../Images/teamPhoto.png"
  },
  {
    title: "Prospect Profile: Johnny Furphy",
    time: "6d",
    draft: "2024 draft",
    description: "Description for Johnny Furphy",
    imgSrc: "../../Images/teamPhoto.png"
  },
  {
    title: "The Roaring 20s",
    time: "6d",
    draft: "2024 draft",
    description: "Description for The Roaring 20s",
    imgSrc: "../../Images/teamPhoto.png"
  },
  {
    title: "The Roaring 20s",
    time: "6d",
    draft: "2024 draft",
    description: "Description for The Roaring 20s",
    imgSrc: "../../Images/teamPhoto.png"
  },
  {
    title: "The Roaring 20s",
    time: "6d",
    draft: "2024 draft",
    description: "Description for The Roaring 20s",
    imgSrc: "../../Images/teamPhoto.png"
  },
  {
    title: "The Roaring 20s",
    time: "6d",
    draft: "2024 draft",
    description: "Description for The Roaring 20s",
    imgSrc: "../../Images/teamPhoto.png"
  },
  {
    title: "The Roaring 20s",
    time: "6d",
    draft: "2024 draft",
    description: "Description for The Roaring 20s",
    imgSrc: "../../Images/teamPhoto.png"
  },
  // Add more cards as needed
];

const MediaSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 4 < cards.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const currentCards = cards.slice(currentIndex, currentIndex + 4);

  return (
    <div className="media-section">
      <h2 className="section-title">Latest Media</h2>
      <div className="cards-container">
        {currentCards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-image-container">
              <img src={card.imgSrc} alt={card.title} className="card-img" />
              <div className="card-overlay">
                <div className="card-description">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
            {/* <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.time} • {card.draft}</p>
            </div> */}
          </div>
        ))}
      </div>
      {currentIndex > 0 && (
        <button className="nav-button prev" onClick={handlePrev}></button>
      )}
      {currentIndex + 4 < cards.length && (
        <button className="nav-button next" onClick={handleNext}></button>
      )}
    </div>
  );
};

export default MediaSection;
