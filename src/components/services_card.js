import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/services_card.css'

function ServicesCard({title, cardText, cardImg}) {
  return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cardImg} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>
                    {cardText}
                </Card.Text>
                <Button className='cardButton'>Uzzināt vairāk &gt;</Button>
            </Card.Body>
        </Card>
  );
}

export default ServicesCard;
