import List from "../Components/List";

const TopCharts = () => {
    const charts = [
        { name: "Blinding Lights", artist: "The Weekend", category: "Single" },
        { name: "Ocean Eyes", artist: "Billie Eilish", category: "Single" },
        { name: "As it was", artist: "Hary Styles", category: "Single" },
        { name: "Christopher Walking", artist: "Pop Smoke", category: "Single" },
        { name: "Ghetto", artist: "E.K.E", category: "Single" }
    ]
    return (
        <List items={charts} title="❤️‍🔥 Top Charts" />
    );
}

export default TopCharts;