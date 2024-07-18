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
                26.6 <span>PTS</span>
              </h3>
              <p>
                <span>Donovan</span>
                <strong>Mitchell</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Donovan Mitchell" />
          </div>
          <div className="player small">
            <div className="team-records">
              <h3>
                18.0 <span>PTS</span>
              </h3>
              <p>
                <span>Darius</span>
                <strong>Garland</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Darius Garland" />
          </div>
          <div className="player small2">
            <div className="team-records">
              <h3>
                16.5 <span>PTS</span>
              </h3>
              <p>
                <span>Jarrett</span>
                <strong>Allen</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Jarrett Allen" />
          </div>
        </div>
      </div>

      {/* Rebound Category */}
      <div className="category">
        <h2>Rebound Record</h2>
        <div className="record">
          <div className="player large">
            <div className="team-records">
              <h3>
                10 <span>REBS</span>
              </h3>
              <p>
                <span>Donovan</span>
                <strong>Mitchell</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Donovan Mitchell" />
          </div>
          <div className="player small">
            <div className="team-records">
              <h3>
                7 <span>REBS</span>
              </h3>
              <p>
                <span>Darius</span>
                <strong>Garland</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Darius Garland" />
          </div>
          <div className="player small2">
            <div className="team-records">
              <h3>
                4 <span>REBS</span>
              </h3>
              <p>
                <span>Jarrett</span>
                <strong>Allen</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Jarrett Allen" />
          </div>
        </div>
      </div>
      {/* Assits Category */}
      <div className="category">
        <h2>Assit Record</h2>
        <div className="record">
          <div className="player large">
            <div className="team-records">
              <h3>
                10 <span>ASTS</span>
              </h3>
              <p>
                <span>Donovan</span>
                <strong>Mitchell</strong>
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
                <span>Darius</span>
                <strong>Garland</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Darius Garland" />
          </div>
          <div className="player small2">
            <div className="team-records">
              <h3>
                4 <span>ASTS</span>
              </h3>
              <p>
                <span>Jarrett</span>
                <strong>Allen</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Jarrett Allen" />
          </div>
        </div>
      </div>

      {/* Steals Category */}
      <div className="category">
        <h2>Steal Record</h2>
        <div className="record">
          <div className="player large">
            <div className="team-records">
              <h3>
                10 <span>STLS</span>
              </h3>
              <p>
                <span>Donovan</span>
                <strong>Mitchell</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Donovan Mitchell" />
          </div>
          <div className="player small">
            <div className="team-records">
              <h3>
                7 <span>STLS</span>
              </h3>
              <p>
                <span>Darius</span>
                <strong>Garland</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Darius Garland" />
          </div>
          <div className="player small2">
            <div className="team-records">
              <h3>
                4 <span>STLS</span>
              </h3>
              <p>
                <span>Jarrett</span>
                <strong>Allen</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Jarrett Allen" />
          </div>
        </div>
      </div>


      {/* Blocks Category */}
      <div className="category">
        <h2>Block Record</h2>
        <div className="record">
          <div className="player large">
            <div className="team-records">
              <h3>
                10 <span>BLKS</span>
              </h3>
              <p>
                <span>Donovan</span>
                <strong>Mitchell</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Donovan Mitchell" />
          </div>
          <div className="player small">
            <div className="team-records">
              <h3>
                7 <span>BLKS</span>
              </h3>
              <p>
                <span>Darius</span>
                <strong>Garland</strong>
              </p>
            </div>
            <img src="../../Images/IMG_2697-Photoroom.png" alt="Darius Garland" />
          </div>
          <div className="player small2">
            <div className="team-records">
              <h3>
                4 <span>BLKS</span>
              </h3>
              <p>
                <span>Jarrett</span>
                <strong>Allen</strong>
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
