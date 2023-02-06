import React, {useState, useEffect} from 'react'
import { Col, Container, Row, Spinner, Image, Figure } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import Header from '../components/header';

import ServicesMenu from '../components/servicesMenu';
import BlueButton from '../components/blue_button';

import '../css/pages_css/servicesCardDesc2.css'

function ServicesCardDesc2() {
    const { id } = useParams();

    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getServices = async () => {
        const docRef = doc(db, "Services", id);
        const docSnap = await getDoc(docRef);
          setIsLoading(false);
        if (docSnap.exists()){
            setServices(docSnap.data());
        } else {
            console.log("No services");
        }
    };

    useEffect( () => {
      getServices();
    }, []);


  return (
    <>
    <Header/>
    {isLoading &&   <div className='loading_div'><Spinner className='loading_spinner' animation="grow" variant="primary" style={{ width: "7rem", height: "7rem" }} />
                    </div>}
    {!isLoading &&
    <>
        <div className='banner_container2' 
        style={{backgroundImage:`url(${services.imageUrl})`}}
        >
            <Container className=''>
                <h1 id='banner_heading2'>{services.heading1}</h1>
                <p id='banner_paragraph2'>{services.text1}</p>
                <Link to='/contactus'>
                    <BlueButton text={'Sazināties'}/>
                </Link>
            </Container>
        </div>

        <Container style={{marginTop:'30px'}}>
                <Row style={{marginBottom:'30px'}}>
                    <Col lg={6} md={6} className='services-col' style={{textAlign:'center'}}>
                        <h2> {services.heading2} </h2>
                        <p id='services-p'>{services.text2}</p>
                    </Col>
                    {/* <Col lg={2} style={{itemsAlign:'center'}}><div className='services-line'></div></Col> */}
                    <Col lg={6} md={6} className='services-col' style={{textAlign:'center'}}>
                        <h2> {services.heading3} </h2>
                        <p id='services-p'>{services.text3}</p>
                    </Col>
                    <Col lg={6} md={6} className='services-col' style={{textAlign:'center'}}>
                        <h2> {services.heading4} </h2>
                        <p id='services-p'>{services.text4}</p>
                    </Col>
                    {/* <Col lg={2} style={{itemsAlign:'center'}}><div className='services-line'></div></Col> */}
                    <Col lg={6} md={6} className='services-col' style={{textAlign:'center'}}>
                        <h2> {services.heading5} </h2>
                        <p id='services-p'>{services.text5}</p>
                    </Col>
                </Row>
        </Container>
      </>
    }
    <Footer/>
    </>
  )
}

export default ServicesCardDesc2;
