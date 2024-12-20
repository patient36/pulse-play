import List from "../Components/List";

const HitAlbums = () => {
    const albums = [{ name: 'Amapiano', artist: 'Asake', category: 'Album' }, { name: 'Pull up', artist: 'Koffee', category: 'Album' }, { name: 'Closer', artist: 'Chain Smokers', category: 'Album' }, { name: 'Surrender', artist: 'Natalie', category: 'Album' }, { name: "I don't care", artist: 'Cecilia Krull', category: 'Album' },]
    return (
        <List items={albums} title="👏 Hit Albums" />
    );
}

export default HitAlbums;