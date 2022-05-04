import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

function App() {
  return (
    <div className="container" >
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
