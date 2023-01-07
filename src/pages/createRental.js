import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

import '../css/pages_css/createRental.css'

function CreateRental() {
  return (
    <>
        <Header/>
        <div className="crBody">
            <Container className='crContainer'>
                <h2>Auto noma</h2>
                <Form className='crForm'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row>
                        <Col>
                            <Form.Label>Mašīnas nosaukums</Form.Label>
                            <Form.Control className='crInputDouble'
                            type="" 
                            placeholder="Mašīnas nosaukums" 
                            />

                        </Col>
                        <Col>
                            <Form.Label>Mašīnas Gads</Form.Label>
                            <Form.Control className='crInputDouble'
                            type="" 
                            placeholder="Mašīnas Gads" 
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Parametri</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control className=''
                                type="" 
                                placeholder="Sēdvietas" 
                            />                 
                        </Col>
                        <Col>
                            <Form.Control className=''
                                    type="" 
                                    placeholder="Durvis" 
                            />   
                        </Col>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option>Kārba</option>
                                <option value="Manual">Manuālā</option>
                                <option value="Automatic">Automāts</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option>A/C</option>
                                <option value="hasAC">Ir</option>
                                <option value="noAC">Nav</option>
                            </Form.Select>
                        </Col>
                     
                    </Row>
                    <Form.Label style={{marginTop: '15px'}}>Mašīnas cena par 24h</Form.Label>
                    <Row >
                        <Col>
                            <Form.Control className=''
                                        type="" 
                                        placeholder="Mašīnas cena" 
                            /> 
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Mašīna ir pieejama?" />
                            </Form.Group>
                        </Col>
                    </Row>

                </Form.Group>

                <Button className='blue_button'>Apstiprināt</Button>
                
                </Form>
            </Container>
            </div>
        <Footer/>
    </>
  )
}

export default CreateRental;