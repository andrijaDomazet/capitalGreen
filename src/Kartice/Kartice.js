
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
  import Basta1 from './img/basta1.jpg'
  import Basta2 from './img/basta2.jpg'

const Kartice = (props) => {
  return (
    <div>
    <Row>
    <Col>
      <Card>
        <CardImg top width="100%"   />
        <CardBody style={{ backgroundImage: `url(${Basta1})`, backgroundSize: 'cover' , margin:'5px'}}>
          <CardTitle style={{color:'white'}}>Naslov delovanje</CardTitle>          
          <CardText style={{color:'white'}}> Poboljšano razumevanje delovanja i početak upotrebe đubriva su bili važni koraci u pred-industrijskoj i zelenoj revoluciji 20. veka.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card>
        <CardImg top width="100%"  />
        <CardBody style={{ backgroundImage: `url(${Basta2})`, backgroundSize: 'cover' , margin:'5px'}} >
          <CardTitle style={{color:'white'}}>Organska djubriva</CardTitle>          
          <CardText style={{color:'white'}}> Organska đubriva i neka neorganska đubriva dobivena iz ruda, su se koristila vekovima, dok su hemijski sintetisana neorganska đubriva počela da se razvijaju tokom industrijske revolucije.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>

    </Row>
    </div>
  );
};

export default Kartice;


