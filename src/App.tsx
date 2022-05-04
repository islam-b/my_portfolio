import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { About } from './About/About';

function App() {
  return (
    <div >
      <Header/>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
