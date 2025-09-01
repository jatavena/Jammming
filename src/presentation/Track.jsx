import React from 'react';

const Track = ({ results, handleAdd }) => {
   if (!results || !Array.isArray(results) || results.length === 0) {
    return <p>No results to display.</p>;
  }

  const trackItems = results.map((item) => (
    <li key={item.id} className="trackitem">
      <h3 title={item.name}>{item.name}</h3>
      <p title={item.artists[0].name}>{item.artists[0].name}</p>
      <p title={item.album.name}>Album: {item.album.name}</p>
      <button onClick={() => handleAdd(item)}>Add to Playlist +</button>
    </li>
  ));

  return <ul>{trackItems}</ul>;
}

export default Track;