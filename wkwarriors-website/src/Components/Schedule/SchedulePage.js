import React, { useState } from "react";
import "./SchedulePage.css";

const SchedulePage = () => {
  const [activeTab, setActiveTab] = useState("UPCOMING");

  return (
    <div className="schedule-page">
      <div className="schedule-title-header">
        <h1>West Kirby Warriors 2024-2025 Schedule</h1>
        
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
              date="30-Aug-24"
              time="21:30 PM UTC"
              homeAway=""
              team1Logo="../../Images/grappenhall.png" //Change the Logo
              team1="Phoenix24"
              location="The Concourse, Hoylake, Liverpool"
            />
            
            {/* Add more GameItem components for other games */}
          </>
        )}
        {activeTab === "PAST" && (
          <>
            
            <GameItem
              typeOfGame="Warrington Summer League"
              date="26-Jul-24"
              time="21:30 PM UTC"
              homeAway="@"
              team1Logo="../../Images/wkwlgo.png" //Change the Logo
              team1="Ball Hall Brickers"
              location="The Concourse, Hoylake, Liverpool" //Change
              score="78-30"
            />
            <GameItem
              typeOfGame="Warrington Summer League"
              date="19-Jul-24"
              time="21:30 PM UTC"
              homeAway=""
              team1Logo="../../Images/wkwlgo.png" //Change the Logo
              team1="Penketh Niners"
              location="Concourse, Hoylake" //Change
              score="20-19"
            />
            <GameItem
              typeOfGame="Warrington Summer League"
              date="12-Jul-24"
              time="21:30 PM UTC"
              homeAway="@"
              team1Logo="../../Images/woolston wiz.gif"
              team1="Woolston Wizards"
              location="The Concourse, Hoylake, Liverpool" //Change
              score="45-32"
            />
            <GameItem
              typeOfGame="Warrington Summer League"
              date="5-Jul-24"
              time="21:30 PM UTC"
              homeAway=""
              team1Logo="../../Images/grappenhall.png"
              team1="Grappenhall Growlers" 
              location="Concourse, Hoylake" //Change
              score="68-19"
            />
            <GameItem
              typeOfGame="Warrington Summer League"
              date="28-Jun-24"
              time="21:30 PM UTC"
              homeAway=""
              team1Logo="../../Images/wkwlgo.png" //Change the Logo
              team1="Mersey Mavericks"
              location="Concourse, Hoylake"
              score="45-57"
            />
            <GameItem
              typeOfGame="Warrington Summer League"
              date="25-Jun-24"
              time="20:30 PM UTC"
              homeAway="@"
              team1Logo="../../Images/WhitbyBCLogo.png" //Change the Logo
              team1="Whitby Basketball Club"
              location="Ellesmere Port Catholic High School"
              score="59-72"
            />
            <GameItem
              typeOfGame="Exhibition"
              date="4-Apr-24"
              time="19:00 PM UTC"
              homeAway="@"
              team1Logo="../../Images/wkwlgo.png" //Change the Logo
              team1="Toxteth Elite"
              location="Liverpool"
              score="1-0"
            />
            <GameItem
              typeOfGame="Exhibition"
              date="2-Apr-24"
              time="20:00 PM UTC"
              homeAway=""
              team1Logo="../../Images/wkwlgo.png" //Change the Logo
              team1="Mold Magic"
              location="Concourse, Hoylake"
              score="49-80"
            />
            <GameItem
              typeOfGame="Exhibition"
              date="9-Mar-24"
              time="20:30 PM UTC"
              homeAway="@"
              team1Logo="../../Images/WhitbyBCLogo.png" //Change the Logo
              team1="Whitby Basketball CLub"
              location="Ellesmere Port Catholic High School"
              score="42-75"
            />
            <GameItem
              typeOfGame="Exhibition"
              date="16-Jan-24"
              time="19:30 PM UTC"
              homeAway="@"
              team1Logo="../../Images/wkwlgo.png" //Change the Logo
              team1="Bromborough Bulldogs"
              location="Bromborough"
              score="64-57"
            />
            <GameItem
              typeOfGame="Exhibition"
              date="30-Dec-23"
              time="15:00 PM UTC"
              homeAway=""
              team1Logo="../../Images/wkwlgo.png" //Change the Logo
              team1="Wirral Bears"
              location="Concourse, Hoylake"
              score="57-64"
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
