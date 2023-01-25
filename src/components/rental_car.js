import React, { useState, useEffect } from 'react'
import '../css/rental_car.css'
import { Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import { updateDoc, deleteDoc, doc,  addDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

import { storage } from '../firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function RentalCar({name, year, seats, doors, gearBox, AC, price, id, imageUrl, available}) {

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div className='car_body'>
        <Container className='car_container'>
            <Row className='car_row'>
                <Col xs={4} lg={4} className='img_col'>
                    <Image fluid='true' className='car_image img-fluid' src={imageUrl}></Image>
                </Col>
                <Col xs={5} lg={5}>
                    <Row>
                        <h2 className='car_name'>{name}</h2>
                    </Row>
                    <Row>
                        <h4 className='car_year'>{year}</h4>
                    </Row>
                    <Row md="auto" className='icons_row'>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img alt='Missing' className='icons' src="https://static-00.iconduck.com/assets.00/person-icon-512x512-5lhrcpms.png"/> <span id="icon_column">:</span> {seats}</h4>
                        </Col>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img className='icons' src="https://static.thenounproject.com/png/165236-200.png" alt="" /> <span id="icon_column">:</span> {doors}</h4>
                        </Col>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img className='icons' src="https://cdn-icons-png.flaticon.com/512/1820/1820633.png" alt="" /> <span id="icon_column">:</span> {gearBox}</h4>
                        </Col>
                        <Col className='icons_col' xs={3}>
                            <h4 className='car_param'><img className='icons' src="https://cdn-icons-png.flaticon.com/512/567/567301.png" alt="" /> <span id="icon_column">:</span> {AC}</h4>
                        </Col>    
                    </Row>
                    <p className='car_info'>Rezervēt mašīnu var sazvanoties pa tel. num. +371 29275712, vai rakstot e-pastā uz ivonaplus@inbox.lv <br></br> Auto mašīnas nomas cena pazeminās, ņemot uz ilgāku laiku, t.i. 3 dienas, nedēļa, mēnesis, u.t.t.</p>
                    {
                    localStorage.getItem('isAuth') && (
                        <button 
                        onClick={() => setModalShow(true)}
                        className='delete_button'>&#9999;
                        </button>
                    )}
                    {
                    localStorage.getItem('isAuth') && (
                        <button
                        onClick={() => setModalShow2(true)} 
                        className='delete_button history_button'>&#128712;
                        </button>
                    )}
                </Col>
                <Col xs={3} lg={3} className='car_price_col'>
                    <Row className='car_price_row' md="auto">               
                            <Col className='button_col'>
                                <h1 className='car_price'>{price}€/24h</h1>
                                <Link to='/contactus'>
                                <button id='blue_button'> Rezervēt </button>
                                </Link>
                                {!available == "" ? <p className='available'>Pieejama</p> : <p className='not_available'>Nav pieejama</p>}
                            </Col>
                    </Row>
                </Col>

            </Row>
                
        </Container>
        <ModalEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        name={name}
        year={year}
        seats={seats}
        doors={doors}
        gearbox={gearBox}
        ac={AC}
        price={price}
        available={available}
      />
      <ModalHistory
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        id={id}
        name={name}
        year={year}
        seats={seats}
        doors={doors}
        gearbox={gearBox}
        ac={AC}
        price={price}
        available={available}
      />
    </div>
  )
}

function ModalEdit(props) {
    const [name, setName] = useState(props.name);
    const [year, setYear] = useState(props.year);
    const [seats, setSeats] = useState(props.seats);
    const [doors, setDoors] = useState(props.doors);
    const [gearBox, setGearBox] = useState(props.gearbox);
    const [AC, setAC] = useState(props.ac);
    const [price, setPrice] = useState(props.price);
    const [available, setAvailable] = useState(props.available);

    const updatePost = async () => {
        const postDoc = doc(db, "CarRental", props.id)
        await updateDoc(postDoc, {
            name,
            year,
            seats,
            doors,
            gearBox,
            AC,
            price,
            available
        });
        await window.location.reload(); 
    };

    const deletePost = async (id) => {
        const postDoc = doc(db, "CarRental", id);
        await deleteDoc(postDoc);
        window.location.reload();
      };

    return (
        
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                            defaultValue={props.name}
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
                            defaultValue={props.year}
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
                                defaultValue={props.seats} 
                            />                 
                        </Col>
                        <Col>
                            <Form.Control onChange={(event) => {
                                setDoors(event.target.value);
                            }} 
                            className=''
                                type="" 
                                placeholder="Durvis"
                                defaultValue={props.doors} 
                            />   
                        </Col>
                        <Col>
                            <Form.Select onChange={(event) => {
                                setGearBox(event.target.value);
                            }} 
                            aria-label="Default select example"
                            defaultValue={props.gearbox}>
                                <option>Kārba</option>
                                <option value="M">Manuālā</option>
                                <option value="A">Automāts</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select onChange={(event) => {
                                setAC(event.target.value);
                            }} 
                            aria-label="Default select example"
                            defaultValue={props.ac}>
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
                                defaultValue={props.price} 
                            /> 
                        </Col>
                        
                        <Form.Check
                            style={{marginLeft:'15px', marginTop:'15px'}} 
                            onClick={() => {
                                setAvailable("on");
                            }} 
                            inline
                            label="Pieejama"
                            name="group1"
                            type="radio"
                            id={`inline-radio-1`}
                        />
                        <Form.Check
                            style={{marginLeft:'15px'}} 
                            onClick={() => {
                                setAvailable("");
                            }} 
                            inline
                            label="Nav pieejama"
                            name="group1"
                            type="radio"
                            id={`inline-radio-2`}
                        />
                    </Row>

                </Form.Group>
                </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button id='blue_button' onClick={() => [props.onHide, updatePost()].map(func => func())}> Saglabāt </Button>
            {localStorage.getItem('isAuth') && (
                                    <button 
                                    onClick={() => {
                                            deletePost(props.id);
                                        }} 
                                    className='delete_button'>&#128465;
                                    </button>)}
        </Modal.Footer>
      </Modal>
    );
};

