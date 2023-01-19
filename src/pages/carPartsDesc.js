import React, {useState, useEffect} from 'react'
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap';

import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

import Footer from '../components/footer';
import Header from '../components/header';

import ImageGallery from 'react-image-gallery';

import '../css/pages_css/carPartsDesc.css'

function CarPartsDesc() {
    const { id } = useParams();

    const [carParts, setCarParts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCarParts = async () => {
        const docRef = doc(db, "CarParts", id);
        const docSnap = await getDoc(docRef);
          setIsLoading(false);
        if (docSnap.exists()){
            setCarParts(docSnap.data());
        } else {
            console.log("No carParts");
        }
    };

    useEffect(() => {
        getCarParts();
    }, []);


  return (
    <>
    <Header/>
    {isLoading &&   <div className='loading_div'><Spinner className='loading_spinner' animation="grow" variant="primary" style={{ width: "7rem", height: "7rem" }} />
                    </div>}
    {!isLoading &&

    <Container>

    <Row style={{display:'flex', marginTop:'10px'}}>
        <p>
        <Link className='breadcrumbs_link' to={{pathname:'/'}}> Galvenā{'>'} </Link>
        <Link className='breadcrumbs_link' to={{pathname:'/carparts/'}}> Rezerves Daļas{'>'} </Link>
        <Link className='breadcrumbs_link' to={{pathname:`/carparts/${id}`}}> {carParts.title + '>'} </Link>
        </p>
    </Row>

    <Row style={{height:'0px'}}/>
    
    <ImageGallery items={carParts.imageUrls.map((url) => ({original: url, thumbnail: url, originalHeight: '600px',}))} showFullscreenButton={false} showPlayButton={false}/>
            <Row>
            <h2 className='title'> {carParts.title}</h2>
            <p className='text'>{carParts.text}</p>
            <h3 className='price'>{carParts.price + '€'}</h3>
        </Row>

        <Row>
            <Col>
                <Row>
                    <Col><h5 className='info_title'>Tālrunis:</h5></Col>
                    <Col><h5 className='info_info'>+371 29275712</h5> <h5 className='info_info'>+371 20116677</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>E-pasts:</h5></Col>
                    <Col><h5 className='info_info'>ivonaplus@inbox.lv</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>Vieta</h5></Col>
                    <Col><h5 className='info_info'>Rīga</h5></Col>
                </Row>
            </Col>

            <Col>
                <Row>
                    <Col><h5 className='info_title'>Gads:</h5></Col>
                    <Col><h5 className='info_info'>{carParts.year}</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>Motors:</h5></Col>
                    <Col><h5 className='info_info'>{carParts.engine}</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>Ātr. kārba:</h5></Col>
                    <Col><h5 className='info_info'>{carParts.gearBox}</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>Nobraukums:</h5></Col>
                    <Col><h5 className='info_info'>{carParts.mileage}</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>VIN:</h5></Col>
                    <Col><h5 className='info_info'>{carParts.vin}</h5></Col>
                </Row>
            </Col>
        </Row>

    </Container>
    }
    <Footer/>
    </>
  )
}

export default CarPartsDesc;
