const PieceCard = (props) => {
  const { data, handleClick } = props;

  const handleAdd = () => {
    handleClick(data.title);
  };

  return (
    <div className='piece'>
      <h3>{data.title}</h3>
      <img src={data.image} alt={data.title} />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default PieceCard;
