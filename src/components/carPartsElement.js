import React from 'react'
import { Card, Container, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


import '../css/carPartsElement.css'
function CarPartsElement({title, text, imageUrls}) {
  return (
    <>
    <Col lg={4} md={6} xs={12} className='card_col'>
        <Container>
            <div className='d-flex justify-content-around'>      
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='car_img' variant="top" src={imageUrls[0]} />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='card_text'>{text}</Card.Text>
                    <Button variant="primary">Skat. vairāk</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    </Col>
    </>
  );
  
};

export default CarPartsElement