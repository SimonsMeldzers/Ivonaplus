import React, {useState, useEffect} from 'react'
import { Col, Container, Row, Spinner, Image, Figure } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

import Footer from '../components/footer';
import Header from '../components/header';

import ServicesMenu from '../components/servicesMenu';

import '../css/pages_css/servicesCardDesc.css'

function ServicesCardDesc() {
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

      <Container style={{marginTop:'35px'}}>
        <Row>
          <Col lg={3} md={4} xs={0} className='services_menu'>
            <ServicesMenu/>
          </Col>
          <Col lg={9} md={8} xs={12}>
          <div style={{width:'100%', height:'2px', borderRadius:'3px', backgroundColor:'#3AA8E7', marginBottom:'15px'}}></div>
            <Container>
              <Row>
                <Col>
                <Figure>
                  <Figure.Image
                    width={600}
                    alt=""
                    src={services.imageUrl}
                  />
                </Figure>
                </Col>
                <Col>
                  <h2>{services.heading1}</h2>
                  <p>{services.text1}</p>
                </Col>
                <div style={{width:'100%', height:'2px', borderRadius:'3px', backgroundColor:'#3AA8E7', marginBottom:'15px'}}></div>
                <h3>{services.heading2}</h3>
                <p>{services.text2}</p>
                <table>
                  <tbody>
                    {services.bullets.map((bullet, index) => (
                      <tr key={index}>
                        <td>
                          <ul style={{marginBottom:'0px'}}>
                            <li style={{color:'#3AA8E7'}}><span style={{color:'black'}}>{bullet}</span></li>
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Row>
            </Container>
            <div style={{width:'100%', height:'2px', borderRadius:'3px', backgroundColor:'#3AA8E7', marginBottom:'15px', marginTop:'15px'}}></div>

          </Col>
        </Row>
      </Container>
      
    }
    <Footer/>
    </>
  )
}

export default ServicesCardDesc;
