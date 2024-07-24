import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoPage.css";

// Import local video files
import video1 from "../../Videos/IMG_2751.MOV";
import video2 from "../../Videos/IMG_2752.MOV";
import video3 from "../../Videos/IMG_2751.MOV";
import video4 from "../../Videos/IMG_2752.MOV";
import video5 from "../../Videos/IMG_2751.MOV";
import video6 from "../../Videos/IMG_2752.MOV";

// Import local thumbnails (if you have them)
import thumb1 from "../../Images/DSCF0002.JPG";
import thumb2 from "../../Images/DSCF0002.JPG";
import thumb3 from "../../Images/DSCF0002.JPG";
import thumb4 from "../../Images/DSCF0002.JPG";
import thumb5 from "../../Images/DSCF0002.JPG";
import thumb6 from "../../Images/DSCF0002.JPG";

const VideoPage = () => {
  const [playingVideo, setPlayingVideo] = useState(video1);
  const [activeVideoId, setActiveVideoId] = useState(1); // State for active video ID

  const videos = [
    { id: 1, title: "Pups at the Pitch", file: video1, thumbnail: thumb1 },
    {
      id: 2,
      title: "Highlights: LA Galaxy Defeat Portland Timbers",
      file: video2,
      thumbnail: thumb2,
    },
    {
      id: 3,
      title: "Goal: J. Paintsil vs. POR, 58'",
      file: video3,
      thumbnail: thumb3,
    },
    {
      id: 4,
      title: "Goal: R. Puig vs. POR, 48'",
      file: video4,
      thumbnail: thumb4,
    },
    {
      id: 5,
      title: "Goal: G. Pec vs. POR, 37'",
      file: video5,
      thumbnail: thumb5,
    },
    {
      id: 6,
      title: "Highlights: LA Galaxy vs. Colorado Rapids | July 17, 2024",
      file: video6,
      thumbnail: thumb6,
    },
    {
      id: 7,
      title: "Highlights: LA Galaxy vs. Colorado Rapids | July 17, 2024",
      file: video6,
      thumbnail: thumb6,
    },
  ];

  const handleVideoClick = (video) => {
    setPlayingVideo(video.file);
    setActiveVideoId(video.id); // Update active video ID
  };

  return (
    <div className="video-page-container">
      <div className="video-page-container-header">
        <h1>Videos</h1>
      </div>
      <div className="video-content">
        <div className="video-player">
          <ReactPlayer
            url={playingVideo}
            playing
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="video-list">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`video-item ${activeVideoId === video.id ? 'active' : ''}`}
              onClick={() => handleVideoClick(video)}
            >
              <p>{video.title}</p>
              <img src={video.thumbnail} alt={video.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
