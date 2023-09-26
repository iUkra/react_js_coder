import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Image, Segment, Icon, Divider, Header } from 'semantic-ui-react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartContext from '../../Context/CartContext';
import ApiDolar from '../../Components/ApiDolar';
import finalData from '../../Components/ProductsApi.js';

const ItemDetail = () => {
  // Obtiene los datos y el contexto necesarios
  const dolarApi = ApiDolar();
  const ultimateData = finalData();
  const { productId } = useParams();
  const [contador, setCounter] = useState(1);

  const context = useContext(CartContext);

  // Función para aumentar la cantidad
  const increase = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Función para disminuir la cantidad
  const decrease = () => {
    setCounter((prevCounter) => (prevCounter > 1 ? prevCounter - 1 : 1));
  };

  // Función para agregar al carrito
  const onAdd = () => {
    const selectedItem = ultimateData.find((item) => item.id === productId);
    if (selectedItem) {
      const newItem = {
        img: selectedItem.img,
        id: selectedItem.id,
        cantidad: contador,
        price: selectedItem.price * dolarApi,
        title: selectedItem.title,
        stock: selectedItem.stock,
      };
      context.addItems(newItem);
    }
  };

  // Filtrar el elemento seleccionado
  const filteredItem = ultimateData.find(
    (item) => item.id === productId && item.stock > 0
  );

  return (
    <div style={{ padding: '10px', background: '#EAEAEA' }}>
      {filteredItem ? (
        <div key={filteredItem.id}>
          <Container>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              <Col style={{ height: '10', background: 'white' }} xs={12} md={4}>
                <Image
                  src={`${filteredItem.img[0]}`}
                  size="medium"
                  rounded
                  centered
                />
                <h2>Precio unitario: ${dolarApi * filteredItem.price}</h2>
                <h3>
                  Cantidad:{' '}
                  <Button variant="outline-dark" onClick={decrease}>
                    -
                  </Button>{' '}
                  {contador}{' '}
                  <Button
                    variant="outline-dark"
                    onClick={increase}
                    disabled={contador === filteredItem.stock}
                  >
                    +
                  </Button>{' '}
                  <a style={{ color: 'grey' }}>
                    (Disponibles: {filteredItem.stock})
                  </a>
                </h3>
                <Link to="/cart">
                  <Button
                    style={{ width: '100%', background: '#1C5D99', border: 'none' }}
                    variant="success"
                    onClick={onAdd}
                  >
                    Agregar al carrito
                  </Button>
                </Link>
              </Col>
              <Col xs={12} md={8}>
                <Divider style={{ background: 'white', padding: '10px 0 10px 0' }} horizontal>
                  <Header as="h2">
                    <Icon name="bar chart" />
                    Especificaciones
                  </Header>
                </Divider>
                {/* Renderizar las especificaciones */}
                {filteredItem.f1 && filteredItem.f2 ? (
                  filteredItem.f1.map((item, index) => (
                    <div key={index}>
                      <Segment clearing>
                        <Header as="h3" floated="left">
                          <span>{item}</span>
                          <Divider vertical />
                        </Header>
                        <Header as="h3" floated="right" style={{ backgroundColor: '' }}>
                          <Divider vertical />
                          <span>{filteredItem.f2[index]}</span>
                        </Header>
                      </Segment>
                    </div>
                  ))
                ) : (
                  <h2 style={{ textAlign: 'center' }}>Faltan datos para completar la vista</h2>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div style={{ heigth: '100%' }}>
          <h1>No disponible</h1>
          <Link to={'/'}>
            <Button> Volver</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
