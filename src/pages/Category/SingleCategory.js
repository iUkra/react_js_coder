import React from 'react';
import { useParams } from 'react-router-dom';
import { Image, Segment, Label, Header, Divider } from 'semantic-ui-react';
import { Container, Row, Col } from 'react-bootstrap';
import Category from './Category';
import ApiDolar from '../../Components/ApiDolar';
import finalData from '../../Components/ProductsApi';

const SingleCategory = () => {
  const filterCategory = finalData();
  const dolarApi = ApiDolar();
  const { categoryId } = useParams();
  
  if (!filterCategory || !dolarApi) {
    return <div>Cargando</div>;
  }

  const filteredProducts = filterCategory.filter(product => product.category === categoryId);

  return (
    <Container style={{ maxWidth: '100%', paddingRight: '0px', paddingLeft: '0px', marginRight: 'auto', marginLeft: 'auto' }}>
      <Row>
        <Col md={2}><Category /></Col>
        <Col md={10}>
          <Container style={{ maxWidth: '100%' }}>
            <Row style={{ maxWidth: '100%', justifyContent: 'center' }}>
              {filteredProducts.map(product => (
                <div key={product.id} data-aos-delay='50' data-aos='fade-up' data-aos-offset='100' style={{ width: '14rem' }}>
                  <Col style={{ paddingTop: '20px' }}>
                    <Segment>
                      <div>
                        <Header>
                          <Link to={`/products/${product.id}`}>
                            <h6 style={{ justifyContent: 'center', display: 'flex' }}>{product.title}</h6>
                          </Link>
                        </Header>
                        <Divider clearing />
                        <Link to={`/products/${product.id}`}>
                          <Image style={{ height: '150px' }} src={`${product.img[0]}`} rounded centered />
                        </Link>
                        <Divider clearing />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <Label style={{ alignSelf: 'center' }} circular color={product.stock >= 1 ? 'green' : 'red'} empty />
                          <p> {product.stock >= 1 ? `En stock | $${product.price * dolarApi}` : `Sin stock | $${product.price * dolarApi}`}</p>
                        </div>
                      </div>
                    </Segment>
                  </Col>
                </div>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCategory;
