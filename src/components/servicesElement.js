import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import '../css/servicesElement.css'

function ServicesElement(props) {
    const text = props.text1.substring(0,140) + '...';
  return (
    <>
        <Card style={{ width: '18rem', padding:'0' }}>
            <Card.Img style={{height:'13rem'}} variant="top" src={props.imageUrl} />
            <Card.Body>
                <Card.Title> {props.heading1} </Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Link to={`/services/${props.id}`}>
                    <Button className='cardButton'>Uzzināt vairāk &gt;</Button>
                </Link>
            </Card.Body>
        </Card>
    </>
  );
  
};

export default ServicesElement;