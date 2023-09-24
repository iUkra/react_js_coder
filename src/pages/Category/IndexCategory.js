import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'semantic-ui-react';
import data from '../../Components/ProductsApi';

const IndexCategory = () => {
  const products = data();

  if (!products) {
    return null;
  }

  const categories = {};

  products.forEach(product => {
    const { category, img } = product;

    if (!categories[category]) {
      categories[category] = [];
    }

    if (!categories[category].includes(img)) {
      categories[category].push(img);
    }
  });

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Categorias</h1>
      {Object.keys(categories).map((category, index) => (
        <div key={index} style={{ background: 'white' }}>
          <Container>
            <Row xs={3} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ margin: '20px 20px 20px 20px', textAlign: 'center' }}>
                <h2>
                  <Link to={`/category/${category}`}>{category}</Link>
                </h2>
                {categories[category].map((img, idx) => (
                  <Col key={idx}>
                    <Link to={`/category/${category}`}>
                      <Image src={`${img}`} size="tiny" rounded centered />
                    </Link>
                  </Col>
                ))}
              </div>
            </Row>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default IndexCategory;
