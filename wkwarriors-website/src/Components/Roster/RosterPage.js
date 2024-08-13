import React from "react";
import { useState } from "react";
import "./Roster.css";

const players = [
  {
    id: 1,
    number: 0,
    name: "Dom Hardwick",
    image: "../../Images/IMG_2678.JPG",
    height: "5'11\"",
    age: 19,  // Based on YOB 2005
    position: "SG/PG",
    points: 13.2,
    rebounds: 5.4,
    assists: 3.3,
    blocks: 0.2,
    signed: 2024,
  },
  {
    id: 2,
    number: 2,
    name: "Anthony Tatar",
    image: "../../Images/IMG_2678.JPG",
    height: "6'6\"",
    age: 19,  // Based on YOB 2005
    position: "C",
    points: 4.6,
    rebounds: 8.7,
    assists: 2.8,
    blocks: 4.1,
    signed: 2021,
  },
  {
    id: 3,
    number: 3,
    name: "Ben Cashin",
    image: "../../Images/IMG_2678.JPG",
    height: "6'4\"",
    age: 20,  // Based on YOB 2004
    position: "SF/PF",
    points: 4.9,
    rebounds: 7.5,
    assists: 2.9,
    blocks: 2.3,
    signed: 2021,
  },
  {
    id: 4,
    number: 4,
    name: "Nathan Hallam",
    image: "../../Images/IMG_2678.JPG",
    height: "6'1\"",
    age: 19,  // Based on YOB 2005
    position: "SF/PF",
    points: 12.0,
    rebounds: 3.0,
    assists: 3.0,
    blocks: 0.0,
    signed: 2023,
  },
  {
    id: 5,
    number: 7,
    name: "Patrick James",
    image: "../../Images/IMG_2678.JPG",
    height: "6'1\"",
    age: 27,  // Based on YOB 1997
    position: "SG/PG",
    points: 13.5,
    rebounds: 5.1,
    assists: 3.0,
    blocks: 1.0,
    signed: 2024,
  },
  {
    id: 6,
    number: 11,
    name: "Anthony Romba",
    image: "../../Images/IMG_2678.JPG",
    height: "6'3\"",
    age: 26,  // Based on YOB 1998
    position: "PG",
    points: 27.7,
    rebounds: 7.8,
    assists: 4.2,
    blocks: 3.2,
    signed: 2023,
  },
  {
    id: 7,
    number: 12,
    name: "Thomas Ellwood",
    image: "../../Images/IMG_2678.JPG",
    height: "6'3\"",
    age: 23,  // Based on YOB 2001
    position: "C/SF",
    points: 20.5,
    rebounds: 8.5,
    assists: 4.5,
    blocks: 3.5,
    signed: 2024,
  },
  {
    id: 8,
    number: 15,
    name: "Roman Johnson",
    image: "../../Images/IMG_2678.JPG",
    height: "5'11\"",
    age: 16,  // Based on YOB 2008
    position: "PF",
    points: 4.2,
    rebounds: 3.6,
    assists: 3.1,
    blocks: 0.0,
    signed: 2024,
  },
  {
    id: 9,
    number: 16,
    name: "Dan Merrett",
    image: "../../Images/IMG_2678.JPG",
    height: "6'1\"",
    age: 20,  // Based on YOB 2004
    position: "SF",
    points: 4.4,
    rebounds: 4.3,
    assists: 2.7,
    blocks: 0.2,
    signed: 2021,
  },
  {
    id: 10,
    number: 35,
    name: "Riley Johnson",
    image: "../../Images/IMG_2678.JPG",
    height: "6'3\"",
    age: 19,  // Based on YOB 2005
    position: "SG/SF",
    points: 12.5,
    rebounds: 5.8,
    assists: 4.0,
    blocks: 1.0,
    signed: 2024,
  },
  {
    id: 11,
    number: 95,
    name: "Greg Blair",
    image: "../../Images/IMG_2678.JPG",
    height: "6'2\"",
    age: 19,  // Based on YOB 2005
    position: "SG/SF",
    points: 14.7,
    rebounds: 6.5,
    assists: 4.7,
    blocks: 0.6,
    signed: 2023,
  },
];


