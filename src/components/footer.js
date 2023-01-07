import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import BlueButton from './blue_button';
import { NavLink } from 'react-router-dom';

import '../css/footer.css'

function Footer(){

    return(
        <>
            <div className='footer_body'>
                <Container>
                    <Row>
                        <Col className='logo_col'>

                            <h2 className='logo'>Ivonaplus</h2>
                            <p className='logo_text'>Lorem ipsum dolor sit amet, nisi arcu  tellus, non tristique leo ipsum id tortor. Mauris sed aliquet orci,Lorem ipsum dolor sit amet, nisi arcu  tellus, non tristique leo ipsum id tortor. Mauris sed aliquet orci.</p>
                            <BlueButton text='Sazināties' fontSize='15' width='125'/>
                        </Col>
                        <Col>

                            <h4 className='contact_header'>Kontakt informācija</h4>
                            <h6 className='contact_number_header'> Tel.num.</h6>
                            <p className='contact_number_paragraph'>+371 29275712</p>
                            <p className='contact_number_paragraph'>+371 20116677</p>
                            <h6 className='contact_number_header'> E-pasts</h6>
                            <p className='contact_number_paragraph'>Ivonaplus@inbox.lv</p>

                        </Col>
                        <Col>

                            <h4 className='links_header'>Mājaslapas saites</h4>
                            <ul className='links_ul'>
                                <li><NavLink className='links' to='/'> Serviss </NavLink></li>
                                <li><NavLink className='links'> Auto Noma </NavLink></li>
                                <li><NavLink className='links'> Rezerves daļas </NavLink></li>
                                <li><NavLink className='links'> Citas Preces </NavLink></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className="copyright">
                <p>©2023 SIA "IVONAPLUS"</p>
            </div>
        </>
    );
}


export default Footer;
