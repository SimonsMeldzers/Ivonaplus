import React from 'react' 
import Header from '../components/header';
import Banner from '../components/banner';
import TabSelector from '../components/tab_selector'
import Services from '../components/services';
import InfoSection from '../components/info_section';
import FindUsSection from '../components/findus_section';
import Footer from '../components/footer';

function Home() {
  return (
  <>
    <Header/>
    <Banner imageUrl={`https://assets.whichcar.com.au/image/upload/s--1ppMloYL--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_768/v1/archive/whichcar/2016/06/02/-1/Car-Engine-top.jpg`}/>
    <TabSelector home='home'/>
    <Services/>
    <InfoSection/>
    <FindUsSection/>
    <Footer/>
  </>
    
  );
}

export default Home;
