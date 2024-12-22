import List from "../../Components/List";

const HotTracks = () => {
    const tracks = [
        { id:"1",name: 'Meant to be', artist: 'Bebe Rexha', category: "Single" },
        { id:"2",name: 'Alone', artist: 'Alan Walker', category: "Single" },
        { id:"3",name: 'Sad', artist: 'Tentacion', category: "Single" },
        { id:"4",name: 'All eyes on me', artist: '2Pac Shakur', category: "Single" },
        { id:"5",name: 'Faith', artist: 'Pop Smoke', category: "Single" },
        { id:"6",name: 'Unity', artist: 'Marshmello', category: "Single" },
        { id:"7",name: 'Dior', artist: 'Pop Smoke', category: "Single" },
        { id:"8",name: 'Candy shop', artist: '50Cent', category: "Single" }]
    return <List title="🔥 Hot tracks" items={tracks} />
}

export default HotTracks;