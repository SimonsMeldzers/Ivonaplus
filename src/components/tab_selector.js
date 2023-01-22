import React from 'react';
import {Row, Col} from 'react-bootstrap';

import '../css/tab_selector.css'
import { Link } from 'react-router-dom';

function TabSelector({home, rental, carParts}){
    return(
        <div className=''>
                <Row className="tabSelectorRow">
                    <Col className='tabSelectorCol'>
                        <Link to='/'>
                            <button id={home} className='tabSelectorButton'>Auto serviss</button>
                        </Link>
                    </Col>
                    
                    <Col className='tabSelectorCol'>
                        <Link to='/rental'>
                            <button id={rental} className='tabSelectorButton'>Mašīnu noma</button>
                        </Link>
                    </Col>
                    <Col className='tabSelectorCol'>
                        <Link to='/carParts'>
                            <button id={carParts} className='tabSelectorButton'>Rezerves detaļas</button>
                        </Link>
                    </Col>
                </Row>
            
        </div>
    );
}

export default TabSelector;
