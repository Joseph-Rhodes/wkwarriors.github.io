import React from "react";
import { Link } from "react-router-dom";
import "./UpcomingSchedule.css";

const UpcomingSchedule = () => {
  return (
    <>
      <div className="upcoming-schedule-container">
        <div className="upcoming-schedule">
          <h2 className="title">Upcoming Games</h2>
          <div className="games-list">
            <div className="game-item">
              <Link
                to="/woolstonwizardsj21"
                style={{ textDecoration: "none" }}
                className="game-name"
              >
                Game vs. Woolston Wizards
              </Link>
              <p>Warrington Summer League</p>
              <p>Fri, Jun 21 | Liverpool, UK</p>
            </div>
            <div className="game-item">
              <Link
                to="/woolstonwizardsj21"
                style={{ textDecoration: "none" }}
                className="game-name"
              >
                Game vs. Woolston Wizards
              </Link>
              <p>Warrington Summer League</p>
              <p>Fri, Jun 21 | Liverpool, UK</p>
            </div>
            <div className="game-item">
              <Link
                to="/woolstonwizardsj21"
                style={{ textDecoration: "none" }}
                className="game-name"
              >
                Game vs. Woolston Wizards
              </Link>
              <p>Warrington Summer League</p>
              <p>Fri, Jun 21 | Liverpool, UK</p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Link
            to="/schedule"
            style={{ textDecoration: "none" }}
            className="schedule-button"
          >
            See More
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpcomingSchedule;
