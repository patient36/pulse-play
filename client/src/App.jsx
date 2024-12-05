import React from "react";
import NavBar from "./Components/NavBar";
import HotTracks from "./Pages/HotTracks";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  const trackData = {
    img: "./src/assets/photos/1.jpg",
    title: "Amazing Grace",
    artist: "Rosemary Siemens",
    audio: "./src/assets/audios/2.mp3",
    lyrics: {
      "0:00": "[Intro]",
      "0:40": "Amazing grace, how sweet the sound",
      "0:50": "That saved a wretch like me",
      "1:00": "I once was lost, but now am found",
      "1:10": "Was blind, but now I see",
      "1:20": "Twas grace that taught my heart to fear",
      "1:30": "And grace my fears relieved",
      "1:40": "How precious did that grace appear",
      "1:50": "The hour I first believed",
      "1:57": "[Instruments]",
      "2:37": "When we've been there ten thousand years",
      "2:47": "Bright shining as the sun",
      "2:57": "We've no less days to sing God's praise",
      "3:05": "Than when we'd first begun",
      "3:15": "[Instruments]",
      "3:20": "Was blind, but now I see",
      "3:40": "[Outro]",
    },
  };
  return (
    <div>
      <NavBar />
      <HotTracks />
    </div>
  );
};

export default App;
