import React, { useState } from "react";
import "./StatsPage.css";

const StatsPage = () => {
  const teamLeaders = [
    { category: "Points", player: "LeBron James", position: "SF", value: 27.8 },
    {
      category: "Rebounds",
      player: "Anthony Davis",
      position: "PF",
      value: 15.6,
    },
    { category: "Assists", player: "LeBron James", position: "SF", value: 8.8 },
    { category: "Steals", player: "LeBron James", position: "SF", value: 2.4 },
    { category: "Blocks", player: "Anthony Davis", position: "PF", value: 1.6 },
  ];

  const initialPlayerStats = [
    {
      name: "Jaxson Hayes",
      position: "SF",
      gp: 4,
      gs: 0,
      min: 6.0,
      pts: 0.3,
      or: 0.3,
      dr: 0.8,
      reb: 2.3,
      ast: 0.3,
      stl: 0.0,
      blk: 0.5,
      to: 1.8,
      pf: 0.5,
      astTo: 0.5,
    },
    {
      name: "Gabe Vincent",
      position: "SF",
      gp: 5,
      gs: 0,
      min: 13.8,
      pts: 1.4,
      or: 0.2,
      dr: 1.4,
      reb: 1.6,
      ast: 0.6,
      stl: 0.4,
      blk: 0.0,
      to: 0.6,
      pf: 1.6,
      astTo: 1.0,
    },
    {
      name: "Gabe Vincent",
      position: "SF",
      gp: 5,
      gs: 0,
      min: 13.8,
      pts: 1.4,
      or: 0.2,
      dr: 1.4,
      reb: 1.6,
      ast: 0.6,
      stl: 0.4,
      blk: 0.0,
      to: 0.6,
      pf: 1.6,
      astTo: 1.0,
    },
    {
      name: "Gabe Vincent",
      position: "SF",
      gp: 5,
      gs: 0,
      min: 13.8,
      pts: 1.4,
      or: 0.2,
      dr: 1.4,
      reb: 1.6,
      ast: 0.6,
      stl: 0.4,
      blk: 0.0,
      to: 0.6,
      pf: 1.6,
      astTo: 1.0,
    },
    {
      name: "Gabe Vincent",
      position: "SF",
      gp: 5,
      gs: 0,
      min: 13.8,
      pts: 1.4,
      or: 0.2,
      dr: 1.4,
      reb: 1.6,
      ast: 0.6,
      stl: 0.4,
      blk: 0.0,
      to: 0.6,
      pf: 1.6,
      astTo: 1.0,
    },
    // Add more player stats here
  ];

  const [playerStats, setPlayerStats] = useState(initialPlayerStats);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedStats = [...playerStats].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setPlayerStats(sortedStats);
    setSortConfig({ key, direction });
  };

  return (
    <div className="stats-container">
      <div className="stats-container-header">
        <h1>West Kirby Warriors Team Statistics</h1>
      </div>
      <div className="stats-table-header-container">
        <h2>Team Leaders</h2>
      </div>

      <div className="team-leaders">
        {teamLeaders.map((leader, index) => (
          <div key={index} className="leader">
            <div className="teamleader-category">{leader.category} per Game</div>
            <div>{leader.player} <span className="teamleader-player-position">{leader.position}</span></div>
            <div>{leader.value}</div>
          </div>
        ))}
      </div>
      <div className="stats-table-header-container">
        <h2>Player Stats</h2>
      </div>
      <div className="player-stats">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>Name</th>
              <th onClick={() => handleSort("gp")}>GP</th>
              <th onClick={() => handleSort("gs")}>GS</th>
              <th onClick={() => handleSort("min")}>MIN</th>
              <th onClick={() => handleSort("pts")}>PTS</th>
              <th onClick={() => handleSort("or")}>OR</th>
              <th onClick={() => handleSort("dr")}>DR</th>
              <th onClick={() => handleSort("reb")}>REB</th>
              <th onClick={() => handleSort("ast")}>AST</th>
              <th onClick={() => handleSort("stl")}>STL</th>
              <th onClick={() => handleSort("blk")}>BLK</th>
              <th onClick={() => handleSort("to")}>TO</th>
            </tr>
          </thead>
          <tbody>
            {playerStats.map((player, index) => (
              <tr key={index}>
                <td>
                  {player.name} <span className="player-position">{player.position}</span>
                </td>
                <td>{player.gp}</td>
                <td>{player.gs}</td>
                <td>{player.min}</td>
                <td>{player.pts}</td>
                <td>{player.or}</td>
                <td>{player.dr}</td>
                <td>{player.reb}</td>
                <td>{player.ast}</td>
                <td>{player.stl}</td>
                <td>{player.blk}</td>
                <td>{player.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsPage;
