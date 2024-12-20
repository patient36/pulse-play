"use client"
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFire } from "react-icons/bs";
import { TbChartBarPopular } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoAlbums } from "react-icons/io5";
import { PiMusicNote } from "react-icons/pi";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    const sideBarIcons = [< BsFire />, < TbChartBarPopular />, <IoAlbums />, < MdFavorite />, <PiMusicNote />, < FaArrowTrendUp />]

    const sideBarItems = [{ text: 'hot tracks', route: '/hot-tracks' }, { text: 'top charts', route: '/top-charts' }, { text: 'hit albums', route: '/albums' }, { text: 'favorites', route: '/favorites' }, { text: 'new releases', route: '/new-releases' }, { text: 'upcomings', route: '/upcomings' }]
    return (
        <div className="relative z-10">
            {
                isOpen ? (
                    <div className="sidebar absolute top-0 left-0 w-64  flex pl-3 justify-between gap-3 py-3 flex-col transition-all">
                        {/* Menu closer */}
                        <IoClose className="absolute right-2 text-xl cursor-pointer text-slate-400" onClick={toggleOpen} />
                        {/* Menu icons */}
                        <div className="flex flex-col gap-5 text-white">
                            <h2 className="text-xl font-bold mb-4 sidebar-title">PulsePlay picks</h2>
                            {
                                sideBarItems.map((item, index) => (
                                    <Link className="rounded-lg hover:bg-slate-800 hover:translate-x-2 bg-opacity-30 p-2 mb-1 w-[90%] transition-all" key={index} href={item.route} onClick={toggleOpen} >
                                        <div className="flex flex-row  items-center gap-3 capitalize">
                                            <p className="text-green-300">{sideBarIcons[index]}</p>
                                            <p>{item.text}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className="sidebar absolute top-0 left-0  w-12  flex items-center gap-3 py-3 flex-col transition-all">
                        {/* Menu opener */}
                        <GiHamburgerMenu className=" absolute top-2 text-xl cursor-pointer text-slate-400" onClick={toggleOpen} />
                        {/* Menu icons */}
                        <div className="mt-10 flex flex-col gap-5 text-white">
                            {
                                sideBarItems.map((item, index) => (
                                    <Link key={index} href={item.route} className="rounded-lg hover:bg-slate-800 hover:translate-y-1 bg-opacity-30 p-2 mb-1 transition-all">
                                        <p className="text-green-400 text-2xl">{sideBarIcons[index]}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                )}
        </div>
    );
}

export default SideBar;