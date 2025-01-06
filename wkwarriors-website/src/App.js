import React from "react";
import NewsSection from "./Components/Homepage/NewsSection"
import AboutUs from "./Components/Homepage/AboutUs"
import UpcomingSchedule from "./Components/Homepage/UpcomingSchedule"
import MediaSection from "./Components/Homepage/MediaSection"
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <div>
      <NewsSection />
      <AboutUs />
      <UpcomingSchedule />
      <MediaSection /> 

      {/* Track the Analytics for the website */}
      <Analytics />    
    </div>
  );
};

export default App;