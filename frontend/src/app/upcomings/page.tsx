import List from "../Components/List";

const Upcomings = () => {
    const upcomings = [{ name: "Masked", artist: "Vex", category: "Single" }, { name: "T Rex", artist: "Raxon Del", category: "Album" }]
    return (
        <List items={upcomings} title="🫣 Upcomings" />
    );
}

export default Upcomings;