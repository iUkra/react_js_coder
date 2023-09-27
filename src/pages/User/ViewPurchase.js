import { Link, useParams } from "react-router-dom";
import OrderApi from "../../Components/OrderApi";
import { Input, Image, Form, Step, Icon, Label, Segment, Header } from 'semantic-ui-react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ViewPurchase = () => {
  const { purchaseId, userId } = useParams();
  const order = OrderApi();
  const container = order?.find(x => x.id === purchaseId);

  if (!container) {
    return (
      <div>
        <h1>No existe dicha compra con ese usuario</h1>
      </div>
    );
  }

  const showContainer = container.items.map(x => (
    <div key={x.id}>
      <Segment style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col xs={6} sm={6} md={4} lg={3} style={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
              <Image size='medium' src={x.img[0]} rounded />
            </Col>
            <Col xs={6} sm={6} md={4} lg={3} className="text-break" style={{ display: 'flex', paddingTop: '10px', justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
              <h2>{x.title}</h2>
            </Col>
            <Col sm={6} md={6} lg={4} style={{ display: 'flex', paddingTop: '10px', justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
              <h2><Label tag size={'big'} as='a'>${x.price}</Label></h2>
            </Col>
            <Col sm={6} md={6} lg={4} style={{ display: 'flex', paddingTop: '10px', justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
              <h3>Cantidad: {x.cantidad}</h3>
            </Col>
          </Row>
        </Container>
      </Segment>
    </div>
  ));

  return (
    <div>
      <div style={{ paddingTop: '10px' }}>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Segment.Group>
                <Segment>Datos importantes</Segment>
                <Segment.Group>
                  {['truck', 'credit card', 'bullhorn'].map((iconName, index) => (
                    <Segment key={index} color='red'>
                      <Step>
                        <Icon name={iconName} />
                        <Step.Content>
                          <Step.Title>{getTitleByIconName(iconName)}</Step.Title>
                          <Step.Description>{getDescriptionByIconName(iconName)}</Step.Description>
                        </Step.Content>
                      </Step>
                    </Segment>
                  ))}
                </Segment.Group>
                <Segment>Email: {userId}</Segment>
                <Segment>Numero de compra: {purchaseId}</Segment>
                <Segment inverted color="black">Cualquier consulta no dude en consultar al +11111111</Segment>
              </Segment.Group>
            </Col>
            <Col xs={12} md={6}>
              <h1>Comprado:</h1>
              {showContainer}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ViewPurchase;

function getTitleByIconName(iconName) {
  switch (iconName) {
    case 'truck':
      return 'Datos de envío';
    case 'credit card':
      return 'Cobro';
    case 'bullhorn':
      return 'Estado';
    default:
      return '';
  }
}

function getDescriptionByIconName(iconName) {
  switch (iconName) {
    case 'truck':
      return 'Cargue sus datos de envío';
    case 'credit card':
      return 'Cargue sus datos para acreditar el pago';
    case 'bullhorn':
      return 'Aquí figura el estado de su pedido';
    default:
      return '';
  }
}
