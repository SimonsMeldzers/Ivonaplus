import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlueButton from './blue_button';


import '../css/banner.css'

function Banner({imageUrl}){
    
    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()    
    return( 
        <>
        <div className='banner_container' 
        style={{backgroundImage:`url(${imageUrl})`}}
        >
            <Container>
                <Row className="justify-content-md-center">
                    <Col className='banner_col_1'>
                        <Row className="justify-content-center">
                            <h1 id='banner_heading'> Remonts, noma, detaļas.</h1>
                            <a className='button_a' onClick={executeScroll}>
                                <BlueButton text='Uzzināt vairāk' fontSize='18' height='50' width='180'/>
                            </a>
                        </Row>  
                    </Col>
                    <Col className='banner_col_2'>
                        <Row className="justify-content-center">
                            <p id='banner_paragraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis sem sit amet diam sodales, 
                            nec vulputate nulla placerat. Morbi viverra ut arcu et condimentum. Maecenas nulla urna, imperdiet 
                            sed vehicula et, finibus at lorem. Cras tincidunt eros vitae varius gravida. Suspendisse nec euismod elit.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <div ref={myRef}></div>
        </>
        
    );
}

export default Banner;
