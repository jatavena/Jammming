const ListSaved = ( {show, onClose} ) => {
  if (!show) return null;
  
  return (
    <>
    <div className="messagebox" show={show} >
      <h2>Your playlist has been saved!</h2>
      <button onClick={onClose}><strong>X</strong></button>
    </div>
    </>
  );
};

export default ListSaved;