const SaveToSpotify = ({ playlist, save, setSave }) => {
    if (save) {
        console.log("🔄 SaveToSpotify rendered");
        console.log("📋 Playlist prop received:", playlist);
        console.log("📋 Playlist type:", typeof playlist);
        
        if (playlist) {
            const rawPlaylistBody = JSON.stringify(playlist);
            const playlistBody = filter
            console.log("✅ PLAYLIST BODY");
            console.log(playlistBody);
        } else {
            console.log("❌ Playlist is undefined/null/empty");
        }
        setSave(false);
    }
    
    return null;
}

export default SaveToSpotify;