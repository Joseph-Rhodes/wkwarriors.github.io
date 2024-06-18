import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import TeamLeaders from "./Pages/Team/TeamLeaders";
import Stats from "./Pages/Team/Stats";
import Schedule from "./Pages/Schedule";
import PrintableSchedule from "./Pages/Schedule/PrintableSchedule";
import News from "./Pages/News";
import Pictures from "./Pages/News/Pictures";
import Videos from "./Pages/News/Videos";
import Shop from "./Pages/Shop"

// Components
import Navbar from "./Components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<Team />} />
        <Route path="/team/leaders" element={<TeamLeaders />} />
        <Route path="/team/stats" element={<Stats />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule/printable" element={<PrintableSchedule />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/pictures" element={<Pictures />} />
        <Route path="/news/videos" element={<Videos />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
