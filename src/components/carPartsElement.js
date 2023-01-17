import React from 'react'
import { Card, Container, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


import '../css/carPartsElement.css'
function CarPartsElement({title, text, img}) {
  return (
    <>
    <Col lg={4} md={6} xs={12} className='card_col'>
        <Container>
            <div className='d-flex justify-content-around'>      
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Bentley/Flying-Spur/7776/1645012163948/front-left-side-47.jpg?tr=h-48" />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='card_text'>{text}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    </Col>
    </>
  );
  
};

export default CarPartsElement