function ModalHistory(props) {
    const [modalShow3, setModalShow3] = React.useState(false);
    const [postLists, setPostList] = useState([]);
    
    const postsCollectionRef = collection(db, "RentalHistory")

    useEffect(() => {
        // console.log(new Date().getTime())
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            const filteredData = data.docs.filter((doc) => doc.data().rentalID === props.id);
            setPostList(filteredData.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getPosts();
      }, []);

    return (
        <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name} vēsture.
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className='scroll'>
            {postLists.map((post) => {
            return(
                <Container key={Math.random()} style={{marginBottom:'20px',backgroundColor:'#F5F9FE', borderRadius:'10px', padding:'10px 0px 5px 10px', boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px'}}>
                    <h6><span style={{color:'#3AA8E7'}}>Īrnieks:</span> {post.name} {post.lastName}</h6>
                    <h6><span style={{color:'#3AA8E7'}}>Datums:</span> {post.startDate} - {post.endDate}</h6>
                    <h6><span style={{color:'#3AA8E7'}}>Tel. nummurs:</span> {post.phone}</h6>
                    <h6><span style={{color:'#3AA8E7'}}>E-pasts:</span> {post.email}</h6>
                    <a target="_blank" rel="noreferrer" style={{color:'#3AA8E7', fontWeight:'400', textDecoration:'underline'}} href={post.url}> Īrnieka ID</a>
                </Container>
            )
            })}

            </div>
        </Modal.Body>


        <Modal.Footer>
        <Button className='blue_button' onClick={() => setModalShow3(true)}>Pievienot</Button>
        <Button className='blue_button' onClick={props.onHide}>Aizvērt</Button>
        </Modal.Footer>
      </Modal>

      <ModalCreateHistory
        show={modalShow3}
        onHide={() => setModalShow3(false)}
        id={props.id}
        name={props.name}
        year={props.year}
        seats={props.seats}
        doors={props.doors}
        gearbox={props.gearBox}
        ac={props.AC}
        price={props.price}
        available={props.available}
      />
      </>
    );
};

function ModalCreateHistory(props) {
    const [rentalID, setRentalID] = useState(props.id);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [image, setImage] = useState(null);


    let navigate = useNavigate();

    const postsCollectionRef = collection(db, "RentalHistory");
    

    const uploadImage = async () => {
        if(image == null) return;
        const imageLinkName = `rental/${image.name + new Date().getTime()}`;
        const imageRef = ref(storage, imageLinkName);
        const snapshot = await uploadBytes(imageRef, image);
        const url = await getDownloadURL(snapshot.ref);
        alert("Image Uploaded");
        return url;
    };
    const createPost = async () => {
        const dateId = new Date().getTime();
        const dateIdStr = dateId.toString();
        const postsDocRef = doc(db, "RentalHistory", dateIdStr);
        const url = await uploadImage();
        await setDoc(postsDocRef, {rentalID, startDate, endDate, name, lastName, phone, email, url});
        navigate('/rental');
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name} izdošana.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='crForm'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row>
                        <Col>
                            <Form.Label>Saņemšanas datums</Form.Label>
                            <Form.Control onChange={(event) => {
                                setStartDate(event.target.value)
                            }} 
                            className='crInputDouble'
                            type="text" 
                            placeholder="No" 
                            required
                            />
                        </Col>
                        <Col>
                            <Form.Label>Atdošanas datums</Form.Label>
                            <Form.Control onChange={(event) => {
                                setEndDate(event.target.value)
                            }} 
                            className='crInputDouble'
                            type="text" 
                            placeholder="Līdz"
                            required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Nomnieka vārds</Form.Label>
                            <Form.Control onChange={(event) => {
                                setName(event.target.value)
                            }} 
                            className='crInputDouble'
                            type="text" 
                            placeholder="Vārds"
                            />
                        </Col>
                        <Col>
                            <Form.Label>Nomnieka uzvārds</Form.Label>
                            <Form.Control onChange={(event) => {
                                setLastName(event.target.value)
                            }} 
                            className='crInputDouble'
                            type="text" 
                            placeholder="Uzvārds"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Nomnieka tel. num.</Form.Label>
                            <Form.Control onChange={(event) => {
                                setPhone(event.target.value)
                            }} 
                            className='crInputDouble'
                            type="text" 
                            placeholder="Tel. num."
                            />
                        </Col>
                        <Col>
                            <Form.Label>Nomnieka e-pasts</Form.Label>
                            <Form.Control onChange={(event) => {
                                setEmail(event.target.value)
                            }} 
                            className='crInputDouble'
                            type="text" 
                            placeholder="E-pasts"
                            />
                        </Col>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Nomnieka ID</Form.Label>
                        <Form.Control onChange={(event) => {setImage(event.target.files[0]);uploadImage();}} onClick={uploadImage} type="file" />
                    </Form.Group>
                </Form.Group>
                <Button className='blue_button' onClick={() =>createPost() && props.onHide} variant="primary">Apstiprināt</Button>
                </Form>
        </Modal.Body>
      </Modal>
      
    );
};
  

export default RentalCar;