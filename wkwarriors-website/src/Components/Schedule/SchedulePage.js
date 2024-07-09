import React, { useState } from "react";
import "./SchedulePage.css";

const SchedulePage = () => {
  const [activeTab, setActiveTab] = useState("UPCOMING");

  return (
    <div className="schedule-page">
      <div className="schedule-title-header">
        West Kirby Warriors 2024-2025 Schedule
      </div>
      <div className="schedule-header">
        <button
          className={`toggle-button ${
            activeTab === "UPCOMING" ? "active" : ""
          }`}
          onClick={() => setActiveTab("UPCOMING")}
        >
          UPCOMING
        </button>
        <button
          className={`toggle-button ${activeTab === "PAST" ? "active" : ""}`}
          onClick={() => setActiveTab("PAST")}
        >
          PAST
        </button>
      </div>

      <div className="opponent-list">
        {activeTab === "UPCOMING" && (
          <>
            <GameItem
              typeOfGame="Warrington Summer League"
              date="Sun 06/22/24"
              time="12:00 PM CDT"
              homeAway=""
              team1Logo="../Images/wkwLogo.png"
              team1="Carolina Panthers"
              location="The Concourse, Hoylake, Liverpool"
            />
            <GameItem
              typeOfGame="Warrington Summer League"
              date="Sun 09/08"
              time="12:00 PM CDT"
              homeAway="@"
              team1Logo="../Images/wkwLogo.png"
              team1="Carolina Panthers"
              location="Ellesmere Port Catholic High School"
            />
            {/* Add more GameItem components for other games */}
          </>
        )}
        {activeTab === "PAST" && (
          <>
            <GameItem
              typeOfGame="Warrington Summer League"
              date="Sun 06/22/24"
              time="12:00 PM CDT"
              homeAway=""
              team1Logo="../Images/wkwLogo.png"
              team1="Carolina Panthers"
              location="The Concourse, Hoylake, Liverpool"
              score="21-14"
            />
            <GameItem
              typeOfGame="Warrington Summer League"
              date="Sun 09/08"
              time="11:00 PM CDT"
              homeAway="@"
              team1Logo="../Images/wkwLogo.png"
              team1="Carolina Panthers"
              location="Ellesmere Port Catholic High School"
              score="10-18"
            />
            {/* Add more GameItem components for other games */}
          </>
        )}
      </div>
    </div>
  );
};

const GameItem = ({
  typeOfGame,
  date,
  homeAway,
  time,
  team1Logo,
  team1,
  location,
  score,
}) => {
  const getScoreColor = (score) => {
    if (!score) return '';
    const [firstScore, secondScore] = score.split('-').map(Number);
    if (firstScore > secondScore) {
      return 'score-win';
    } else if (firstScore < secondScore) {
      return 'score-loss';
    }
    return '';
  };

  return (
    <div className="opponent-item">
      <div className="opponent-header">
        <span className="typeOfGame">{typeOfGame}</span>
        <span className="date-time">
          {date} • {time}
        </span>
      </div>
      <div className="opponent-body">
        <span className="home-away">{homeAway}</span>
        <img src={team1Logo} alt={team1} className="opponent-team-logo" />
        <span className="opponent-team-name">{team1}</span>
        {score && <span className={`score ${getScoreColor(score)}`}>{score}</span>}
      </div>
      <div className="opponent-footer">
        <span className="location">{location}</span>
      </div>
    </div>
  );
};

export default SchedulePage;
