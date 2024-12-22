"use client";

import { useParams } from "next/navigation";
import List from "@/Components/List";

const TrackListings = () => {
    const { id } = useParams(); // Access params directly
    const albums = [
        { id: "1", name: 'Amapiano', artist: 'Asake', category: 'Album' },
        { id: "2", name: 'Pull up', artist: 'Koffee', category: 'Album' },
        { id: "3", name: 'Closer', artist: 'Chain Smokers', category: 'Album' },
        { id: "4", name: 'Surrender', artist: 'Natalie', category: 'Album' },
        { id: "5", name: "I don't care", artist: 'Cecilia Krull', category: 'Album' },]

    if (!id) {
        return <div>Loading...</div>; // Handle case where id is not yet available
    }

    return <List items={albums} title={`Hit Album ${id}`} />;
};

export default TrackListings;
