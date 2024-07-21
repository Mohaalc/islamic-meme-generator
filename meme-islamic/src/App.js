import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;





























































































// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Header from './components/Header'; // Ensure this path is correct
// import Footer from './components/Footer'; // Ensure this path is correct
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//       <Footer />
//     </div>
//   );
// }

// export default App;
