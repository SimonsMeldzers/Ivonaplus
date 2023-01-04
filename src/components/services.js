
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServicesCard from './services_card';

import '../css/services.css'

function Services(){
    return(
        <div className='services'>
            <h2>Autoserviss piedāvā <span className='colorText'>plašu <br/> pakalpojumu</span> klāstu</h2>
            <div className='servicesCards'>

                <Row className="justify-content-md-center">
                    <Col className='servicesCardsColumn'>
                        <ServicesCard 
                        title={'Test'} 
                        cardImg={'http://site-108810.mozfiles.com/files/108810/medium/13106730_1208157355862028_1895854690_o.jpg'} 
                        cardText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis sem sit amet diam sodales, nec vulputate nulla placerat. Morbi viverra ut arcu et condimentum.'}
                        />
                    </Col>
                    <Col className='servicesCardsColumn'>
                        <ServicesCard 
                        title={'Test'} 
                        cardImg={'http://site-108810.mozfiles.com/files/108810/medium/13106730_1208157355862028_1895854690_o.jpg'} 
                        cardText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis sem sit amet diam sodales, nec vulputate nulla placerat. Morbi viverra ut arcu et condimentum.'}
                        />
                    </Col>
                    <Col className='servicesCardsColumn'>
                        <ServicesCard 
                        title={'Test'} 
                        cardImg={'http://site-108810.mozfiles.com/files/108810/medium/13106730_1208157355862028_1895854690_o.jpg'} 
                        cardText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis sem sit amet diam sodales, nec vulputate nulla placerat. Morbi viverra ut arcu et condimentum.'}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-center secondRow">
                    <Col className='servicesCardsColumn'>
                        <ServicesCard 
                        title={'Test'} 
                        cardImg={'http://site-108810.mozfiles.com/files/108810/medium/13106730_1208157355862028_1895854690_o.jpg'} 
                        cardText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis sem sit amet diam sodales, nec vulputate nulla placerat. Morbi viverra ut arcu et condimentum.'}
                        />
                    </Col>
                    <Col className='servicesCardsColumn'>
                        <ServicesCard 
                        title={'Test'} 
                        cardImg={'http://site-108810.mozfiles.com/files/108810/medium/13106730_1208157355862028_1895854690_o.jpg'} 
                        cardText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis sem sit amet diam sodales, nec vulputate nulla placerat. Morbi viverra ut arcu et condimentum.'}
                        />
                    </Col>
                    <Col className='servicesCardsColumn'>
                        <ServicesCard 
                        title={'Test'} 
                        cardImg={'http://site-108810.mozfiles.com/files/108810/medium/13106730_1208157355862028_1895854690_o.jpg'} 
                        cardText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis sem sit amet diam sodales, nec vulputate nulla placerat. Morbi viverra ut arcu et condimentum.'}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Services;
