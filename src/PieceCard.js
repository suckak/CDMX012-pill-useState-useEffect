const PieceCard = (props) => {
  const { data, handleClick } = props;

  return (
    <div className='piece'>
      <h3>{data.title}</h3>
      <img src={data.image} alt={data.title} />
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default PieceCard;
