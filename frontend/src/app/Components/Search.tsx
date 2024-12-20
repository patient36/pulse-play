"use client"
import searchDB from "@/lib/mock-data";
import Image from "next/image";

type Item = {
    name: string;
    artist: string;
    category: string;
    imgSrc: string;
};

const Search = ({ term }: { term: string }) => {
    const items = searchDB;
    const filteredItems: Item[] = items.filter(
        (item) =>
            item.name.toLocaleLowerCase().includes(term.trim().toLocaleLowerCase()) ||
            item.artist.toLocaleLowerCase().includes(term.trim().toLocaleLowerCase())
    );

    return (
        <div className="flex justify-center w-screen h-screen z-20 fixed top-16 bg-transparent text-white">
            {filteredItems.length > 0 && term.trim() !== "" ? (
                <div className="backdrop-blur-md bg-white bg-opacity-10 h-fit max-h-72 w-[60vw] max-sm:w-96 p-3 mt-1 rounded-lg overflow-y-scroll capitalize cursor-pointer">
                    {filteredItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-b-1 last:border-0 flex flex-row gap-3 mb-2 hover:bg-white hover:bg-opacity-10 transition-all rounded-md px-2 py-2"
                        >
                            <Image
                                className="w-10 h-10 rounded-full"
                                width={100}
                                height={100}
                                alt={`${item.name} cover`}
                                src={item.imgSrc}
                            />
                            <div>
                                <p className="font-semibold text-sm">{item.name}</p>
                                <div className="flex flex-row w-[50vw] max-sm:w-60 justify-between text-xs">
                                    <p>{item.artist}</p>
                                    <p className="text-green-500">{item.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="backdrop-blur-md bg-white bg-opacity-10 h-fit max-h-72 w-[60vw] max-sm:w-96 py-3 mt-1 rounded-lg overflow-y-scroll cursor-pointer text-green-500 flex justify-start pl-72 max-sm:justify-center max-sm:pl-0">
                    Search something
                </div>
            )}
        </div>
    );
};

export default Search;
