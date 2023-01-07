import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

import '../css/pages_css/createRental.css'
import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreateRental({isAuth}) {

    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [seats, setSeats] = useState("");
    const [doors, setDoors] = useState("");
    const [gearBox, setGearBox] = useState("");
    const [AC, setAC] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");
    const [image, setImage] = useState("");

    let navigate = useNavigate();

    const postsCollectionRef = collection(db, "CarRental")
    const createPost = async () => {
        await addDoc(postsCollectionRef, {name, year, seats, doors, gearBox, AC, price, available, image});
        navigate('/rental');
    };

    useEffect(() => {
        if (!localStorage.getItem('isAuth')){
            navigate("/login");
        }
    }, []);

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
                            <Form.Control onChange={(event) => {
                                setName(event.target.value);
                            }} 
                            className='crInputDouble'
                            type="" 
                            placeholder="Mašīnas nosaukums" 
                            />

                        </Col>
                        <Col>
                            <Form.Label>Mašīnas Gads</Form.Label>
                            <Form.Control onChange={(event) => {
                                setYear(event.target.value);
                            }} 
                            className='crInputDouble'
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
                            <Form.Control onChange={(event) => {
                                setSeats(event.target.value);
                            }} 
                            className=''
                                type="" 
                                placeholder="Sēdvietas" 
                            />                 
                        </Col>
                        <Col>
                            <Form.Control onChange={(event) => {
                                setDoors(event.target.value);
                            }} 
                            className=''
                                type="" 
                                placeholder="Durvis" 
                            />   
                        </Col>
                        <Col>
                            <Form.Select onChange={(event) => {
                                setGearBox(event.target.value);
                            }} 
                            aria-label="Default select example">
                                <option>Kārba</option>
                                <option value="M">Manuālā</option>
                                <option value="A">Automāts</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select onChange={(event) => {
                                setAC(event.target.value);
                            }} 
                            aria-label="Default select example">
                                <option>A/C</option>
                                <option value="+">Ir</option>
                                <option value="-">Nav</option>
                            </Form.Select>
                        </Col>
                     
                    </Row>
                    <Form.Label style={{marginTop: '15px'}}>Mašīnas cena par 24h</Form.Label>
                    <Row >
                        <Col>
                            <Form.Control onChange={(event) => {
                                setPrice(event.target.value);
                            }} 
                                className=''
                                type="" 
                                placeholder="Mašīnas cena" 
                            /> 
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check onChange={(event) => {
                                    setAvailable(event.target.value);
                                }} 
                                type="checkbox" 
                                label="Mašīna ir pieejama?" 
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                </Form.Group>

                <Button onClick={createPost} className='blue_button'>Apstiprināt</Button>
                
                </Form>
            </Container>
            </div>
        <Footer/>
    </>
  )
}

export default CreateRental;