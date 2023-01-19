import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CarPartsBody from '../components/carPartsBody';
import Banner from '../components/banner';
import TabSelector from '../components/tab_selector';
import OtherItemsBody from '../components/otherItemsBody';

function OtherItems() {

  return (
    <>
        <Header/>
        <OtherItemsBody/>
        <Footer/>
    </>
  );
};

export default OtherItems;