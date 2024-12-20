import List from "../Components/List";

const NewReleases = () => {
    const releases = [{ name: "414", artist: "Loski", category: "Single" }, { name: "God DID", artist: "DJ Khalid", category: "Album" }]
    return (
        <List items={releases} title="😎 New Releases" />
    );
}

export default NewReleases;