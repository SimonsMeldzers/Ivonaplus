import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/home';
import Login from './pages/login';
import Rental from './pages/rental';
import CreateRental from './pages/createRental';
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
      </Routes>
    </Router>
  );
}

export default App;
