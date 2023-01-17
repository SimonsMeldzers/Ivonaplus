import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

import '../css/pages_css/createCarParts.css'
import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

import { storage } from '../firebase-config';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';


function CreateCarParts({isAuth}) {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [gearBox, setGearBox] = useState("");
    const [price, setPrice] = useState("");
    const [text, setText] = useState("");
    const [engine, setEngine] = useState("");
    const [mileage, setMileage] = useState("");
    const [vin, setVin] = useState("");

    const [images, setImages] = useState(null);

    let navigate = useNavigate();

    const postsCollectionRef = collection(db, "CarParts")

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
            const imageLinkName = `carParts/${uniqueFolderName}/${image.name}`;
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
        await addDoc(postsCollectionRef, {title, year, gearBox, price, imageUrls});
        navigate('/carparts');
    };

  return (
    <>
        <Header/>
        <div className="crBody">
            <Container className='crContainer'>
                <h2>Auto noma</h2>
                <Form className='crForm'>
                <Form.Group className="mb-3">
                    <Row>
                        <Col>
                            <Form.Label>Mašīnas nosaukums</Form.Label>
                            <Form.Control onChange={(event) => {
                                setTitle(event.target.value);
                            }} 
                            className='crInputDouble'
                            type="" 
                            placeholder="Mašīnas nosaukums" 
                            />

                        </Col>
                        <Col>
                            <Form.Label>Mašīnas Gads</Form.Label>
                            <Form.Control onChange={(event) => {
                                setYear(event.target.value);
                            }} 
                            className='crInputDouble'
                            type="" 
                            placeholder="Mašīnas Gads" 
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Parametri</Form.Label>
                    <Row>

                        <Col>
                            <Form.Select onChange={(event) => {
                                setGearBox(event.target.value);
                            }} 
                            aria-label="Default select example">
                                <option>Kārba</option>
                                <option value="M">Manuālā</option>
                                <option value="A">Automāts</option>
                            </Form.Select>
                        </Col>

                     
                    </Row>
                    <Form.Label style={{marginTop: '15px'}}>Mašīnas cena</Form.Label>
                    <Row >
                        <Col>
                            <Form.Control onChange={(event) => {
                                setPrice(event.target.value);
                            }} 
                                className=''
                                type="" 
                                placeholder="Mašīnas cena" 
                            /> 
                        </Col>
                    </Row>
                    <Form.Control onChange={(event) => {setImages(event.target.files);uploadImages();}} type="file" multiple />
                </Form.Group>

                <Button onClick={createPost} className='blue_button'>Apstiprināt</Button>
                
                </Form>
            </Container>
            </div>

        <Footer/>
    </>
  )
}

export default CreateCarParts;