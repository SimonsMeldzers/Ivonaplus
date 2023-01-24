import '../css/services.css'
import ServicesBody from './servicesBody';

function Services(){
    return(
        <div className='services'>
            <h2>Autoserviss piedāvā <span className='colorText'>plašu <br/> pakalpojumu</span> klāstu</h2>
            <div className='servicesCards'>
            <ServicesBody></ServicesBody>
                
            </div>
        </div>
    );
}

export default Services;
