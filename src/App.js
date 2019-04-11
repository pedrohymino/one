import React from 'react';
import Routes from './routes';
import './styles.scss';

import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes />
  </div>
);

export default App;
