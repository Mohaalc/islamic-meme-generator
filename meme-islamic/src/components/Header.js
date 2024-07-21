import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Islamic Meme Generator</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;





































// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <header className='header'>
//       <h1 className='h1'> Islamic Meme Generator</h1>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
