import React from 'react';
import { useParams } from 'react-router-dom';
import memeData from '../mockData';

function MemeCard() {
  const { id } = useParams();
  const meme = memeData.find(m => m.id === id);

  return (
    <div >
      {meme ? (
        <>
          <h2 >{meme.title}</h2>
          <img src={meme.image} alt={meme.title }  />
          <p>{meme.description}</p>
        </>
      ) : (
        <p>Meme not found</p>
      )}
    </div>
  );
}

export default MemeCard;
