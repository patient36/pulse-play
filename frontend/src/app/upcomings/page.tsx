import List from "../../Components/List";

const Upcomings = () => {
    const upcomings = [
        { id: "1", name: "Masked", artist: "Vex", category: "Single" },
        { id: "2", name: "T Rex", artist: "Raxon Del", category: "Album" }
    ]
    return (
        <List items={upcomings} title="🫣 Upcomings" />
    );
}

export default Upcomings;