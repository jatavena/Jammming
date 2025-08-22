import React from 'react';

const PlayList = ({ playlist, handleRemove }) => {
  
  const playlistItems = playlist.map((item) => (
    <li key={item.id} style={{'listStyle': 'none', 'border': 'solid 1px', 'margin': 10, 'maxWidth': 400}}>
      <h3>Song Title: {item.name}</h3>
      <p>Album: {item.album.name}</p>
      <p>Artist: {item.artists[0].name}</p>
      <button onClick={() => {handleRemove(item.id)}}>Remove</button>
    </li>
  ));

  return (
    <>
      <ul>{playlistItems}</ul>
    </>
  );

}

export default PlayList;