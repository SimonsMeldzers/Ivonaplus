import Button from 'react-bootstrap/Button';


import '../css/blue_button.css'

function BlueButton({text, width, height}){
    return(  
        <Button className='blue_button' style={{ width: width + 'px', height: height + 'px'}}>{text}</Button>  
    );
}

export default BlueButton;
