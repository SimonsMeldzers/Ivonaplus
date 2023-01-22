import React, { useRef, useState } from 'react'
import { Row, Col, Container, Image, Spinner } from 'react-bootstrap';
import Footer from '../components/footer';
import Header from '../components/header';
import BlueButton from '../components/blue_button';
import Form from 'react-bootstrap/Form';

import emailjs from '@emailjs/browser';

import '../css/pages_css/contactUs.css'

import office_icon from '../img/office_icon.png';
import time_icon from '../img/time_icon.png';
import phone_icon from '../img/phone_icon.png';
import email_icon from '../img/email_icon.png';

function ContactUs() {
    const [show, toggleShow] = useState(true);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_c0sh7l7', 'template_9wv6ycp', form.current, 'gW3p9kpSlnCDrn7-I')
          .then((result) => {
              console.log(result.text);
              alert("Ziņa nosūtīta!");
          }, (error) => {
              console.log(error.text);
              alert("Kautkas neizdevās, mēģiniet vēlāk!");
          });
          e.target.reset();
      };

  return (
    <>
    <Header/>
    <h1 className='heading'><span>Sazināties</span> ar mums.</h1>
    <Container className=''>
        <Row className='main_row justify-content-md-center'>
            <Col lg={5} className='main_col' id='left_col'>
                <Row className='justify-content-md-center item_row'>
                    <Row  lassName='justify-content-md-center'>
                        <Col className='item_col'>
                            <Row>
                            <Col lg={4}>
                                <Image className='office_icon' src={office_icon}/>
                            </Col>
                            <Col lg={8}>
                                <h5> Rīga,</h5>
                                <h6>Valdlauču iela 8</h6>
                                <p>LV-1076</p>
                            </Col>
                            </Row>
                        </Col>
                        <Col className='item_col'>
                            <Row>
                            <Col lg={4}>
                                <Image className='time_icon' src={time_icon}/>
                            </Col>
                            <Col lg={8}>
                                <h5>Darba laiks</h5>
                                <p style={{marginBottom:'0px'}}>Pirm. - Piekt. | 9.00-17.00</p>
                                <p>Se. - Sv. | Brīvs.</p>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='item_col'>
                            <Row>
                            <Col lg={4}>
                                <Image className='phone_icon' src={phone_icon}/>
                            </Col>
                            <Col lg={8}>
                                <h5>Tel. num.</h5>
                                <p style={{marginBottom:'0px'}}>+371 29275712</p>
                                <p>+371 20116677</p>
                            </Col>
                            </Row>
                        </Col>
                        <Col className='item_col'>
                            <Row>
                            <Col lg={4}>
                                <Image className='email_icon' src={email_icon}/>
                            </Col>
                            <Col lg={8}>
                            <h5>E-pasts</h5>
                            <p>ivonaplus@inbox.lv</p>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Image className='map_img' src='https://i.ibb.co/3rz3pDb/maps.png'></Image>
                </Row>
            </Col>
        
            <Col lg={5} className='main_col' id='right_col'>
            <Form onSubmit={sendEmail} ref={form} className='justify-content-md-center'>
                <h4 className='heading4'>Rakstat <span>jautājumu</span>, vai <span>piedāvājumu</span> gadījumā.</h4>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Jūsu e-pasts.</Form.Label>
                        <Form.Control required name='email' type="email" placeholder="E-pasts" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Jūsu telefona nummurs.</Form.Label>
                        <Form.Control required name='phone' type="text" placeholder="Tel. num." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Tēma par ko rakstat.</Form.Label>
                        <Form.Control required name='topic' type="text" placeholder="Tēma" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Control required name='message' as="textarea" placeholder="Kā jums palīdzēt?" rows={5} />
                    </Form.Group>
   
                    {
                    show ? <BlueButton onClick={() =>{ toggleShow(!show)}} text='Sūtīt' type="submit" fontSize={17}/>
                        : <Spinner animation="border" variant="primary" />
                    }
                </Form>
            </Col>
        </Row>
    </Container>
    <Footer/>
    </>
  );
};


export default ContactUs;