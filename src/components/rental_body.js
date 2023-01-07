import React from 'react'
import { Container, Row } from 'react-bootstrap';
import RentalCar from './rental_car';

import '../css/rental_body.css'

function RentalBody() {
  return (
    <div className='rental-body'>
        <Container>
            <Row></Row>
        </Container>
    </div>
  )
}

export default RentalBody;