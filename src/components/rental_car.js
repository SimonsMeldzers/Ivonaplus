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
            <Row className='car_row'>
                <Col xs={6} lg={4} className='img_col'>
                    <Image fluid='true' className='car_image img-fluid' src='https://img.autoabc.lv/volvo-s40/volvo-s40_2004_Sedans_15101383731.jpg'></Image>
                </Col>
                <Col xs={6} lg={8}>
                    <Row>
                        <h2 className='car_name'>{name}</h2>
                    </Row>
                    <Row>
                        <h4 className='car_year'>{year}</h4>
                    </Row>
                    <Row md="auto">
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img className='icons' style={{width:'22px', height:'22px'}} src="https://static-00.iconduck.com/assets.00/person-icon-512x512-5lhrcpms.png"/> <span id="icon_column">:</span> {seats}</h4>
                        </Col>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img className='icons' style={{width:'28px', height:'28px'}} src="https://static.thenounproject.com/png/165236-200.png" alt="" /> <span id="icon_column">:</span> {doors}</h4>
                        </Col>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img className='icons' style={{width:'21px', height:'21px'}} src="https://cdn-icons-png.flaticon.com/512/1820/1820633.png" alt="" /> <span id="icon_column">:</span> {gearBox}</h4>
                        </Col>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img className='icons' style={{width:'27px', height:'27px'}} src="https://cdn-icons-png.flaticon.com/512/567/567301.png" alt="" /> <span id="icon_column">:</span> {AC}</h4>
                        </Col>    
                    </Row>

                    <Row className='car_price_row' md="auto">               
                            <Col>
                                <h1 className='car_price'>{price}€/24h</h1>
                                <h6 className='car_price_difference'> *Cena var atšķirties</h6>
                            </Col>
                            <Col>
                                <button id='blue_button'> Rezervēt </button>
                                    {localStorage.getItem('isAuth') && (
                                    <button 
                                    onClick={() => {
                                            deletePost(id);
                                        }} 
                                    className='delete_button'>&#128465;
                                    </button>)}
                            </Col>
                            

                    </Row>
                </Col>

            </Row>
                
        </Container>
    </div>
  )
}

export default RentalCar;