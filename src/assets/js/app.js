import React from 'react';
import NavBar from './components/nav';
import Footer from './components/footer';
import LoginSub from "./components/topRight";
import "../css/SASS/app.css";

const Index = () => {
  return(
      <>
        <NavBar />
        <LoginSub />
        <Footer />
      </>
  )
};

export default Index;
