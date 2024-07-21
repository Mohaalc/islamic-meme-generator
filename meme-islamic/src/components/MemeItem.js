import React from 'react';
import { Link } from 'react-router-dom';


function MemeItem({ meme }) {
  return (
    <div className="meme-item"> {/* Apply the meme-item class */}
      <Link to={`/meme/${meme.id}`}>
        <img src={meme.image} alt={meme.title} />
        <h2>{meme.title}</h2>
      </Link>
    </div>
  );
}

export default MemeItem;
