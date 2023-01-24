import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';

import '../css/servicesMenu.css';

import ritosa from '../img/ritosa3.png'
import engine from '../img/engine.png'
import brakes from '../img/brakes.png'
import weld from '../img/weld.png'
import paint from '../img/paint.png'
import electrical from '../img/electrical.png'

function ServicesMenu() {

  return (
    <Container className='menu_body'>
            <Row><a href='/services/16LBOxOlDZ8yqNqd5XyI'><p> <Image src={ritosa} width={25} style={{paddingBottom:'5px'}} alt="" /> Ritošās daļas remonts</p></a></Row>
            <Row><a href='/services/QP66PC68EfXHCOjfnEFw'><p><Image src={engine} width={25} style={{paddingBottom:'5px'}} alt="" /> Dzinēja un kārbas remonts</p></a></Row>
            <Row><a href='/services/TWU4yW3hKcE7LDlp0KI7'><p><Image src={brakes} width={25} style={{paddingBottom:'5px'}} alt="" /> Bremžu remontdarbi</p></a></Row>
            <Row><a href='/services/Xw6TCvSb301Fm7MgCNaA'><p><Image src={weld} width={25} style={{paddingBottom:'5px'}} alt="" /> Metināšanas pakalpojumi</p></a></Row>
            <Row><a href='/services/gtwh5u5uSNkA9nVyP1oh'><p><Image src={paint} width={25} style={{paddingBottom:'5px'}} alt="" /> Auto virsbūves remonts un krāošana</p></a></Row>
            <Row><a href='/services/ro3b3uJj92dSNmNUdkZA'><p><Image src={electrical} width={25} style={{paddingBottom:'5px'}} alt="" /> Auto elektronikas bojājumu novēršana</p></a></Row>
    </Container>
  )
}

export default ServicesMenu;