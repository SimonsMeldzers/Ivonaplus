import React, { useState } from 'react';
import { Card, Container, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

import '../css/otherItemsElement.css'
function OtherItemsElement(props) {
    const [show, toggleShow] = useState(true);
    const text = props.text;
    const textSlice = text.slice(0,75);

    const deletePost = async (id) => {
        const postDoc = doc(db, "OtherItems", id);
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
                    <Card.Text className='card_text'>{textSlice + '  ...'}</Card.Text>

                    {
                    show ? <Link 
                    to={{
                        pathname:`${'/otheritems/' + props.id}`,
                    }}
                    style={{
                        textDecoration:'none',
                    }}>
                        <a className='show_more' onClick={() => toggleShow(!show)}> Skat. vairāk {'>'}</a> </Link>
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

export default OtherItemsElement;