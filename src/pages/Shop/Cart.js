import React, { useContext, useState } from 'react';
import CartContext from '../../Context/CartContext';
import ApiContext from '../../Context/ApiContext';
import { Link } from 'react-router-dom';
import { Input, Image, Form, Segment, Header, Dimmer, Loader, Label, Icon, Step } from 'semantic-ui-react'; // Asegúrate de importar Label
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Cart.css";
import AOS from 'aos';
import finalData from "../../Components/ProductsApi";
import userData from "../../Components/UserApi";
import apiData from "../../Components/PushApi";

AOS.init({
  once: true,
  easing: 'ease-in-out'
});

const Cart = () => {
  const context = useContext(CartContext);
  const contextApi = useContext(ApiContext);
  const lastValue = finalData();
  const userValue = userData();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [validemail, setValidemail] = useState('');
  const [phone, setPhone] = useState('');
  const [show, setShow] = useState(false);

  const increase = (value) => {
    context.upCant(value);
  }

  const decrease = (value) => {
    context.downCant(value);
  }

  const deleteId = (value) => {
    context.eliminarId(value);
  }

  const fullClear = () => {
    context.clear();
  }

  const exitCart = () => {
    setShow(true);
    contextApi.items = context.items;
    contextApi.name = name;
    contextApi.email = email;
    contextApi.phone = phone;
    apiData(contextApi);
    context.clear();
  }

  const mercadoLibre = () => {
    // Tu lógica para MercadoLibre
  }

  let finalPrice = 0;
  context.items.forEach((product) => {
    finalPrice += product.cantidad * product.price;
  });

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleValidEmail = (event) => {
    setValidemail(event.target.value);
  }

  const handlePhone = (event) => {
    setPhone(event.target.value);
  }

  const form = () => {
    return (
      <div className="ui form">
        {/* Formulario y validaciones para nombre */}
        <Form.Field
          required
          id='form-input-control-error-name'
          control={Input}
          label='Nombre completo'
          placeholder='Nombre Completo'
          error={!validName ? 'Ingresa tu nombre válido' : null}
          onChange={handleName}
        />

        {/* Formulario y validaciones para email */}
        <Form.Field
          required
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          placeholder='nombre@mail.com'
          error={!validEmail ? 'Ingresa un correo válido' : null}
          onChange={handleEmail}
        />
        <Form.Field
          required
          id='form-input-control-error-email'
          control={Input}
          label='Re-Email'
          placeholder='nombre@mail.com'
          error={email !== validemail ? 'Los correos no coinciden' : null}
          onChange={handleValidEmail}
        />

        {/* Formulario y validaciones para teléfono */}
        <Form.Field
          required
          id='form-input-control-error-phone'
          control={Input}
          label='Teléfono'
          placeholder='Número'
          error={!validPhone ? 'Ingresa un teléfono válido' : null}
          onChange={handlePhone}
        />

        {/* Botones de compra */}
        {validEmailEmail && validName && validPhone && validEmail && (
          <div>
            <Link to='/cart'>
              <Button style={{ width: '100%', background: '#1C5D99', border: 'none' }} onClick={exitCart}>Transferencia</Button>
            </Link>
            <Button style={{ width: '100%', background: 'grey', marginTop: '10px', border: 'none' }} onClick={mercadoLibre}>MercadoLibre</Button>
          </div>
        )}
      </div>
    );
  }

  const validEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const validName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(name);
  const validPhone = /\b(?:\d[ ]*?){6,}\b/.test(phone);
  const validEmailEmail = email === validemail;

  const products = context.items.map((product, index) => (
    <Segment key={product.id} style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Link style={{ textAlign: 'end' }} to="/cart">
            <Label style={{ background: "#AC1C3C", color: 'white', border: 'none' }} circular onClick={() => deleteId(index)} key={'red'}>X</Label>
          </Link>
          <Col xs={6} sm={6} md={4} lg={3} style={{ display: 'flex', paddingTop: '10px', justifyContent: 'center' }}>
            <Image size='medium' src={`${product.img[0]}`} rounded />
          </Col>
          <Col xs={6} sm={6} md={4} lg={3} className="text-break" style={{ display: 'flex', paddingTop: '10px', justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto' }}><h2>{product.title}</h2></Col>
          <Col md={4} sm={6} lg={3} style={{ display: 'flex', paddingTop: '10px', justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
            <Link style={{ display: 'flex' }} to="/cart">
              <Button variant="outline-dark" style={{ width: '35px' }} onClick={() => decrease(index)}>-</Button>
              <Input style={{ width: '65px', textAlign: 'center' }} value={product.cantidad} />
              <Button variant="outline-dark" style={{ width: '35px' }} onClick={() => increase(index)}>+</Button>
            </Link>
          </Col>
          <Col sm={6} md={8} lg={3} style={{ display: 'flex', paddingTop: '10px', justifyContent: 'center', marginTop: 'auto', marginBottom: 'auto' }}><h2><Label tag size={'big'} as='a'>${product.price * product.cantidad}</Label></h2></Col>
        </Row>
      </Container>
    </Segment>
  ));

  return (
    <div style={{ background: '#EAEAEA' }}>
      {products.length !== 0 ? (
        <Container>
          <Row style={{ padding: '10px 0px 10px 0px' }}>
            <Col style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }} sm={8}>
              <Header as='h2'>
                <Icon name='cart' />
                <Header.Content>Carrito de compras</Header.Content>
              </Header>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
              <Link to="/cart">
                <Button style={{ background: '#AC1C3C', border: 'none' }} onClick={fullClear}>Vaciar</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              {products}
            </Col>
            <Col md={4}>
              {form()}
              <Col md={12}>
                <Col>
                  <Container style={{ padding: '10px' }}>
                    <Row xs={2} md={2}>
                      <Step.Group widths={2} style={{ background: "white" }}>
                        <Step>
                          <Step.Content>
                            <Step.Title>Productos</Step.Title>
                          </Step.Content>
                        </Step>
                        <Step>
                          <Step.Content>
                            <Step.Title>${finalPrice}</Step.Title>
                          </Step.Content>
                        </Step>
                      </Step.Group>
                    </Row>
                    <Row xs={2} md={2}>
                      <Step.Group widths={2} style={{ background: "white" }}>
                        <Step>
                          <Step.Content>
                            <Step.Title>Envio</Step.Title>
                          </Step.Content>
                        </Step>
                        <Step>
                          <Step.Content>
                            <Step.Title>{finalPrice > 10000 ? "$0" : '$1000'}</Step.Title>
                          </Step.Content>
                        </Step>
                      </Step.Group>
                    </Row>
                    <Row xs={2} md={2}>
                      <Step.Group widths={2} style={{ background: "white" }}>
                        <Step>
                          <Step.Content>
                            <Step.Title>Precio final</Step.Title>
                          </Step.Content>
                        </Step>
                        <Step>
                          <Step.Content>
                            <Step.Title>${finalPrice > 10000 ? finalPrice : finalPrice + 1000}</Step.Title>
                          </Step.Content>
                        </Step>
                      </Step.Group>
                    </Row>
                  </Container>
                </Col>
                <Col>
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          {show == true ? (
            <Segment inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical>
              <Dimmer active>
                <Loader>Redirigiendo aguarde unos segundos...</Loader>
              </Dimmer>
            </Segment>
          ) : (
            <Image src="https://firebasestorage.googleapis.com/v0/b/artstation-c28e8.appspot.com/o/EmptyCart-icon.png?alt=media&token=d43cdead-fed5-434e-8d9d-616d04fde055" size="big" rounded centered />
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
