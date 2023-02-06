import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

import Home from './pages/home';
import Login from './pages/login';
import Rental from './pages/rental';
import CreateRental from './pages/createRental';
import CarParts from './pages/carParts';
import CreateCarParts from './pages/createCarParts';
import CarPartsDesc from './pages/carPartsDesc';
import OtherItems from './pages/otherItems';
import CreateOtherItems from './pages/createOtherItems';
import OtherItemsDesc from './pages/otheItemsDesc';
import ContactUs from './pages/contactUs';
import ServicesCardDesc from './pages/servicesCardDesc';
import ServicesCardDesc2 from './pages/servicesCardDesc2';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/login' element={ <Login setIsAuth={setIsAuth}/>} />
        <Route path='/rental' element={ <Rental/>} />
        <Route path='/createrental' element={ <CreateRental isAuth={isAuth}/>} />
        <Route path='/carparts' element={ <CarParts/>} />
        <Route path='/createcarparts' element={<CreateCarParts isAuth={isAuth}/>}/>
        <Route path='/carparts/:id' element={<CarPartsDesc/>}/>
        <Route path='/otheritems' element={<OtherItems/>}></Route>
        <Route path='/createotheritems' element={<CreateOtherItems/>}></Route>
        <Route path='/otheritems/:id' element={<OtherItemsDesc/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        {/* <Route path='/services/:id' element={<ServicesCardDesc/>}></Route> */}
        <Route path='/services/:id' element={<ServicesCardDesc2/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
