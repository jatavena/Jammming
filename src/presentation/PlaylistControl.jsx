import React from 'react';

const PlaylistControl = ({ playlist, handleInput, userInput, handleOnBlur, isEditing, handleClick }) => {
  if (!playlist || playlist.length === 0) {
    return (
      <>
        {isEditing ? (
        <form>
          <label forHTML="playlistName"></label>        
          <input id="playlistName" type="text" placeholder='Name your playlist here' onChange={handleInput} onBlur={handleOnBlur} value={userInput} autoFocus style={{'margin': 10, 'fontSize': 22, 'fontFamily': 'Arial', 'fontWeight': 'bolder', 'textAlign': 'center'}}></input>
        </form>
        ) : (
        <h2 onClick={handleClick}>{userInput}</h2>
        )}
        <p>No songs in your playlist yet!</p>
      </>
    );
  }

  return (
      <>
        {isEditing ? (
        <form>
          <label forHTML="playlistName"></label>        
          <input id="playlistName" type="text" placeholder='Name your playlist here' onChange={handleInput} onBlur={handleOnBlur} value={userInput} autoFocus style={{'margin': 20, 'fontSize': 22, 'fontFamily': 'Arial', 'fontWeight': 'bolder', 'textAlign': 'center'}}></input>
        </form>
        ) : (
        <h2 onClick={handleClick}>{userInput}</h2>
        )}
        <button>Save to Spotify</button>
      </>
    );  

}

export default PlaylistControl;