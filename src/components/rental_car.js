import React from 'react'
import '../css/rental_car.css'
import { Container, Row, Col, Image} from 'react-bootstrap';

import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';


function RentalCar({name, year, seats, doors, gearBox, AC, price, image, id}) {
    const deletePost = async (id) => {
        const postDoc = doc(db, "CarRental", id);
        await deleteDoc(postDoc);
        window.location.reload();
      };

  return (
    <div className='car_body'>
        <Container className='car_container'>
            <Row>
                <Col>
                    <Image fluid='true' className='car_image' src='https://img.autoabc.lv/volvo-s40/volvo-s40_2004_Sedans_15101383731.jpg'></Image>
                </Col>
                <Col xs={5}>
                    <Row>
                        <h2 className='car_name'>{name}</h2>
                    </Row>
                    <Row>
                        <h4 className='car_year'>{year}</h4>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className='car_param'>Vietas: {seats}</h4>
                        </Col>
                        <Col>
                            <h4 className='car_param'>Durvis: {doors}</h4>
                        </Col>
                        <Col>
                            <h4 className='car_param'>Kārba: {gearBox}</h4>
                        </Col>
                        <Col>
                            <h4 className='car_param'>A/C: {AC}</h4>
                        </Col>    
                    </Row>
                    <Row>
                        <p className='car_info'>Mašīnu var savākt jebkurā laikā, iepriekš sazvanoties pa tel. numuru +371 29275712. <br /> Ir pieejama mašīnas piegāde.
                        </p>
                    </Row>
                </Col>

                <Col>
                    <Row className='car_price_row'>
                        <div className='car_button'>
                            <h1 className='car_price'>{price}€/24h</h1>
                            <button id='blue_button'> Rezervēt </button>
                            <h6> *Cena var atšķirties</h6>
                            
                            {localStorage.getItem('isAuth') && (
                            <button 
                            onClick={() => {
                                    deletePost(id);
                                }} 
                            className='delete_button'>&#128465;
                            </button>)}

                        </div>
                    </Row>
                </Col>
            </Row>
                
        </Container>
    </div>
  )
}

export default RentalCar;