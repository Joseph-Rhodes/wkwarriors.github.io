import React from "react";
import { useState } from "react";
import "./Roster.css";

const players = [
  {
    id: 1,
    number: 24,
    name: "Player One",
    image: "../../Images/IMG_2678.JPG",
    hometown: "Hometown One",
    height: "6'0\"",
    weight: "180 lbs",
    age: 23,
    position: "SF",
    points: 10,
    rebounds: 5,
    assists: 3,
  },
  {
    id: 2,
    number: 24,
    name: "Player Two",
    image: "../../Images/IMG_2678.JPG",
    hometown: "Hometown Two",
    height: "6'2\"",
    weight: "190 lbs",
    age: 23,
    position: "SG",
    points: 12,
    rebounds: 6,
    assists: 4,
  },
  {
    id: 3,
    number: 24,
    name: "Player Three",
    image: "../../Images/IMG_2678.JPG",
    hometown: "Hometown Three",
    height: "6'1\"",
    weight: "185 lbs",
    age: 23,
    position: "PF",
    points: 11,
    rebounds: 5.5,
    assists: 3.5,
  },
  {
    id: 4,
    number: 24,
    name: "Player Four",
    image: "../../Images/IMG_2678.JPG",
    hometown: "Hometown Four",
    height: "6'3\"",
    weight: "195 lbs",
    age: 23,
    position: "SF",
    points: 14,
    rebounds: 7,
    assists: 5,
  },
  {
    id: 5,
    number: 24,
    name: "Player Five",
    image: "../../Images/IMG_2678.JPG",
    hometown: "Hometown Five",
    height: "6'4\"",
    weight: "200 lbs",
    age: 23,
    position: "PG",
    points: 16,
    rebounds: 8,
    assists: 6,
  },
  {
    id: 6,
    number: 24,
    name: "Player Six",
    image: "../../Images/IMG_2678.JPG",
    hometown: "Hometown Six",
    height: "6'5\"",
    weight: "210 lbs",
    age: 23,
    position: "C",
    points: 18,
    rebounds: 9,
    assists: 7,
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
        <h1>West Kirby Warriors Team</h1>
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
                  <th className={getHeaderClass("height")} onClick={() => handleSort("height")}>Height</th>
                  <th className={getHeaderClass("weight")} onClick={() => handleSort("weight")}>Weight</th>
                  <th className={getHeaderClass("age")} onClick={() => handleSort("age")}>Age</th>
                  <th className={getHeaderClass("hometown")} onClick={() => handleSort("hometown")}>Hometown</th>
                  <th className={getHeaderClass("points")} onClick={() => handleSort("points")}>PPG</th>
                  <th className={getHeaderClass("rebounds")} onClick={() => handleSort("rebounds")}>RPG</th>
                  <th className={getHeaderClass("assists")} onClick={() => handleSort("assists")}>APG</th>
                </tr>
              </thead>
              <tbody>
                {sortedPlayers.map((player) => (
                  <tr key={player.id}>
                    <td>{player.name}</td>
                    <td>{player.number}</td>
                    <td>{player.position}</td>
                    <td>{player.height}</td>
                    <td>{player.weight}</td>
                    <td>{player.age}</td>
                    <td>{player.hometown}</td>
                    <td>{player.points}</td>
                    <td>{player.rebounds}</td>
                    <td>{player.assists}</td>
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
                    <span className="bold">Hometown:</span> {player.hometown}
                  </p>
                  <p>
                    <span className="bold">Height:</span> {player.height}{" "}
                    <span className="bold"> Weight:</span> {player.weight}
                  </p>
                  <p>
                    <span className="bold">Age:</span> {player.age}
                  </p>
                  <p>
                    <span className="bold">Position:</span> {player.position}
                  </p>
                  <p>
                    <span className="bold">PPG:</span> {player.points}
                  </p>
                  <p>
                    <span className="bold">RPG:</span> {player.rebounds}
                  </p>
                  <p>
                    <span className="bold">APG:</span> {player.assists}
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