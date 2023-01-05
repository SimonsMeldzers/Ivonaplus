import Button from 'react-bootstrap/Button';


import '../css/blue_button.css'

function BlueButton({text, width, height, fontSize, type}){
    return(  
        <Button type={type} className='blue_button' style={{ width: width + 'px', height: height + 'px', fontSize: fontSize + 'px'}}>{text}</Button>  
    );
}

export default BlueButton;
