import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import '../css/pages_css/createCarParts.css'

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

import { storage } from '../firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


function CreateOtherItems({isAuth}) {
    {/* For the button & spinner */}
    const [show, toggleShow] = useState(true);

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    const [text, setText] = useState("");
    const [price, setPrice] = useState("");

    const [images, setImages] = useState(null);

    let navigate = useNavigate();

    const postsCollectionRef = collection(db, "OtherItems")

    useEffect(() => {
        if (!localStorage.getItem('isAuth')){
            navigate("/login");
        };
    }, []);

    const uploadImages = async () => {
        if(images === null) return;
        let uniqueFolderName = new Date().getTime().toString();
        const imageList = Array.from(images);
        const urls = [];
        for(let i = 0; i < imageList.length; i++) {
            const image = imageList[i];
            const imageLinkName = `otheritems/${uniqueFolderName}/${image.name}`;
            const imageRef = ref(storage, imageLinkName);
            const snapshot = await uploadBytes(imageRef, image);
            const url = await getDownloadURL(snapshot.ref);
            urls.push(url);
        }
        alert("Images Uploaded");
        return urls;
    };


    const createPost = async () => {
        const imageUrls = await uploadImages();
        await addDoc(postsCollectionRef, {title, phone1, phone2, location, text, price, imageUrls});
        navigate('/otheritems');
    };

  return (
    <>
        <Header/>
        <div className="crBody">
            <Container className='crContainer'>
                <h2>Citas Preces</h2>
                <Form className='crForm'>
                <Form.Group className="mb-3">
                    <Row>
                        <Col>
                            <Form.Label>Preces nos.</Form.Label>
                            <Form.Control onChange={(event) => {
                                setTitle(event.target.value);
                            }} 
                            className='crInputDouble'
                            type="" 
                            placeholder="Nosaukums" 
                            />

                        </Col>
                        
                        <Col>
                            <Form.Label>Atr. vieta</Form.Label>
                                <Form.Control onChange={(event) => {
                                    setLocation(event.target.value);
                                }} 
                                className='crInputDouble'
                                type="" 
                                placeholder="Atrašanās vieta" 
                                />
                        </Col>
                                                     
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Parametri</Form.Label>
                    <Row>
                        <Col>
                                <Form.Control onChange={(event) => {
                                    setPhone1(event.target.value);
                                }} 
                                className='crInputDouble'
                                type="" 
                                placeholder="Tel. num. 1" 
                                />
                        </Col>
                        <Col>                                
                                <Form.Control onChange={(event) => {
                                    setPhone2(event.target.value);
                                }} 
                                className='crInputDouble'
                                type="" 
                                placeholder="Tel. num. 2" 
                                />
                        </Col>


                    </Row>
                    <Form.Label style={{marginTop: '0px'}}></Form.Label>
                    <Row >
                        <Col>
                            <Form.Control onChange={(event) => {
                                setPrice(event.target.value);
                            }} 
                                className=''
                                type="" 
                                placeholder="Preces cena" 
                            /> 
                        </Col>
                    </Row>
                    <Form.Label style={{marginTop:'15px'}}>Pilns apraksts</Form.Label>
                    <Form.Control onChange={(event) => {
                                    setText(event.target.value);
                                }} 
                                    className=''
                                    as="textarea" 
                                    placeholder="Apraksts"
                                     
                    /> 

                    <Form.Label style={{marginTop: '0px'}}></Form.Label>
                    <Form.Control onChange={(event) => {setImages(event.target.files);uploadImages();}} type="file" multiple />
                </Form.Group>
                {
                    show ? <Button onClick={() =>{ toggleShow(!show); createPost()}} className='blue_button'>Apstiprināt</Button>
                        : <Spinner animation="border" variant="primary" />
                    }
                </Form>
            </Container>
            </div>

        <Footer/>
    </>
  )
}

export default CreateOtherItems;