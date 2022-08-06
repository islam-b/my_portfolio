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
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { MyParking } from './MyProjects/MyParking/MyParking';
import { Sgs } from './MyProjects/Sgs/Sgs';
import ReactTooltip from 'react-tooltip';
import { Toyota } from './MyProjects/Toyota/Toyota';

function App() {

  return (
    <div >
      <Header />
      <div className='my-5'></div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/toyota-b2c" element={<Toyota />} />
          <Route path="/projects/my-parking" element={<MyParking />} />
          <Route path="/projects/sgs" element={<Sgs />} />
          <Route path="*" element={<Redirect to="/" />} />
        </Routes>
      </ScrollToTop>
      <ReactTooltip />
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

function ScrollToTop({ children }: any) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
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
