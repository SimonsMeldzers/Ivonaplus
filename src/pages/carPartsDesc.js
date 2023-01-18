import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/footer';
import Header from '../components/header';

import '../css/pages_css/carPartsDesc.css'

function CarPartsDesc() {
  return (
    <>
    <Header/>
    <Container>












        <Row>
            <h2 className='title'> Mercedes Sprinter</h2>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel leo risus. Cras at suscipit elit. Quisque semper augue elit, eget pellentesque dui iaculis quis. Proin risus velit, eleifend eget lectus in, malesuada lacinia risus. <br></br>Maecenas sed libero elementum mi feugiat pellentesque. Suspendisse interdum lectus ut consequat hendrerit. In ut rhoncus urna. Fusce risus diam, consequat quis massa sed, aliquam luctus leo. Vivamus eu enim quis lacus vulputate fringilla eget non felis. Quisque tincidunt pharetra ipsum. Nullam pharetra iaculis magna, vitae vehicula ligula condimentum sit amet. Donec ornare nulla ex, vel placerat justo consectetur viverra. Integer maximus imperdiet risus, quis semper felis pharetra eu. Cras eget mauris pulvinar, ornare ipsum in, accumsan urna. Nunc scelerisque orci massa, a eleifend odio condimentum quis. Etiam eget orci gravida, mattis enim non, posuere ipsum. Quisque maximus mi eros, et tincidunt felis pretium ac. Proin ut tincidunt odio.</p>
            <h3 className='price'>4999€</h3>
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
                    <Col><h5 className='info_info'>2004</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>Motors:</h5></Col>
                    <Col><h5 className='info_info'>2.2</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>Ātr. kārba:</h5></Col>
                    <Col><h5 className='info_info'>Manuālā</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>Nobraukums:</h5></Col>
                    <Col><h5 className='info_info'>317 000</h5></Col>
                </Row>
                <Row>
                    <Col><h5 className='info_title'>VIN:</h5></Col>
                    <Col><h5 className='info_info'>XXX-XXXXX-XXXXXX</h5></Col>
                </Row>
            </Col>
        </Row>

    </Container>
    <Footer/>
    </>
  )
}



export default CarPartsDesc;
