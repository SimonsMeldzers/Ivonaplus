import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import '../css/pages_css/createRental.css'
import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

import { storage } from '../firebase-config';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';


function CreateRental({isAuth}) {
    {/* For the button & spinner */}
    const [show, toggleShow] = useState(true);

    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [seats, setSeats] = useState("");
    const [doors, setDoors] = useState("");
    const [gearBox, setGearBox] = useState("");
    const [AC, setAC] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    
    let navigate = useNavigate();

    const postsCollectionRef = collection(db, "CarRental")

    useEffect(() => {
        if (!localStorage.getItem('isAuth')){
            navigate("/login");
        };
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]); 
                });
            });
        });
    }, []);

    const imageListRef = ref(storage, "rental/");

    // const uploadImage = () => {
    //     if(image == null) return;
    //     const imageLinkName = `rental/${image.name + new Date().getTime()}`;
    //     const imageRef = ref(storage, imageLinkName);
    //     uploadBytes(imageRef, image).then((snapshot) => {
    //         getDownloadURL(snapshot.ref).then((url) => {
    //             setImageUrls((prev) => [...prev, url]);
    //         });
    //         alert("Image Uploaded");
    //     });
    // };
    const uploadImage = async () => {
        if(image == null) return;
        const imageLinkName = `rental/${image.name + new Date().getTime()}`;
        const imageRef = ref(storage, imageLinkName);
        const snapshot = await uploadBytes(imageRef, image);
        const url = await getDownloadURL(snapshot.ref);
        setImageUrls((prev) => [...prev, url]);
        alert("Image Uploaded");
        return url;
    };
    
 
    // const createPost = async () => {
    //     await addDoc(postsCollectionRef, {name, year, seats, doors, gearBox, AC, price, available});
    //     uploadImage();
    //     navigate('/rental');
    // };
    const createPost = async () => {
        const url = await uploadImage();
        await addDoc(postsCollectionRef, {name, year, seats, doors, gearBox, AC, price, available, url});
        navigate('/rental');
    };
    


  return (
    <>
        <Header/>
        <div className="crBody">
            <Container className='crContainer'>
                <h2>Auto noma</h2>
                <Form className='crForm'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row>
                        <Col>
                            <Form.Label>Mašīnas nosaukums</Form.Label>
                            <Form.Control onChange={(event) => {
                                setName(event.target.value);
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Parametri</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control onChange={(event) => {
                                setSeats(event.target.value);
                            }} 
                            className=''
                                type="" 
                                placeholder="Sēdvietas" 
                            />                 
                        </Col>
                        <Col>
                            <Form.Control onChange={(event) => {
                                setDoors(event.target.value);
                            }} 
                            className=''
                                type="" 
                                placeholder="Durvis" 
                            />   
                        </Col>
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
                        <Col>
                            <Form.Select onChange={(event) => {
                                setAC(event.target.value);
                            }} 
                            aria-label="Default select example">
                                <option>A/C</option>
                                <option value="+">Ir</option>
                                <option value="-">Nav</option>
                            </Form.Select>
                        </Col>
                     
                    </Row>
                    <Form.Label style={{marginTop: '15px'}}>Mašīnas cena par 24h</Form.Label>
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
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Control onChange={(event) => {setImage(event.target.files[0]);uploadImage();}} onClick={uploadImage} type="file" />
                            </Form.Group>
                        </Col>
                        <Form.Check style={{marginLeft:'15px'}} onChange={(event) => {
                                    setAvailable(event.target.value);
                                }} 
                                type="checkbox" 
                                label="Mašīna ir pieejama?" 
                        />
                    </Row>

                </Form.Group>

                {
                    show ? <Button className='blue_button' onClick={() =>{ toggleShow(!show); createPost()}} variant="primary">Apstiprināt</Button>
                        : <Spinner animation="border" variant="primary" />
                    }
                </Form>
            </Container>
            </div>

        <Footer/>
    </>
  )
}

export default CreateRental;