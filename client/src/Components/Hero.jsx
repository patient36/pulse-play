import React from "react";

const Hero = () => {
  const tracks = [
    { img: "./src/assets/photos/1.jpg", track: "Track Name", artist: "Artist Name" },
    { img: "./src/assets/photos/2.jpg", track: "Track Name", artist: "Artist Name" },
    { img: "./src/assets/photos/3.jpg", track: "Track Name", artist: "Artist Name" },
    { img: "./src/assets/photos/4.jpg", track: "Track Name", artist: "Artist Name" },
    { img: "./src/assets/photos/5.jpg", track: "Track Name", artist: "Artist Name" },
    { img: "./src/assets/photos/6.jpg", track: "Track Name", artist: "Artist Name" },
    { img: "./src/assets/photos/7.jpg", track: "Track Name", artist: "Artist Name" },
    { img: "./src/assets/photos/8.jpg", track: "Track Name", artist: "Artist Name" },
    { img: "./src/assets/photos/9.jpg", track: "Track Name", artist: "Artist Name" },
    { img: "./src/assets/photos/10.jpg", track: "Track Name", artist: "Artist Name" }
  ];

  const renderTracks = (title) => (
    <section>
      <h2>{title}</h2>
      <div className="tracks">
        {tracks.map((track, index) => (
          <div key={index} className="track-card">
            <div className="image-container">
              <img src={track.img} alt={track.track} />
            </div>
            <div className="track-info">
              <h3>{track.track}</h3>
              <p>{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="hero">
      {renderTracks("New Releases")}
      {renderTracks("Top Hits")}
    </div>
  );
};

export default Hero;
