import React from "react";
import "./Roster.css";

const players = [
  { id: 1, number: 24, name: "Player One", image: "../../Images/teamPhoto.png" },
  { id: 2, number: 24, name: "Player Two", image: "../../Images/teamPhoto.png" },
  { id: 3, number: 24, name: "Player Three", image: "../../Images/teamPhoto.png" },
  { id: 4, number: 24, name: "Player Four", image: "../../Images/teamPhoto.png" },
  { id: 5, number: 24, name: "Player Five", image: "../../Images/teamPhoto.png" },
  { id: 6, number: 24, name: "Player Six", image: "../../Images/teamPhoto.png" },
];

const coaches = [
  { id: 1, title: "Head Coach", name: "Coach One", image: "../../Images/teamPhoto.png" },
  { id: 2, title: "Assistant Head Coach", name: "Coach Two", image: "../../Images/teamPhoto.png" },
];

const RosterPage = () => {
  return (
    <div className="roster-container">
      <div className="roster-container-header">
        <h1>Roster</h1>
        <button className="list-button">List View</button>
      </div>
      <div className="player-container">
        {players.map(player => (
          <div key={player.id} className="player-card">
            <img src={player.image} alt={`${player.name}`} />
            <div className="player-card-title">
              <span className="bold">#{player.number}</span> {player.name}
            </div>
          </div>
        ))}
      </div>
      <div className="coach-container">
        {coaches.map(coach => (
          <div key={coach.id} className="coach-card">
            <img src={coach.image} alt={`${coach.name}`} />
            <div className="coach-card-title">
              <span className="bold">{coach.title}</span> {coach.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RosterPage;
