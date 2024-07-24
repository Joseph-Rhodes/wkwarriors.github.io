import React from "react";
import "./NewsItem.css";

const NewsItem = ({ title, imageUrl, description }) => {
  return (
    <div className="news-item">
      <img src={imageUrl} alt={title} className="news-item-image" />
      <h2 className="news-item-title">{title}</h2>
    </div>
  );
};

export default NewsItem;
