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
        <Banner imageUrl={`https://assets.whichcar.com.au/image/upload/s--1ppMloYL--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_768/v1/archive/whichcar/2016/06/02/-1/Car-Engine-top.jpg`}/>
        <TabSelector carParts='carParts'/>
        <CarPartsBody/>
        <Footer/>
    </>
  );
};

export default CarParts;