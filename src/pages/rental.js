import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import TabSelector from "../components/tab_selector";
import RentalBody from "../components/rental_body";

function Rental() {
    return (
    <>
        <Header/>
        <Banner imageUrl={`https://assets.whichcar.com.au/image/upload/s--1ppMloYL--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_768/v1/archive/whichcar/2016/06/02/-1/Car-Engine-top.jpg`}/>
        <TabSelector rental='rental'/>
        <RentalBody/>
        <Footer/>
    </>
      
    );
  }
  
  export default Rental;