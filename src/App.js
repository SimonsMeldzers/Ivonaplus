import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/home';
import Login from './pages/login';
import Rental from './pages/rental';
import CreateRental from './pages/createRental';
import CarParts from './pages/carParts';
import CreateCarParts from './pages/createCarParts';
import CarPartsDesc from './pages/carPartsDesc';
import OtherItems from './pages/otherItems';
import CreateOtherItems from './pages/createOtherItems';
import { useState } from 'react';


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
      </Routes>
    </Router>
  );
}

export default App;
