import React, { useState } from 'react';
import memeData from './mockData'; // Ensure this path is correct

function Home() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [currentMeme, setCurrentMeme] = useState(null);

  const handleGenerateMeme = () => {
    const randomIndex = Math.floor(Math.random() * memeData.length);
    setCurrentMeme(memeData[randomIndex]);
  };

  return (
    <div className="container">
      <h1>Meme Generator</h1>
      <div className="form-container">
        <input 
          type="text" 
          placeholder="Top text" 
          value={topText}
          onChange={(e) => setTopText(e.target.value)} 
          className="text-input"
        />
        <input 
          type="text" 
          placeholder="Bottom text" 
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)} 
          className="text-input"
        />
        <button onClick={handleGenerateMeme} className="generate-button">Gen</button>
      </div>
      {currentMeme && (
        <div className="meme-image-container">
          <img src={currentMeme.image} alt={currentMeme.title} className="meme-image" />
          <div className="meme-text top">{topText}</div>
          <div className="meme-text bottom">{bottomText}</div>
        </div>
      )}
    </div>
  );
}

export default Home;
























































































// import React, { useState } from 'react';
// import memeData from './mockData'; // Ensure this path is correct
// import GenerateButton from './components/GenerateButton'; // Ensure this path is correct

// function Home() {
//   const [currentMeme, setCurrentMeme] = useState(null);

//   const handleGenerateMeme = () => {
//     const randomIndex = Math.floor(Math.random() * memeData.length);
//     setCurrentMeme(memeData[randomIndex]);
//   };

//   return (
//     <div className="home-container">
//       <GenerateButton onClick={handleGenerateMeme} />
//       {currentMeme && (
//         <div className="meme-image-container">
//           <h2>{currentMeme.title}</h2>
//           <img src={currentMeme.image} alt={currentMeme.title} />
//           <p>{currentMeme.description}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
