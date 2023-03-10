import React, { useState } from 'react';
import { Card, Container, Col, Spinner } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

import BlueButton from './blue_button';

import '../css/carPartsElement.css'

function CarPartsElement(props) {
    const [show, toggleShow] = useState(true);
    const deletePost = async (id) => {
        const postDoc = doc(db, "CarParts", id);
        await deleteDoc(postDoc);
        window.location.reload();
      };
  return (
    <>
    <Col lg={3} md={6} xs={12} className='card_col'>
        <Container>
            <div className='d-flex justify-content-around'>      
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='car_img' variant="top" src={props.imageUrls[0]} />
                    <Card.Body>
                    <Card.Title className='card_title'>{props.title}</Card.Title>
                    <Card.Text className='card_text'>{props.year + ' | ' + props.engine}</Card.Text>

                    {
                    show ? <Link 
                    to={{
                        pathname:`${'/carparts/' + props.id}`,
                    }}
                    >
                        <BlueButton onClick={() => toggleShow(!show)} text='Skat. vairāk' width='140'/></Link>
                        : <Spinner animation="border" variant="primary" />
                    }
                    {localStorage.getItem('isAuth') && (
                                    <button 
                                    onClick={() => {
                                            deletePost(props.id);
                                        }} 
                                    className='delete_button'>&#128465;
                                    </button>)}
                    </Card.Body>
                </Card>
            </div>
        </Container>
    </Col>
    </>
  );
  
};

export default CarPartsElement;