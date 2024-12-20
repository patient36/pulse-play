"use client";

import { GrHomeRounded } from "react-icons/gr";
import { IoLogOutOutline, IoSearch } from "react-icons/io5";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Search from "./Search";

const Header = () => {
  const [auth, setAuth] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [term, setTerm] = useState("");

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const toggleAuth = () => {
    setAuth(!auth);
  };

  const toggleHidden = () => {
    setHideBtn(!hideBtn);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target as Node)
      ) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  return (
    <nav className="flex items-center justify-between bg-black px-5 py-3 relative max-h-52 border-b-1 overflow-auto transition-all">
      {/* Logo */}
      <Link href="/" className="icon">
        <Logo size="30px" color="white" />
      </Link>
      {/* Search bar group */}
      <div className="flex items-center gap-2 flex-1 ml-5 max-w-96">
        {/* Home icon */}
        <Link
          href="/"
          className="w-10 h-10 rounded-full flex items-center justify-center p-1 bg-gray-500 bg-opacity-40"
        >
          <GrHomeRounded className="icon" />
        </Link>
        {/* Search input container */}
        <div
          className="flex items-center gap-2 bg-gray-500 bg-opacity-40 px-3 py-2 rounded-3xl flex-1 transition-all cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-slate-50"
          ref={searchInputRef}
        >
          {/* Search input */}
          <input
            type="text"
            placeholder="Search"
            className="border-0 outline-none bg-transparent text-white flex-1 pl-2"
            onFocus={() => setShowSearch(true)}
            onChange={handleSearchChange}
          />
          {/* Search icon */}
          <IoSearch className="icon" />
        </div>
      </div>
      {/* User control section */}
      <>
        {auth ? (
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center uppercase font-bold text-white cursor-pointer bg-black border-4 border-green-600"
              onClick={toggleHidden}
            >
              a
            </div>
            {hideBtn ? (
              ""
            ) : (
              <IoLogOutOutline
                className="text-3xl ml-1 text-white cursor-pointer"
                onClick={toggleAuth}
              />
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button className="text-white bg-transparent border-0 rounded-3xl font-bold py-2 px-5 max-sm:hidden">
              Sign up
            </button>
            <button
              className="text-black bg-white border-0 rounded-3xl font-bold py-2 px-5 max-sm:ml-2"
              onClick={toggleAuth}
            >
              Login
            </button>
          </div>
        )}
      </>
      {/* Search Component */}
      {showSearch && <Search term={term} />}
    </nav>
  );
};

export default Header;
