import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import TabSelector from "../components/tab_selector";
import RentalBody from "../components/rental_body";

function Rental() {
    return (
    <>
        <Header/>
        <Banner/>
        <TabSelector/>
        <RentalBody/>
        <Footer/>
    </>
      
    );
  }
  
  export default Rental;