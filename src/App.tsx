import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { About } from './About/About';
import { MyServices } from './MyServices/MyServices';
import { MyProjects } from './MyProjects/MyProjects';
import { Certifications } from './Certifications/Certifications';

function App() {
  return (
    <div >
      <Header/> 
      <div className='my-5'></div>
      <Main/>
      <About/>
      <MyServices/>
      <MyProjects/>
      <Certifications/>
    </div>
  );
}

export default App;
