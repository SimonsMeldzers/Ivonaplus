import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../css/tab_selector.css'

function TabSelector(){
    return(
        <div className=''>
                <Row className="tabSelectorRow">
                    <Col className='tabSelectorCol'>
                        <a href='#'>
                            <button className='tabSelectorButton'>Auto serviss</button>
                        </a>
                    </Col>
                    
                    <Col className='tabSelectorCol'>
                        <a href='#'>
                            <button className='tabSelectorButton'>Mašīnu noma</button>
                        </a>
                    </Col>
                    <Col className='tabSelectorCol'>
                        <a href='#'>
                            <button className='tabSelectorButton'>Rezerves detaļas</button>
                        </a>
                    </Col>
                </Row>
            
        </div>
    );
}

export default TabSelector;
