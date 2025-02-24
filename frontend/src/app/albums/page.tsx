import List from "../../Components/List";

const HitAlbums = () => {
    const albums = [
        { id: "1", name: 'Amapiano', artist: 'Asake', category: 'Album' },
        { id: "2", name: 'Pull up', artist: 'Koffee', category: 'Album' },
        { id: "3", name: 'Closer', artist: 'Chain Smokers', category: 'Album' },
        { id: "4", name: 'Surrender', artist: 'Natalie', category: 'Album' },
        { id: "5", name: "I don't care", artist: 'Cecilia Krull', category: 'Album' },]
    return (
        <List items={albums} title="👏 Hit Albums" />
    );
}

export default HitAlbums;