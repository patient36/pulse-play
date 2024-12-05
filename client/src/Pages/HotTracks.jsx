import React from "react";
import List from "../Components/List";
import SideBar from "../Components/SideBar";
import "../styles/landingpage.css";

const HotTracks = () => {
  const data = [
    {
      img: "../src/assets/photos/1.jpg",
      name: "Track name",
      artist: "Artist name",
    },
    {
      img: "../src/assets/photos/2.jpg",
      name: "Track name",
      artist: "Artist name",
    },
    {
      img: "../src/assets/photos/3.jpg",
      name: "Track name",
      artist: "Artist name",
    },
    {
      img: "../src/assets/photos/4.jpg",
      name: "Track name",
      artist: "Artist name",
    },
    {
      img: "../src/assets/photos/5.jpg",
      name: "Track name",
      artist: "Artist name",
    },
  ];
  return (
    <div className="hero-container pl-8">
      <SideBar isOpen={false} />
      <List className="hero" data={data} title="🔥 Hot Tracks" />
    </div>
  );
};

export default HotTracks;
