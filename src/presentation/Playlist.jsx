import React from 'react';

const PlayList = ({ playlist, handleRemove, handleInput, userInput, handleOnBlur, isEditing, handleClick }) => {
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

  const playlistItems = playlist.map((item) => (
      <li key={item.id} style={{'listStyle': 'none', 'border': 'solid 1px', 'margin': 5}}>
      <h3>Title: {item.title}</h3>
      <p>Artist: {item.id}</p>
      <button onClick={() => {handleRemove(item.id)}}>Remove</button>
    </li>
  ));

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
        <ul>{playlistItems}</ul>
        <button>Save to Spotify</button>
      </>
    );

}

export default PlayList;