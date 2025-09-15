const PlayList = ({ playlist, handleRemove }) => {
  
  const playlistItems = playlist.map((item) => (
    <li key={item.id} className="playlistitem">
      <h3 title={item.name}>{item.name}</h3>
      <p title={item.artists[0].name}>{item.artists[0].name}</p>
      <p title={item.album.name}>Album: {item.album.name}</p>
      <button onClick={() => {handleRemove(item.id)}}>Remove from playlist</button>
    </li>
  ));

  return (
    <>
      <ul>{playlistItems}</ul>
    </>
  );

}

export default PlayList;