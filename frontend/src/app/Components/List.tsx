"use client"

import Image from "next/image";
import { useState } from "react";
import { FaList } from "react-icons/fa6";
import { BsGrid3X3GapFill } from "react-icons/bs";

type Items = { name: string, artist: string, category: string }[]

const List = ({ items, title }: { items: Items, title: string }) => {
    const [listView, setListView] = useState(true)
    const toogleListView = () => {
        setListView(!listView)
    }
    return (
        listView ? (
            <div className="flex flex-col h-screen bg-black text-white pt-5 pl-20 overflow-scroll">
                <div className="text-2xl font-bold mb-10 flex flex-row flex-wrap justify-between pr-5 ">
                    {title}
                    <div className="icon" onClick={toogleListView}><BsGrid3X3GapFill /></div>
                </div>
                <div className="tracks flex flex-col gap-5 pr-2">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center justify-start gap-10 hover:bg-opacity-15 hover:translate-y-1 hover:bg-slate-500 p-2 rounded-lg transition-all cursor-pointer">
                            <p className="text-white font-extrabold text-xl ">{index + 1}</p>
                            <Image width={100} height={100} className="w-20 h-20 rounded-md hover:scale-105 transition-all" src={`/images/${index + 1}.jpg`} alt={`${item.name}`} priority={true} />
                            <div className="flex flex-col flex-wrap">
                                <h2 className="font-bold text-xl">{item.name}</h2>
                                <p className="font-light text-sm mt-4 text-gray-400">{item.artist}</p>
                                <p className="font-light text-xs  text-green-500">{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            // Grid view
            <div className="flex flex-col h-screen bg-black text-white pt-5 pl-20 overflow-scroll">
                <div className="text-2xl font-bold mb-10 flex flex-row flex-wrap justify-between pr-5 ">
                    {title}
                    <div className="icon" onClick={toogleListView}><FaList /></div>
                </div>
                <div className="tracks flex gap-5 flex-wrap">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col justify-evenly flex-wrap gap-10 hover:bg-opacity-10 hover:bg-slate-500 p-2 rounded-md transition-all cursor-pointer">
                            <Image width={100} height={100} className="w-40 h-44 rounded-md hover:scale-105 transition-all" src={`/images/${index + 1}.jpg`} alt={`${item.name}`} priority={true} />
                            <div className="flex flex-col flex-wrap justify-start">
                                <h2 className="font-bold text-xl">{item.name} </h2>
                                <p className="font-light text-sm mt-3 text-gray-400">{item.artist}</p>
                                <p className="font-light text-xs  text-green-500">{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
}

export default List;