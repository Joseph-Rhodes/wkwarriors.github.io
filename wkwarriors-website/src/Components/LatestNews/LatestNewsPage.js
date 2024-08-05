import React from "react";
import NewsItem from "./NewsItem";
import { Link } from "react-router-dom";
import "./LatestNewsPage.css";

const newsData = [
  {
    title: "West Kirby Warriors Forward Gabriel Pec Added to 2024 All-Star Roster",
    imageUrl: "../../Images/teamPhoto.png",
    path: "article1",
  },
  {
    title: "West Kirby Warriors Forward Gabriel Pec Added to 2024 All-Star Roster",
    imageUrl: "../../Images/teamPhoto.png",
    path: "article2",
  },
  {
    title: "West Kirby Warriors Forward Gabriel Pec Added to 2024 All-Star Roster",
    imageUrl: "../../Images/teamPhoto.png",
    path: "article3",
  },
  {
    title: "West Kirby Warriors Forward Joseph Paintsil named to Team of the Matchday presented by Audi for Matchday 28",
    imageUrl: "../../Images/DSCF0001.JPG",
    path: "article4",
  },
  {
    title: "West Kirby Warriors Forward Joseph Paintsil named to Team of the Matchday presented by Audi for Matchday 28",
    imageUrl: "../../Images/DSCF0001.JPG",
    path: "article5",
  },
  {
    title: "West Kirby Warriors Forward Joseph Paintsil named to Team of the Matchday presented by Audi for Matchday 28",
    imageUrl: "../../Images/DSCF0001.JPG",
    path: "article6",
  },
  {
    title: "Match Report: West Kirby Warriors Earn 3-2 Victory Over Portland Timbers at Dignity Health Sports Park on Saturday Night",
    imageUrl: "../../Images/DSCF0001.JPG",
    path: "article7",
  },
  {
    title: "Match Report: West Kirby Warriors Earn 3-2 Victory Over Portland Timbers at Dignity Health Sports Park on Saturday Night",
    imageUrl: "../../Images/DSCF0001.JPG",
    path: "article8",
  },
  // ...add the rest of the news items here
];

const LatestNewsPage = () => {
  return (
    <div className="latest-news-container">
      <div className="latest-news-container-header">
        <h1>Latest Headlines</h1>
      </div>
      <div className="news-items-container">
        {newsData.map((news, index) => (
          <Link key={index} to={news.path} style={{ textDecoration: 'none' }}>
            <NewsItem
              title={news.title}
              imageUrl={news.imageUrl}
              description={news.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsPage;
