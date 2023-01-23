import React, { useState } from 'react'
import '../css/rental_car.css'
import { Container, Row, Col, Image, Spinner, Form, Button} from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';

import { updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';

function RentalCar({name, year, seats, doors, gearBox, AC, price, id, imageUrl, available}) {

    const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className='car_body'>
        <Container className='car_container'>
            <Row className='car_row'>
                <Col xs={6} lg={4} className='img_col'>
                    <Image fluid='true' className='car_image img-fluid' src={imageUrl}></Image>
                </Col>
                <Col xs={4} lg={6}>
                    <Row>
                        <h2 className='car_name'>{name}</h2>
                    </Row>
                    <Row>
                        <h4 className='car_year'>{year}</h4>
                    </Row>
                    <Row md="auto" className='icons_row'>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img alt='Missing' className='icons' src="https://static-00.iconduck.com/assets.00/person-icon-512x512-5lhrcpms.png"/> <span id="icon_column">:</span> {seats}</h4>
                        </Col>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img className='icons' src="https://static.thenounproject.com/png/165236-200.png" alt="" /> <span id="icon_column">:</span> {doors}</h4>
                        </Col>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img className='icons' src="https://cdn-icons-png.flaticon.com/512/1820/1820633.png" alt="" /> <span id="icon_column">:</span> {gearBox}</h4>
                        </Col>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img className='icons' src="https://cdn-icons-png.flaticon.com/512/567/567301.png" alt="" /> <span id="icon_column">:</span> {AC}</h4>
                        </Col>    
                    </Row>
                    <p className='car_info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor enim et hendrerit semper. Sed sit amet libero id sem volutpat blandit ac ut lectus. Vestibulum ante. Nunc placerat vehicula egestas. Etiam sagittis ante</p>
                </Col>
                <Col lg={2} xs={2}>
                    <Row className='car_price_row' md="auto">               
                            <Col className='button_col'>
                                <h1 className='car_price'>{price}€/24h</h1>
                                <button id='blue_button'> Rezervēt </button>
                                {!available == "" ? <p className='available'>Pieejama</p> : <p className='not_available'>Nav pieejama</p>}

                                {localStorage.getItem('isAuth') && (
                                    <button 
                                    onClick={() => setModalShow(true)}
                                    className='delete_button'>&#9999;
                                    </button>)}
                            </Col>
                    </Row>
                </Col>

            </Row>
                
        </Container>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        name={name}
        year={year}
        seats={seats}
        doors={doors}
        gearbox={gearBox}
        ac={AC}
        price={price}
        available={available}
      />
    </div>
  )
}

function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState(props.name);
    const [year, setYear] = useState(props.year);
    const [seats, setSeats] = useState(props.seats);
    const [doors, setDoors] = useState(props.doors);
    const [gearBox, setGearBox] = useState(props.gearbox);
    const [AC, setAC] = useState(props.ac);
    const [price, setPrice] = useState(props.price);
    const [available, setAvailable] = useState(props.available);

    const updatePost = async () => {
        const postDoc = doc(db, "CarRental", props.id)
        await updateDoc(postDoc, {
            name,
            year,
            seats,
            doors,
            gearBox,
            AC,
            price,
            available
        });
        await window.location.reload(); 
    };

    const deletePost = async (id) => {
        const postDoc = doc(db, "CarRental", id);
        await deleteDoc(postDoc);
        window.location.reload();
      };

    return (
        
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                            defaultValue={props.name}
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
                            defaultValue={props.year}
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
                                defaultValue={props.seats} 
                            />                 
                        </Col>
                        <Col>
                            <Form.Control onChange={(event) => {
                                setDoors(event.target.value);
                            }} 
                            className=''
                                type="" 
                                placeholder="Durvis"
                                defaultValue={props.doors} 
                            />   
                        </Col>
                        <Col>
                            <Form.Select onChange={(event) => {
                                setGearBox(event.target.value);
                            }} 
                            aria-label="Default select example"
                            defaultValue={props.gearbox}>
                                <option>Kārba</option>
                                <option value="M">Manuālā</option>
                                <option value="A">Automāts</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select onChange={(event) => {
                                setAC(event.target.value);
                            }} 
                            aria-label="Default select example"
                            defaultValue={props.ac}>
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
                                defaultValue={props.price} 
                            /> 
                        </Col>
                        
                        <Form.Check
                            style={{marginLeft:'15px', marginTop:'15px'}} 
                            onClick={() => {
                                setAvailable("on");
                            }} 
                            inline
                            label="Pieejama"
                            name="group1"
                            type="radio"
                            id={`inline-radio-1`}
                        />
                        <Form.Check
                            style={{marginLeft:'15px'}} 
                            onClick={() => {
                                setAvailable("");
                            }} 
                            inline
                            label="Nav pieejama"
                            name="group1"
                            type="radio"
                            id={`inline-radio-2`}
                        />
                    </Row>

                </Form.Group>
                </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button id='blue_button' onClick={() => [props.onHide, updatePost()].map(func => func())}> Saglabāt </Button>
            {localStorage.getItem('isAuth') && (
                                    <button 
                                    onClick={() => {
                                            deletePost(props.id);
                                        }} 
                                    className='delete_button'>&#128465;
                                    </button>)}
        </Modal.Footer>
      </Modal>
    );
  }

export default RentalCar;