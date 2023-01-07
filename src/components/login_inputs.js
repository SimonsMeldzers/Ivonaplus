import React, { useEffect } from 'react' 
import Form from 'react-bootstrap/Form';
import { Container, Button } from 'react-bootstrap';

import { useState } from 'react';
import { auth } from '../firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

import '../css/login_inputs.css'


function LoginInputs({ setIsAuth }) {
  // Makes it so after successfuly login in, user redirects to whatever page the function is set for
  let navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);


  const login = async () => {
    try {
      const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    } catch (error){
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
    setIsAuth(false);
    navigate("/");
  };

  return (
    <div className='login_body'>
      <Container className='login_container'>
        <h2>Autorizācija</h2>
        <Form className='login_form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-pasta adrese</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Ievadiet e-pastu" 
              onChange={(event) => {
                setLoginEmail(event.target.value)
              }}
              value={loginEmail}
            />
      
            <Form.Text className="text-muted">
              Šī lapa paredzēta tikai iepriekš reģistrētiem lietotājiem.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Parole</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Ievadiet paroli" 
              onChange={(event) => {
                setLoginPassword(event.target.value)
              }}
              value={loginPassword}
            />

          </Form.Group>
          <Button className='blue_button' onClick={login}>Apstiprināt</Button>
          
        </Form>
      </Container>
    </div>

  );
}

export default LoginInputs;



