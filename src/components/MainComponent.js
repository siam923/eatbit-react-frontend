import React from "react";
import Body from './body/Body';
import Header from './header/Header';
import Footer from './footer/Footer';


const MainComponent = () => {
  return <div className="flex flex-col h-screen">
      <Header/>
      <div  className='flex-grow'>
        <Body/>
      </div>
      <Footer/>
  </div>;
}

export default MainComponent;
