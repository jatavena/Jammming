const PlaylistControl = ({ playlist, PlaylistComponent, handleRemove, handleInput, userInput, handleOnBlur, isEditing, handleClick, handleSave }) => {
  if (!playlist || playlist.length === 0) {
    return (
      <>
        <div className="containerHeader forLists">
          {isEditing ? (
          <form>
            <label forHTML="playlistName"></label>        
            <input id="playlistName" type="text" onChange={handleInput} onBlur={handleOnBlur} value={userInput} autoFocus style={{'fontSize': 24, 'fontFamily': 'Archivo Black', 'fontWeight': 'bolder', 'textAlign': 'center', 'opacity': '0.8', 'border': 'none'}}></input>
          </form>
          ) : (
          <h2 onClick={handleClick}>{userInput}</h2>
          )}
        </div>
                
        <div id="playlistContainer">
          <p>No songs in the playlist yet!</p>
        </div>

        <div className="containerFooter forLists">
          <button>Save to Spotify</button>
        </div>
      </>
    );
  }

  const Component = PlaylistComponent;
  return (
      <>
        <div className="containerHeader forLists">
          {isEditing ? (
          <form>
            <label forHTML="playlistName"></label>        
            <input id="playlistName" type="text" onChange={handleInput} onBlur={handleOnBlur} value={userInput} autoFocus style={{'fontSize': 24, 'fontFamily': 'Archivo Black', 'fontWeight': 'bolder', 'textAlign': 'center', 'opacity': '0.8', 'border': 'none'}}></input>
          </form>
          ) : (
          <h2 onClick={handleClick}>{userInput}</h2>
          )}
        </div>

        <div id="playlistContainer">
          <Component handleRemove={handleRemove} playlist={playlist} />
        </div>

        <div className="containerFooter forLists">
          <button onClick={handleSave} >Save to Spotify</button>
        </div>
      </>
    );

}

export default PlaylistControl;