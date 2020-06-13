import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Balance from './components/Balance';
import History from './components/History';

function App() {
  return (
    <div className="container">


      <Header />
      <Balance />
      <History />

    </div>
  );
}

export default App;
