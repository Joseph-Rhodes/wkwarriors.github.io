import React from "react";
import "./TeamRecords.css";

const TeamRecordsPage = () => {
  return (
    <div className="team-records-container">
      <div className="team-records-container-header">
        <h1>West Kirby Warriors Team Records</h1>
      </div>

      {/* Points Category */}
      <div className="category">
        <h2>Point Record</h2>
        <div className="record">
          <div className="player large">
            <div className="team-records">
              <h3>
                33 <span>PTS</span>
              </h3>
              <p>
                <span>Anthony</span>
                <strong>Rombaut</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Donovan Mitchell" />
          </div>
          <div className="player small">
            <div className="team-records">
              <h3>
                28 <span>PTS</span>
              </h3>
              <p>
                <span>Thomas</span>
                <strong>Ellwood</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Darius Garland" />
          </div>
          <div className="player small2">
            <div className="team-records">
              <h3>
                27 <span>PTS</span>
              </h3>
              <p>
                <span>Joseph</span>
                <strong>Rhodes</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Jarrett Allen" />
          </div>
        </div>
      </div>

      {/* Rebound Category */}
      <div className="category">
        <h2>Rebound Record (approx)</h2>
        <div className="record">
          <div className="player large">
            <div className="team-records">
              <h3>
                12 <span>REBS</span>
              </h3>
              <p>
                <span>Thomas</span>
                <strong>Ellwood</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Donovan Mitchell" />
          </div>
          <div className="player small">
            <div className="team-records">
              <h3>
                11 <span>REBS</span>
              </h3>
              <p>
                <span>Anthony</span>
                <strong>Tatar</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Darius Garland" />
          </div>
          <div className="player small2">
            <div className="team-records">
              <h3>
                10 <span>REBS</span>
              </h3>
              <p>
                <span>Anthony</span>
                <strong>Rombaut</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Jarrett Allen" />
          </div>
        </div>
      </div>
      
      {/* Assist Category */}
      <div className="category">
        <h2>Assist Record</h2>
        <div className="record">
          <div className="player large">
            <div className="team-records">
              <h3>
                8 <span>ASTS</span>
              </h3>
              <p>
                <span>Thomas</span>
                <strong>Ellwood</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Donovan Mitchell" />
          </div>
          <div className="player small">
            <div className="team-records">
              <h3>
                7 <span>ASTS</span>
              </h3>
              <p>
                <span>Greg</span>
                <strong>Blair</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Darius Garland" />
          </div>
          <div className="player small2">
            <div className="team-records">
              <h3>
                7 <span>ASTS</span>
              </h3>
              <p>
                <span>Anthony</span>
                <strong>Rombaut</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Jarrett Allen" />
          </div>
        </div>
      </div>

      {/* Block Category */}
      <div className="category">
        <h2>Block Record</h2>
        <div className="record">
          <div className="player large">
            <div className="team-records">
              <h3>
                8 <span>BLKS</span>
              </h3>
              <p>
                <span>Anthony</span>
                <strong>Tatar</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Donovan Mitchell" />
          </div>
          <div className="player small">
            <div className="team-records">
              <h3>
                6 <span>BLKS</span>
              </h3>
              <p>
                <span>Anthony</span>
                <strong>Rombaut</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Darius Garland" />
          </div>
          <div className="player small2">
            <div className="team-records">
              <h3>
                5 <span>BLKS</span>
              </h3>
              <p>
                <span>Thomas</span>
                <strong>Ellwood</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Jarrett Allen" />
          </div>
        </div>
      </div>

      {/* Steal Category */}
      <div className="category">
        <h2>Steal Record</h2>
        <div className="record">
          <div className="player large">
            <div className="team-records">
              <h3>
                5 <span>STLS</span>
              </h3>
              <p>
                <span>Joseph</span>
                <strong>Rhodes</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Donovan Mitchell" />
          </div>
          <div className="player small">
            <div className="team-records">
              <h3>
                4 <span>STLS</span>
              </h3>
              <p>
                <span>Dom</span>
                <strong>Hardwick</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Darius Garland" />
          </div>
          <div className="player small2">
            <div className="team-records">
              <h3>
                3 <span>STLS</span>
              </h3>
              <p>
                <span>Anthony</span>
                <strong>Rombaut</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Jarrett Allen" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TeamRecordsPage;