const coaches = [
  {
    id: 1,
    title: "Head Coach",
    name: "Coach One",
    image: "../../Images/IMG_2678.JPG",
  },
  {
    id: 2,
    title: "Assistant Head Coach",
    name: "Coach Two",
    image: "../../Images/IMG_2678.JPG",
  },
  {
    id: 3,
    title: "Shooting Coach",
    name: "Coach Three",
    image: "../../Images/IMG_2678.JPG",
  },
  {
    id: 4,
    title: "Passing Coach",
    name: "Coach Two",
    image: "../../Images/IMG_2678.JPG",
  },
];
const RosterPage = () => {
  const [isListView, setIsListView] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const toggleView = () => {
    setIsListView(!isListView);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedPlayers = [...players].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const getHeaderClass = (key) => {
    return sortConfig.key === key ? "sorted-column" : "";
  };

  return (
    <div className="roster-container">
      <div className="roster-container-header">
        <h1>West Kirby Warriors Team Roster</h1>
        <button className="list-button" onClick={toggleView}>
          {isListView ? "Card View" : "List View"}
        </button>
      </div>

      {isListView ? (
        <div className="list-view">
          <div className="players-table">
            <table>
              <thead>
                <tr>
                  <th className={getHeaderClass("name")} onClick={() => handleSort("name")}>Name</th>
                  <th className={getHeaderClass("number")} onClick={() => handleSort("number")}>Number</th>
                  <th className={getHeaderClass("position")} onClick={() => handleSort("position")}>Position</th>
                  <th className={getHeaderClass("signed")} onClick={() => handleSort("signed")}>Year Signed</th>
                  <th className={getHeaderClass("age")} onClick={() => handleSort("age")}>Age</th>
                  <th className={getHeaderClass("height")} onClick={() => handleSort("height")}>Height</th>
                  <th className={getHeaderClass("points")} onClick={() => handleSort("points")}>PPG</th>
                  <th className={getHeaderClass("rebounds")} onClick={() => handleSort("rebounds")}>RPG</th>
                  <th className={getHeaderClass("assists")} onClick={() => handleSort("assists")}>APG</th>
                  <th className={getHeaderClass("blocks")} onClick={() => handleSort("blocks")}>BPG</th>
                </tr>
              </thead>
              <tbody>
                {sortedPlayers.map((player) => (
                  <tr key={player.id}>
                    <td>{player.name}</td>
                    <td>{player.number}</td>
                    <td>{player.position}</td>
                    <td>{player.signed}</td>
                    <td>{player.age}</td>
                    <td>{player.height}</td>
                    <td>{player.points}</td>
                    <td>{player.rebounds}</td>
                    <td>{player.assists}</td>
                    <td>{player.blocks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="coaches-table">
            <table>
              <thead>
                <tr>
                  <th>Coaching Staff</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {coaches.map((coach) => (
                  <tr key={coach.id}>
                    <td>{coach.title}</td>
                    <td>{coach.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <>
          <div className="player-container">
            {players.map((player) => (
              <div key={player.id} className="player-card">
                <img src={player.image} alt={`${player.name}`} />
                <div className="player-card-title">
                  <div className="player-name">{player.name}</div>
                  <div className="player-number">#{player.number}</div>
                </div>
                <div className="player-info">
                  <p>
                    <span className="bold">Year Signed:</span> {player.signed}
                  </p>
                  <p>
                    <span className="bold">Height:</span> {player.height}
                  </p>
                  <p>
                    <span className="bold">Age:</span> {player.age}
                  </p>
                  <p>
                    <span className="bold">Position:</span> {player.position}
                  </p>
                  <p>
                    <span className="bold">PPG:</span> {player.points} {"   "} <span className="bold">APG:</span> {player.rebounds}
                  </p>
                  <p>
                    <span className="bold">RPG:</span> {player.rebounds} {"  "} <span className="bold">BPG:</span> {player.blocks}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="coach-container">
            {coaches.map((coach) => (
              <div key={coach.id} className="coach-card">
                <img src={coach.image} alt={`${coach.name}`} />
                <div className="coach-card-title">
                  <div className="coach-name">{coach.name}</div>
                  <div className="coach-title">{coach.title}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RosterPage;