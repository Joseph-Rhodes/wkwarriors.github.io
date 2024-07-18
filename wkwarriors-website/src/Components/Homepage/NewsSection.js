import React, { useState } from 'react';
import './NewSection.css';

const articles = [
  {
    id: 1,
    date: 'JUNE 27, 2024',
    category: "5X5 U17 MEN'S WORLD CUP",
    title: 'CHRIS CENAC JR.’S RAPID RISE BUILT ON FOUNDATION OF EFFORT AND HARDWORK',
    description: 'His performances in the past year allowed Cenac Jr. to jump from being a player ranked outside the top 50 in the class of 2025 to being a top-20 player.',
    image: `../../Images/teamPhoto.png`,
  },
  {
    id: 2,
    date: 'JUNE 25, 2024',
    category: "3X3 WOMEN'S SERIES",
    title: 'USA WOMEN RENEW 2024 FIBA 3X3 WOMEN\'S SERIES ACTION WITH PITSTOP IN QUEBEC',
    description: 'Following April’s runner-up finish in Springfield at the Naismith Basketball Hall of Fame, the USA women will recommence their 2024 FIBA 3x3 Women’s Series play at Quebec 2024 from June 29-30 in Canada.',
    image: `../../Images/wkwLogo.png`,
  },
  {
    id: 3,
    date: 'JUNE 25, 2024',
    category: "3X3 WOMEN'S SERIES",
    title: 'USA WOMEN RENEW 2024 FIBA 3X3 WOMEN\'S SERIES ACTION WITH PITSTOP IN QUEBEC',
    description: 'Following April’s runner-up finish in Springfield at the Naismith Basketball Hall of Fame, the USA women will recommence their 2024 FIBA 3x3 Women’s Series play at Quebec 2024 from June 29-30 in Canada.',
    image: `../../Images/DSCF0003.JPG`,
  },
  {
    id: 4,
    date: 'JUNE 25, 2024',
    category: "3X3 WOMEN'S SERIES",
    title: 'USA WOMEN RENEW 2024 FIBA 3X3 WOMEN\'S SERIES ACTION WITH PITSTOP IN QUEBEC',
    description: 'Following April’s runner-up finish in Springfield at the Naismith Basketball Hall of Fame, the USA women will recommence their 2024 FIBA 3x3 Women’s Series play at Quebec 2024 from June 29-30 in Canada.',
    image: `../../Images/DSCF0002.JPG`,
  },
  {
    id: 5,
    date: 'JUNE 25, 2024',
    category: "3X3 WOMEN'S SERIES",
    title: 'USA WOMEN RENEW 2024 FIBA 3X3 WOMEN\'S SERIES ACTION WITH PITSTOP IN QUEBEC',
    description: 'Following April’s runner-up finish in Springfield at the Naismith Basketball Hall of Fame, the USA women will recommence their 2024 FIBA 3x3 Women’s Series play at Quebec 2024 from June 29-30 in Canada.',
    image: `../../Images/DSCF0001.JPG`,
  },
  // Add more articles as needed
];


const NewsSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 4;

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.floor(articles.length / articlesPerPage)));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * articlesPerPage;
  const endIndex = Math.min(startIndex + articlesPerPage, articles.length);
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <div>
      <div className="news-section">
        <div className="news-image">
          <img src={selectedArticle.image} alt={selectedArticle.title} />
        </div>
        <div className="news-content">
          <div className="news-date-category">{selectedArticle.date} | {selectedArticle.category}</div>
          <h1 className="news-title">{selectedArticle.title}</h1>
          <p className="news-description">{selectedArticle.description}</p>
          <a href="#" className="read-article">Read article -{'>'}</a>
        </div>
      </div>
      <div className="article-titles">
        {currentPage > 0 && articles.length > articlesPerPage && (
          <button onClick={prevPage} className="navs-button left"><i className="fa-solid fa-arrow-left"></i></button>
        )}
        {currentArticles.map((article) => (
          <div
            key={article.id}
            className={`article-title ${article.id === selectedArticle.id ? 'active' : ''}`}
            onClick={() => handleArticleClick(article)}
          >
            {article.title}
          </div>
        ))}
        {currentPage < Math.floor(articles.length / articlesPerPage) && articles.length > articlesPerPage && (
          <button onClick={nextPage} className="navs-button right"><i className="fa-solid fa-arrow-right"></i></button>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
