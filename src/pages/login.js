import React from 'react' 
import Header from '../components/header';
import LoginInputs from '../components/login_inputs';


function Login({ setIsAuth }) {
  return (
  <>
    <Header/>
    <LoginInputs setIsAuth={setIsAuth}/>
  </>
    
  );
}

export default Login;
