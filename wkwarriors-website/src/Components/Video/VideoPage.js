import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import "./VideoPage.css";

// Import local video files for list
import video1 from "../../Videos/IMG_2751.MOV";
import video2 from "../../Videos/IMG_2752.MOV";
import video3 from "../../Videos/IMG_2751.MOV";
import video4 from "../../Videos/IMG_2752.MOV";
import video5 from "../../Videos/IMG_2751.MOV";
import video6 from "../../Videos/IMG_2752.MOV";

// Import local video files for slider
import sliderVideo1 from "../../Videos/IMG_2776.MOV";
import sliderVideo2 from "../../Videos/IMG_2776.MOV";
import sliderVideo3 from "../../Videos/IMG_2776.MOV";
import sliderVideo4 from "../../Videos/IMG_2776.MOV";
import sliderVideo5 from "../../Videos/IMG_2776.MOV";
import sliderVideo6 from "../../Videos/IMG_2776.MOV";

// Import local thumbnails for list
import thumb1 from "../../Images/DSCF0002.JPG";
import thumb2 from "../../Images/DSCF0002.JPG";
import thumb3 from "../../Images/DSCF0002.JPG";
import thumb4 from "../../Images/DSCF0002.JPG";
import thumb5 from "../../Images/DSCF0002.JPG";
import thumb6 from "../../Images/DSCF0002.JPG";

// Import local thumbnails for slider
import sliderThumb1 from "../../Images/teamPhoto.png";
import sliderThumb2 from "../../Images/teamPhoto.png";
import sliderThumb3 from "../../Images/teamPhoto.png";
import sliderThumb4 from "../../Images/teamPhoto.png";
import sliderThumb5 from "../../Images/teamPhoto.png";
import sliderThumb6 from "../../Images/teamPhoto.png";

const VideoPage = () => {
  const [playingVideo, setPlayingVideo] = useState(video1);
  const [activeVideoId, setActiveVideoId] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  const videoPlayerRef = useRef(null);

  const listVideos = [
    { id: 1, title: "Pups at the Pitch", file: video1, thumbnail: thumb1 },
    { id: 2, title: "Highlights: LA Galaxy Defeat Portland Timbers", file: video2, thumbnail: thumb2 },
    { id: 3, title: "Goal: J. Paintsil vs. POR, 58'", file: video3, thumbnail: thumb3 },
    { id: 4, title: "Goal: R. Puig vs. POR, 48'", file: video4, thumbnail: thumb4 },
    { id: 5, title: "Goal: G. Pec vs. POR, 37'", file: video5, thumbnail: thumb5 },
    { id: 6, title: "Highlights: LA Galaxy vs. Colorado Rapids | July 17, 2024", file: video6, thumbnail: thumb6 },
    { id: 7, title: "Highlights: LA Galaxy vs. Colorado Rapids | July 17, 2024", file: video6, thumbnail: thumb6 },
  ];

  const sliderVideos = [
    { id: 8, title: "New Video 1", file: sliderVideo1, thumbnail: sliderThumb1 },
    { id: 9, title: "New Video 2", file: sliderVideo2, thumbnail: sliderThumb2 },
    { id: 10, title: "New Video 3", file: sliderVideo3, thumbnail: sliderThumb3 },
    { id: 11, title: "New Video 4", file: sliderVideo4, thumbnail: sliderThumb4 },
    { id: 12, title: "Highlights: LA Galaxy vs. Colorado Rapids", file: sliderVideo5, thumbnail: sliderThumb5 },
    { id: 13, title: "New Video 6", file: sliderVideo6, thumbnail: sliderThumb6 },
    { id: 14, title: "New Video 6", file: sliderVideo6, thumbnail: sliderThumb6 },
  ];

  const handleVideoClick = (video) => {
    setPlayingVideo(video.file);
    setActiveVideoId(video.id);
  };

  const handleSliderVideoClick = (video) => {
    handleVideoClick(video);
    videoPlayerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = () => {
    if (isMobile) {
      if (currentIndex + 1 < sliderVideos.length) {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (currentIndex + 3 < sliderVideos.length) {
        setCurrentIndex(currentIndex + 3);
      }
    }
  };

  const handlePrev = () => {
    if (isMobile) {
      if (currentIndex - 1 >= 0) {
        setCurrentIndex(currentIndex - 1);
      }
    } else {
      if (currentIndex - 3 >= 0) {
        setCurrentIndex(currentIndex - 3);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentSliderVideos = isMobile ? [sliderVideos[currentIndex]] : sliderVideos.slice(currentIndex, currentIndex + 3);

  return (
    <div className="video-page-container">
      <div className="video-page-container-header">
        <h1>Videos</h1>
      </div>
      <div className="video-content" ref={videoPlayerRef}>
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
          {listVideos.map((video) => (
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
      <div className="video-slider">
        <div className="video-slider-header">
          <h2>More Videos</h2>
        </div>
        <div className="video-slider-videos">
          {currentSliderVideos.map((video) => (
            <div
              key={video.id}
              className="slider-video-item"
              onClick={() => handleSliderVideoClick(video)}
            >
              <div className="image-wrapper">
                <img src={video.thumbnail} alt={video.title} />
              </div>
              <div className="text-wrapper">
                <p>{video.title}</p>
              </div>
            </div>
          ))}
        </div>
        {currentIndex > 0 && (
          <button className="slider-nav-button prev" onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        )}
        {(isMobile ? currentIndex + 1 < sliderVideos.length : currentIndex + 3 < sliderVideos.length) && (
          <button className="slider-nav-button next" onClick={handleNext}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPage;
