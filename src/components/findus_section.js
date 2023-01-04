import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillPinMapFill, BsFillTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';

import '../css/findus_section.css'

import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';

function FindUsSection(){
    return(
            <div className='findusSection'>
                <Container>
                    <Row>
                    <h1> Kā <span style={{color:"#3AA8E7"}}>mūs</span> atrast?</h1>

                    </Row>
                    <Row>
                        <Col>
                            <BsFillPinMapFill size={56} />
                            <h4 className='city'>Rīga,<br/> Valdlauču iela 8</h4>
                            <h6 className='postal'>LV-1076</h6>
                        </Col>
                        <Col>
                            <BsFillTelephoneFill size={56}/>
                            <h4 className='call'>Vai zvanot:</h4>
                            <h6 className='number'>+371 29275712</h6> 
                            <h6 className='number'>+371 20116677</h6>
                        </Col>
                        <Col>
                            <BsEnvelopeFill size={56} />
                            <h4 className='city'>E-pasts:</h4>
                            <h6 className='postal'>ivonaplus@inbox.lv</h6>
                        </Col>

                    </Row>
               
                    <Image className='findusImg' src='https://i.ibb.co/Df4vRnH/serviss.png'></Image>

                </Container>
            </div>
    );
}

export default FindUsSection;