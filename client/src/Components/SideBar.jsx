import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const SideBar = ({ isOpen }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(isOpen);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const navigate = useNavigate();
  return (
    <div className={`side-bar fixed ${isSideBarOpen ? "" : "closed"}`}>
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
                  Top Picks
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
              <li onClick={() => navigate("/hot-tracks")}>
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
  );
};

export default SideBar;
