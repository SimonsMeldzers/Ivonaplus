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
    <Banner/>
    <TabSelector/>
    <Services/>
    <InfoSection/>
    <FindUsSection/>
    <Footer/>
  </>
    
  );
}

export default Home;
