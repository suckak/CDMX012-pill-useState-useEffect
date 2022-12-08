import { useState, useEffect } from 'react';

import { fetchData, getPieces } from './utils';
import PieceCard from './PieceCard';

const App = () => {
  const [contador, setContador] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [pieces, setPieces] = useState(null);
  const [titles, setTitles] = useState([]);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const handlePieceClick = (title) => {
    setContador(contador + 1);
    if (!titles.includes(title)) {
      setTitles([...titles, title]);
    }
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
      {titles.length > 0 && (
        <>
          <h3>Pieces Clicked</h3>
          <ul>
            {titles.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </>
      )}
      <div className='pieces_container'>
        {pieces &&
          pieces.map((piece) => (
            <PieceCard
              data={piece}
              key={piece.id}
              handleClick={handlePieceClick}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
