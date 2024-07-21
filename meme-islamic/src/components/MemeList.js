import React, { useState, useEffect } from 'react';
import MemeItem from './MemeItem';
import memeData from '../mockData';

function MemeList() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    setMemes(memeData);
  }, []);

  return (
    <div >
      {memes.map(meme => (
        <MemeItem key={meme.id} meme={meme} />
      ))}
    </div>
  );
}

export default MemeList;
