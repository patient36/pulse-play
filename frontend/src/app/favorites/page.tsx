import List from "../../Components/List";

const Favorites = () => {
    const favorites = [
        { id: "1", name: 'Ghetto', artist: 'E.K.E', category: "Single" },
        { id: "2", name: 'Faith', artist: 'Pop Smoke', category: "Album" }]

    return (
        <List items={favorites} title="💓 Favorites" />
    );
}

export default Favorites;