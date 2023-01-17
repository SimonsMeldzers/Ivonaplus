import React, { useState } from 'react'
import { Card, Container, Col, Spinner } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


import '../css/carPartsElement.css'
function CarPartsElement({title, text, imageUrls}) {
    const [show, toggleShow] = useState(true);
  return (
    <>
    <Col lg={4} md={6} xs={12} className='card_col'>
        <Container>
            <div className='d-flex justify-content-around'>      
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='car_img' variant="top" src={imageUrls[0]} />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='card_text'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    {
                    show ? <Button onClick={() => toggleShow(!show)} variant="primary">Skat. vairāk</Button>
                        : <Spinner animation="border" variant="primary" />
                    }

                    </Card.Body>
                </Card>
            </div>
        </Container>
    </Col>
    </>
  );
  
};

export default CarPartsElement