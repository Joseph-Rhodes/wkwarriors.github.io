import React from 'react';
import "./TeamRecords.css";

const TeamRecordsPage = () => {
  return (
    <div className="team-records">
      <div className="category">
        <h2>Points Per Game</h2>
        <div className="record">
          <div className="player">
            <img src="../../Images/IMG_2678.JPG" alt="Donovan Mitchell" />
            <div className="stats">
              <h3>26.6 <span>PTS</span></h3>
              <p>Donovan <strong>Mitchell</strong></p>
            </div>
          </div>
          <div className="player">
            <img src="../../Images/IMG_2678.JPG" alt="Darius Garland" />
            <div className="stats">
              <h3>18.0 <span>PTS</span></h3>
              <p>Darius <strong>Garland</strong></p>
            </div>
          </div>
          <div className="player">
            <img src="../../Images/IMG_2678.JPG" alt="Jarrett Allen" />
            <div className="stats">
              <h3>16.5 <span>PTS</span></h3>
              <p>Jarrett <strong>Allen</strong></p>
            </div>
          </div>
        </div>
      </div>
      <div className="category">
        <h2>Rebounds Per Game</h2>
        <div className="record">
          <div className="player">
            <img src="../../Images/IMG_2678.JPG" alt="Jarrett Allen" />
            <div className="stats">
              <h3>10.5 <span>REBS</span></h3>
              <p>Jarrett <strong>Allen</strong></p>
            </div>
          </div>
          <div className="player">
            <img src="../../Images/IMG_2678.JPG" alt="Evan Mobley" />
            <div className="stats">
              <h3>9.4 <span>REBS</span></h3>
              <p>Evan <strong>Mobley</strong></p>
            </div>
          </div>
          <div className="player">
            <img src="../../Images/IMG_2678.JPG" alt="Donovan Mitchell" />
            <div className="stats">
              <h3>5.1 <span>REBS</span></h3>
              <p>Donovan <strong>Mitchell</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamRecordsPage;
