import List from "../Components/List";

const HotTracks = () => {
    const tracks = [{ name: 'Meant to be', artist: 'Bebe Rexha', category: "Single" }, { name: 'Alone', artist: 'Alan Walker', category: "Single" }, { name: 'Sad', artist: 'Tentacion', category: "Single" }, { name: 'All eyes on me', artist: '2Pac Shakur', category: "Single" }, { name: 'Faith', artist: 'Pop Smoke', category: "Single" }, { name: 'Unity', artist: 'Marshmello', category: "Single" }, { name: 'Dior', artist: 'Pop Smoke', category: "Single" }, { name: 'Candy shop', artist: '50Cent', category: "Single" }]
    return <List title="🔥 Hot tracks" items={tracks} />
}

export default HotTracks;