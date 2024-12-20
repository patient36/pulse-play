import List from "../Components/List";

const Favorites = () => {
    const favorites = [{ name: 'Ghetto', artist: 'E.K.E', category: "Single" }, { name: 'Faith', artist: 'Pop Smoke', category: "Album" }]
    return (
        <List items={favorites} title="💓 Favorites" />
    );
}

export default Favorites;