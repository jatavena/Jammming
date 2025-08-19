import React from 'react';

const PlayList = ({ playlist, handleRemove }) => {
  
  const playlistItems = playlist.map((item) => (
    <li key={item.id} style={{'listStyle': 'none', 'border': 'solid 1px', 'margin': 5}}>
      <h3>Title: {item.title}</h3>
      <p>Artist: {item.id}</p>
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