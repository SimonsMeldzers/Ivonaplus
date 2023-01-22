import React, {useState, useEffect} from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';

import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

import Footer from '../components/footer';
import Header from '../components/header';

import ImageGallery from 'react-image-gallery';

import '../css/pages_css/otherItemsDesc.css'

function OtherItemsDesc() {
    const { id } = useParams();

    const [otherItems, setOtherItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getOtherItems = async () => {
        const docRef = doc(db, "OtherItems", id);
        const docSnap = await getDoc(docRef);
          setIsLoading(false);
        if (docSnap.exists()){
            setOtherItems(docSnap.data());
        } else {
            console.log("No otherItems");
        }
    };

    useEffect(() => {
        getOtherItems();
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
        <Link className='breadcrumbs_link' to={{pathname:'/otheritems/'}}> Rezerves Daļas{'>'} </Link>
        <Link className='breadcrumbs_link' to={{pathname:`/otheritems/${id}`}}> {otherItems.title + '>'} </Link>
        </p>
    </Row>

    <Row style={{height:'0px'}}/>
    
    <ImageGallery items={otherItems.imageUrls.map((url) => ({original: url, thumbnail: url}))} showFullscreenButton={false} showPlayButton={false}/>
            <Row>
            <h2 className='title'> {otherItems.title}</h2>
            <p className='text'>{otherItems.text}</p>
            <h3 className='price'>{otherItems.price + '€'}</h3>
        </Row>

        <Row>
            <Col>
                <Row>
                    <Col><h5 className='info_title'>Tālrunis:</h5></Col>
                    <Col><h5 className='info_info'>{otherItems.phone1}</h5> <h5 className='info_info'>{otherItems.phone2}</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>E-pasts:</h5></Col>
                    <Col><h5 className='info_info'>ivonaplus@inbox.lv</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>Vieta:</h5></Col>
                    <Col><h5 className='info_info'>{otherItems.location}</h5></Col>
                </Row>
            </Col>

            <Col>

            </Col>
        </Row>

    </Container>
    }
    <Footer/>
    </>
  )
}

export default OtherItemsDesc;
