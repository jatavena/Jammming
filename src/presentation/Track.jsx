import React from 'react';

const Track = ({ results, handleAdd }) => {
   if (!results || !Array.isArray(results) || results.length === 0) {
    return <p>No results to display.</p>;
  }

  const trackItems = results.map((item) => (
    <li key={item.id} style={{'listStyle': 'none', 'border': 'solid 1px', 'margin': 10, 'maxWidth': 400}}>
      <h3>Song Title: {item.name}</h3>
      <p>Album: {item.album.name}</p>
      <p>Artist: {item.artists[0].name}</p>
      <button onClick={() => handleAdd(item)}>Add to Playlist +</button>
    </li>
  ));

  return <ul>{trackItems}</ul>;
}

export default Track;