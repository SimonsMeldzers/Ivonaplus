import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CarPartsBody from '../components/carPartsBody';
import Banner from '../components/banner';
import TabSelector from '../components/tab_selector';

function CarParts() {

  return (
    <>
        <Header/>
        <Banner/>
        <TabSelector carParts='carParts'/>
        <CarPartsBody/>
        <Footer/>
    </>
  );
};

export default CarParts;