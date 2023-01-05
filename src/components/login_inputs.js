import React from 'react' 
import Form from 'react-bootstrap/Form';
import BlueButton from '../components/blue_button';
import { Container } from 'react-bootstrap';
import '../css/login_inputs.css'

function LoginInputs() {
  return (
    <div className='login_body'>
      <Container className='login_container'>
        <h2>Autorizācija</h2>
        <Form className='login_form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-pasta adrese</Form.Label>
            <Form.Control type="email" placeholder="Ievadiet e-pastu" />
            <Form.Text className="text-muted">
              Šī lapa paredzēta tikai iepriekš reģistrētiem lietotājiem.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Parole</Form.Label>
            <Form.Control type="password" placeholder="Ievadiet paroli" />
          </Form.Group>
          <BlueButton type='submit' text='Apstiprināt' fontSize='15' height='45' width='130'/>
        </Form>
      </Container>
    </div>

  );
}

export default LoginInputs;



