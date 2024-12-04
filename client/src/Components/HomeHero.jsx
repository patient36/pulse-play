import React, { useState } from "react";
import "../styles/HomeHero.css";
import { BsFire } from "react-icons/bs";
import { TbChartBarPopular } from "react-icons/tb";
import { IoMdMicrophone } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiCrownedHeart } from "react-icons/gi";
import { LuMicVocal } from "react-icons/lu";
import { IoAlbums } from "react-icons/io5";
import { PiMusicNote } from "react-icons/pi";
import { MdFavorite } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";

const HomeHero = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className="hero-container">
      <div className={`side-bar ${isSideBarOpen ? "" : "closed"}`}>
        {isSideBarOpen ? (
          <>
            <p className="close" onClick={toggleSideBar}>
              <IoClose className="icon" />
            </p>
            <section>
              <h2>For You</h2>
              <section>
                <ul>
                  <li>
                    <PiMusicNote className="icon" />
                    Listen Now
                  </li>
                  <li>
                    <MdFavorite className="icon" />
                    Your favorites
                  </li>
                </ul>
              </section>
            </section>

            <section>
              <h2>Discover</h2>
              <ul>
                <li>
                  <BsFire className="icon" />
                  Hot Tracks
                </li>
                <li>
                  <IoMdMicrophone className="icon" />
                  Viral Artists
                </li>
                <li>
                  <TbChartBarPopular className="icon" />
                  New Albums
                </li>
                <li>
                  <FaArrowTrendUp className="icon" /> Top Genre
                </li>
              </ul>
            </section>

            <section>
              <h2>Charts</h2>
              <ul>
                <li>
                  <GiCrownedHeart className="icon" />
                  Most liked Tracks
                </li>
                <li>
                  <LuMicVocal className="icon" />
                  Most followed Artists
                </li>
                <li>
                  <IoAlbums className="icon" />
                  Most streamed Albums
                </li>
              </ul>
            </section>
          </>
        ) : (
          <p className="toggle" onClick={toggleSideBar}>
            <IoIosArrowDropright className="icon hamburger" />
          </p>
        )}
      </div>

      <div className="hero">
        <section>
          <h2>New Releases</h2>
          <div className="tracks">
            <div className="track-card">
              <div className="image-container">
                <img src="./src/assets/photos/1.jpg" alt="" />
              </div>
              <div className="track-info">
                <h3>Track Name</h3>
                <p>Artist Name</p>
              </div>
            </div>
            <div className="track-card">
              <div className="image-container">
                <img src="./src/assets/photos/2.jpg" alt="" />
              </div>
              <div className="track-info">
                <h3>Track Name</h3>
                <p>Artist Name</p>
              </div>
            </div>
            <div className="track-card">
              <div className="image-container">
                <img src="./src/assets/photos/3.jpg" alt="" />
              </div>
              <div className="track-info">
                <h3>Track Name</h3>
                <p>Artist Name</p>
              </div>
            </div>
            <div className="track-card">
              <div className="image-container">
                <img src="./src/assets/photos/4.jpg" alt="" />
              </div>
              <div className="track-info">
                <h3>Track Name</h3>
                <p>Artist Name</p>
              </div>
            </div>
            <div className="track-card">
              <div className="image-container">
                <img src="./src/assets/photos/5.jpg" alt="" />
              </div>
              <div className="track-info">
                <h3>Track Name</h3>
                <p>Artist Name</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Top Hits</h2>
          <div className="tracks">
            <div className="track-card">
              <div className="image-container">
                <img src="./src/assets/photos/6.jpg" alt="" />
              </div>
              <div className="track-info">
                <h3>Track Name</h3>
                <p>Artist Name</p>
              </div>
            </div>
            <div className="track-card">
              <div className="image-container">
                <img src="./src/assets/photos/7.jpg" alt="" />
              </div>
              <div className="track-info">
                <h3>Track Name</h3>
                <p>Artist Name</p>
              </div>
            </div>
            <div className="track-card">
              <div className="image-container">
                <img src="./src/assets/photos/8.jpg" alt="" />
              </div>
              <div className="track-info">
                <h3>Track Name</h3>
                <p>Artist Name</p>
              </div>
            </div>
            <div className="track-card">
              <div className="image-container">
                <img src="./src/assets/photos/9.jpg" alt="" />
              </div>
              <div className="track-info">
                <h3>Track Name</h3>
                <p>Artist Name</p>
              </div>
            </div>
            <div className="track-card">
              <div className="image-container">
                <img src="./src/assets/photos/10.jpg" alt="" />
              </div>
              <div className="track-info">
                <h3>Track Name</h3>
                <p>Artist Name</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeHero;
