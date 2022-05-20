import { useState, useEffect } from 'react';

import { fetchData, getPieces } from './utils';
import PieceCard from './PieceCard';

const App = () => {
  const [contador, setContador] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [pieces, setPieces] = useState(null);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const updateTitle = (number) => {
    document.title = `clicked: ${number}`;
  };

  useEffect(() => {
    updateTitle(contador);
  }, [contador]);

  useEffect(() => {
    fetchData().then(setNumbers);
    getPieces().then(setPieces);
  }, []);

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={handleClick}>add</button>
      {numbers.length ? (
        numbers.map((number) => <h2 key={number}>{number}</h2>)
      ) : (
        <h2>cargando...</h2>
      )}
      <div className='pieces_container'>
        {pieces &&
          pieces.map((piece) => (
            <PieceCard data={piece} key={piece.id} handleClick={handleClick} />
          ))}
      </div>
    </div>
  );
};

export default App;
