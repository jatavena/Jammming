const SaveToSpotify = ({ playlist, save, setSave }) => {
    if (save) {
        console.log("🔄 SaveToSpotify rendered");
        console.log("📋 Playlist prop received:", playlist);
        console.log("📋 Playlist type:", typeof playlist);
        
        if (playlist) {
            const rawPlaylistBody = playlist.filter((track) => track.uri).map(track => track.uri);
            console.log("✅ RAW PLAYLIST BODY");
            console.log(rawPlaylistBody);
        } else {
            console.log("❌ Playlist is undefined/null/empty");
        }
        setSave(false);
    }
    
    return null;
}

export default SaveToSpotify;