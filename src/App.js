import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './partials/Header';
import Loans from './partials/Loans';

function App() {
  return (
    <div className="App">
      <Header />
      <Loans />
    </div>
  );
}

export default App;
