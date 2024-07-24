import React from "react";
import "./NewsPage.css";
import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <div className="news-container">
      <div className="news-container-header">
        <h1>West Kirby Warrior News</h1>
      </div>

      <div className="news-section">
        <div className="main-news">
          <Link to="../latest-news/article1" className="main-news-link">
            <img src="../../Images/teamPhoto.png" alt="main-news-img" />
            <h2>
              LA Galaxy Forward Gabriel Pec Added to 2024 MLS All-Star Roster
            </h2>
          </Link>
          <p>
            LOS ANGELES (Sunday, July 21, 2024) – Major League Soccer today
            announced that LA Galaxy forward Gabriel Pec was added to the 2024
            MLS All-Star roster by head coach Wilfried Nancy. In 25 appearances
            (22 starts) in his first season with the LA Galaxy, Pec, 23, has
            totaled 20 goals.
          </p>
        </div>

        <div className="additional-news">
          <div className="supplement-article">
            <div className="article-content">
              <Link to="../latest-news/article2" className="supplement-article-link">
                <h3>
                  LA Galaxy Forward Joseph Paintsil named to MLS Team of the
                  Matchday presented by Audi for Matchday 28
                </h3>
              </Link>
            </div>
            <div className="article-image">
              <Link to="../latest-news/article2" className="supplement-article-link">
                <img src="../../Images/teamPhoto.png" alt="article-1-img" />
              </Link>
            </div>
          </div>
          <div className="supplement-article">
            <div className="article-content">
              <Link to="../latest-news/article3" className="supplement-article-link">
                <h3>
                  Match Report: LA Galaxy Earn 3-2 Victory Over Portland Timbers at
                  Dignity Health Sports Park on Saturday Night
                </h3>
              </Link>
            </div>
            <div className="article-image">
              <Link to="../latest-news/article3" className="supplement-article-link">
                <img src="../../Images/teamPhoto.png" alt="article-2-img" />
              </Link>
            </div>
          </div>
          <div className="supplement-article">
            <div className="article-content">
              <Link to="../latest-news/article4" className="supplement-article-link">
                <h3>
                  Guía del Partido presentado por Kinecta: LA Galaxy contra Portland
                  Timbers | 20 de Julio de 2024
                </h3>
              </Link>
            </div>
            <div className="article-image">
              <Link to="../latest-news/article4" className="supplement-article-link">
                <img src="../../Images/teamPhoto.png" alt="article-3-img" />
              </Link>
            </div>
          </div>
          <div className="supplement-article">
            <div className="article-content">
              <Link to="../latest-news/article5" className="supplement-article-link">
                <h3>
                  Starting XI presented by Modelo: LA Galaxy vs. Portland Timbers |
                  July 20, 2024
                </h3>
              </Link>
            </div>
            <div className="article-image">
              <Link to="../latest-news/article5" className="supplement-article-link">
                <img src="../../Images/teamPhoto.png" alt="article-4-img" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="morenews-button">
        <Link to="/latest-news" style={{ textDecoration: 'none' }} className="all-news">All News</Link>
      </div>
    </div>
  );
};

export default NewsPage;
