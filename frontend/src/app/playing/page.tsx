"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaPause, FaPlay } from "react-icons/fa6";
import { TbRewindForward10, TbRewindBackward10 } from "react-icons/tb";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

type Lyric = {
    time: string;
    text: string;
};

type TrackData = {
    title: string;
    artist: string;
    thumbnail_src: string;
    audio_src: string;
    duration: number; // seconds
    featurings: string[];
    lyrics: Lyric[]
};

const mockLyrics: Lyric[] = [
    { time: "0:00", text: "[Intro]" },
    { time: "0:40", text: "Amazing grace, how sweet the sound" },
    { time: "0:50", text: "That saved a wretch like me" },
    { time: "1:00", text: "I once was lost, but now am found" },
    { time: "1:10", text: "Was blind, but now I see" },
    { time: "1:20", text: "Twas grace that taught my heart to fear" },
    { time: "1:30", text: "And grace my fears relieved" },
    { time: "1:40", text: "How precious did that grace appear" },
    { time: "1:50", text: "The hour I first believed" },
    { time: "1:57", text: "[Instruments]" },
    { time: "2:37", text: "When we've been there ten thousand years" },
    { time: "2:47", text: "Bright shining as the sun" },
    { time: "2:57", text: "We've no less days to sing God's praise" },
    { time: "3:05", text: "Than when we'd first begun" },
    { time: "3:15", text: "[Instruments]" },
    { time: "3:20", text: "Was blind, but now I see" },
    { time: "3:40", text: "[Outro]" },
];

