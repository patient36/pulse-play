import List from "../../Components/List";

const NewReleases = () => {
    const releases = [
        { id:"1",name: "414", artist: "Loski", category: "Single" },
        { id:"2",name: "God DID", artist: "DJ Khalid", category: "Album" }
    ]
    return (
        <List items={releases} title="😎 New Releases" />
    );
}

export default NewReleases;