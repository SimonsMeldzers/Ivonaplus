import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlueButton from './blue_button';
import '../css/info_section.css'

import Image from 'react-bootstrap/Image'

function InfoSection(){
    return(
            <div className='infoSection'>
                <Row>
                    <Col className='infoSectionCol1'>
                        <h2><span style={{color:"#3AA8E7"}}>Palīdzēsim</span> iziet <span style={{color:"#3A8400"}}> CSDD </span> tehnisko apskati!</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin mattis sem sit amet diam sodales, nec vulputate nulla placerat. 
                            Morbi viverra ut arcu et condimentum. Maecenas nulla urna, imperdiet sed 
                            vehicula et, finibus at lorem. Cras tincidunt eros vitae varius gravida. 
                            Suspendisse nec euismod elit.
                            Proin mattis sem sit amet diam sodales, nec vulputate nulla placerat. 
                            Morbi viverra ut arcu et condimentum. Maecenas nulla urna, imperdiet sed vehicula et, finibus at lorem. 
                            Cras tincidunt eros vitae varius gravida. Suspendisse nec euismod elit.
                        </p>
                        <BlueButton text='Sazināties tagad' width='190'/>
                    </Col>
                    <Col className='infoSectionCol2'>
                        <Image className='infoSectionImg' src='https://www.autodna.lv/blog/wp-content/uploads/2020/03/Ko-parbauda-tehniskaja-apskate-autoDNA-titul.jpg'></Image>    
                    </Col>
                </Row>
            </div>
    );
}

export default InfoSection;
