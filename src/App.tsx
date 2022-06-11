import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { About } from './About/About';
import { MyServices } from './MyServices/MyServices';
import { MyProjects } from './MyProjects/MyProjects';
import { Certifications } from './Certifications/Certifications';
import { Contact } from './Contact/Contact';
import { EducationAndExperience } from './EducationAndExperience/EducationAndExperience';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { MyParking } from './MyProjects/MyParking/MyParking';

function App() {

  return (
    <div >
      <Header />
      <div className='my-5'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/my-parking" element={<MyParking />} />
        <Route path="*" element={<Redirect to="/" />} />
      </Routes>

    </div>
  );
}

const Home = () => {
  return <>
    <Main />
    <About />
    <EducationAndExperience />
    <MyServices />
    <MyProjects />
    <Certifications />
    <Contact />
  </>
}

const Redirect = ({ to }: { to: string }) => {

  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(to);
  });

  return (
    <>
    </>
  );
};

export default App;