const mockTrackData: TrackData = {
    title: "Taste",
    artist: "Tyga",
    thumbnail_src: "/images/9.jpg",
    audio_src: "/audios/1.mp3",
    duration: 244, // seconds
    featurings: ["OffSet", "DA", "AXL"],
    lyrics: mockLyrics
};

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [lyricsVisible, setLyricsVisible] = useState(false);
    const [showRemainingTime, setShowRemainingTime] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const lyricsContainerRef = useRef<HTMLDivElement>(null);

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
            audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
        }
    };

    const forward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.min(
                mockTrackData.duration,
                audioRef.current.currentTime + 10
            );
        }
    };

    const toggleLyricsVisibility = () => {
        setLyricsVisible(!lyricsVisible);
    };

    const toggleTimeFormat = () => {
        setShowRemainingTime(!showRemainingTime);
    };

    const parseTimeToSeconds = (time: string) => {
        const [minutes, seconds] = time.split(":").map(Number);
        return minutes * 60 + seconds;
    };

    const formattedTime = (time: number) =>
        new Date(time * 1000).toISOString().substr(14, 5);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateTime = () => setCurrentTime(audio.currentTime);
            const onEnded = () => {
                setIsPlaying(false);
                setCurrentTime(0);
            };

            audio.addEventListener("timeupdate", updateTime);
            audio.addEventListener("ended", onEnded);

            return () => {
                audio.removeEventListener("timeupdate", updateTime);
                audio.removeEventListener("ended", onEnded);
            };
        }
    }, []);

    useEffect(() => {
        const activeLyric = document.querySelector(".active-lyric");
        const lyricsContainer = lyricsContainerRef.current;
        if (activeLyric && lyricsContainer) {
            const lyricOffsetTop = (activeLyric as HTMLElement).offsetTop;
            const containerHeight = lyricsContainer.clientHeight;
            const containerScrollTop = lyricsContainer.scrollTop;

            if (
                lyricOffsetTop < containerScrollTop ||
                lyricOffsetTop > containerScrollTop + containerHeight
            ) {
                lyricsContainer.scrollTo({
                    top: lyricOffsetTop - containerHeight / 3,
                    behavior: "smooth",
                });
            }
        }
    }, [currentTime]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-sm p-4 h-[95vh] min-h-[80vh] mt-5 max-sm:mt-1 bg-gray-800 rounded-lg shadow-lg flex flex-col gap-3">
                <div className="flex flex-col items-center mb-2">
                    <p className="font-bold text-3xl">{mockTrackData.title}</p>
                    <div className="text-sm font-extralight mt-2 text-green-300 flex flex-row items-center justify-center flex-wrap">
                        {mockTrackData.artist}
                        {mockTrackData.featurings.length > 0 && (
                            <span className="italic text-slate-400 text-xs mx-1">ft</span>
                        )}
                        {mockTrackData.featurings.map((artist, index) => (
                            <span key={index}>
                                {index > 0 && ", "}
                                {artist}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Thumbnail &  lyrics UI */}
                <div
                    className="relative flex items-center justify-center cursor-pointer w-full h-[70%] overflow-hidden rounded-lg"
                    onClick={toggleLyricsVisibility}
                >
                    {lyricsVisible ? (
                        <div
                            style={{ backgroundImage: `url(${mockTrackData.thumbnail_src})` }}
                            className="w-full h-full bg-cover bg-center"
                        >
                            <div
                                ref={lyricsContainerRef}
                                className="w-full h-full bg-black bg-opacity-90 text-white flex flex-col gap-2 items-start overflow-y-auto px-4 py-2"
                            >
                                {mockTrackData.lyrics.map((lyric, index) => {
                                    const lyricTime = parseTimeToSeconds(lyric.time);
                                    const isActive =
                                        lyricTime <= currentTime &&
                                        (index === mockLyrics.length - 1 ||
                                            parseTimeToSeconds(mockLyrics[index + 1].time) > currentTime);
                                    const isPlayed = lyricTime < currentTime;

                                    return (
                                        <p
                                            key={index}
                                            className={`transition-all duration-200 ${isActive
                                                ? "text-green-400 active-lyric"
                                                : isPlayed
                                                    ? "text-gray-500"
                                                    : "text-white"
                                                }`}
                                        >
                                            {lyric.text}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <Image
                            src={mockTrackData.thumbnail_src}
                            width={200}
                            height={200}
                            alt="thumbnail"
                            className="object-cover w-full h-full"
                            priority={true}
                        />
                    )}
                </div>

                <div className="flex flex-col justify-between gap-2">
                    <div>
                        <div className="w-full bg-white rounded-full h-1 my-3">
                            <div
                                className="bg-green-500 h-1 rounded-full flex items-center justify-end"
                                style={{
                                    width: `${(currentTime / mockTrackData.duration) * 100}%`,
                                }}
                            >
                                <p className="w-3 h-3 rounded-full bg-white transition-all"></p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full">
                            <p>{formattedTime(currentTime)}</p>
                            <p
                                onClick={toggleTimeFormat}
                                className="cursor-pointer hover:font-bold"
                            >
                                {showRemainingTime
                                    ? `-${formattedTime(mockTrackData.duration - currentTime)}`
                                    : formattedTime(mockTrackData.duration)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center flex-row flex-nowrap p-1">
                        <GiPreviousButton
                            className="text-2xl mx-2 transition-all cursor-pointer active:scale-105"
                            onClick={() => console.log("Play previous track")}
                        />
                        <TbRewindBackward10
                            className="text-2xl mx-5 transition-all cursor-pointer active:scale-105"
                            onClick={rewind}
                        />
                        {isPlaying ? (
                            <FaPause
                                className="rounded-full bg-green-700 bg-opacity-90 h-12 w-12 p-3 text-xl mx-5 transition-all cursor-pointer active:scale-105"
                                onClick={togglePlay}
                            />
                        ) : (
                            <FaPlay
                                className="rounded-full bg-green-700 bg-opacity-90 h-12 w-12 p-3 text-xl mx-5 transition-all cursor-pointer active:scale-105"
                                onClick={togglePlay}
                            />
                        )}
                        <TbRewindForward10
                            className="text-2xl mx-5 transition-all cursor-pointer active:scale-105"
                            onClick={forward}
                        />
                        <GiNextButton
                            className="text-2xl mx-2 transition-all cursor-pointer active:scale-105"
                            onClick={() => console.log("Play next track")}
                        />
                    </div>
                </div>
            </div>

            <audio ref={audioRef} src={mockTrackData.audio_src}></audio>
        </div>
    );
};

export default MusicPlayer;
