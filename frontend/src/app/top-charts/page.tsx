import List from "../../Components/List";

const TopCharts = () => {
    const charts = [
        { id: "1", name: "Blinding Lights", artist: "The Weekend", category: "Single" },
        { id: "2", name: "Ocean Eyes", artist: "Billie Eilish", category: "Single" },
        { id: "3", name: "As it was", artist: "Hary Styles", category: "Single" },
        { id: "4", name: "Christopher Walking", artist: "Pop Smoke", category: "Single" },
        { id: "5", name: "Ghetto", artist: "E.K.E", category: "Single" }
    ]
    return (
        <List items={charts} title="❤️‍🔥 Top Charts" />
    );
}

export default TopCharts;