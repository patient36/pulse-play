import React, { useRef, useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { TbRewindForward10, TbRewindBackward10 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import "../styles/playing.css";

const Playing = ({ data, isOpen, onClose }) => {
  const lyricsData = data.lyrics;
  const audioRef = useRef(null);
  const lyricsRefs = useRef({});
  const [playerOpen, setPlayerOpen] = useState(isOpen);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLyricKey, setCurrentLyricKey] = useState("0:00");

  const closePlayer = () => {
    audioRef.current.pause();
    setPlayerOpen(false);
    onClose();
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const rewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const forward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const updateLyrics = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const closestTime = Object.keys(lyricsData).reduce((prev, curr) => {
        const prevDiff = Math.abs(currentTime - parseTime(prev));
        const currDiff = Math.abs(currentTime - parseTime(curr));
        return currDiff < prevDiff ? curr : prev;
      });

      setCurrentLyricKey(closestTime);
      scrollToActiveLyric(closestTime);
    }
  };

  const parseTime = (time) => {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const scrollToActiveLyric = (key) => {
    if (lyricsRefs.current[key]) {
      lyricsRefs.current[key].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    // Update lyrics as the audio plays
    audio.addEventListener("timeupdate", updateLyrics);

    // Reset play button when audio ends
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateLyrics);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  return (
    <div className={`wrapper ${playerOpen ? "" : "stopped"}`}>
      <div className="closePlayer">
        <IoClose className="close-icon" onClick={closePlayer} />
      </div>
      <div className="container">
        <div className="metadata">
          <h2 className="title">{data.title}</h2>
          <h4 className="artist">{data.artist}</h4>
        </div>
        <div className="image-container">
          <img src={data.img} alt="Album cover" />
        </div>
        <div className="lyrics">
          <div className="lyrics-list">
            {Object.entries(lyricsData).map(([time, lyric]) => (
              <p
                key={time}
                ref={(el) => (lyricsRefs.current[time] = el)}
                className={time === currentLyricKey ? "active-lyric" : ""}
              >
                {lyric}
              </p>
            ))}
          </div>
        </div>
        <div className="audio-container">
          <audio ref={audioRef} src={data.audio} />
          <div className="controls">
            <TbRewindBackward10 className="rewind" onClick={rewind} />
            {isPlaying ? (
              <FaPause className="pause" onClick={togglePlay} />
            ) : (
              <FaPlay className="play" onClick={togglePlay} />
            )}
            <TbRewindForward10 className="forward" onClick={forward} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playing;
