import React from "react";
import { useParams } from "react-router-dom";
import finalData from "../../Components/ProductsApi";
import { Link } from "react-router-dom";
import { Image, Segment, Label, Header, Divider } from "semantic-ui-react";
import Category from "./Category";
import { Container, Row, Col } from 'react-bootstrap';
import ApiDolar from "../../Components/ApiDolar";

const SingleCategory = () => {
  const filterCategory = finalData();
  const dolarApi = ApiDolar();
  const { categoryId } = useParams();
  const newArr = [];

  if (filterCategory !== undefined && dolarApi !== undefined) {
    filterCategory.forEach((b) => {
      if (b.category === categoryId) {
        newArr.push(b);
      }
    });
  }

  const lastFilter = newArr.map((x) => {
    const inStock = x.stock >= 1;

    return (
      <div key={x.id} data-aos-delay='50' data-aos='fade-up' data-aos-offset='100' style={{ width: '14rem' }}>
        <Col style={{ paddingTop: '20px' }}>
          <Segment>
            <div>
              <Header>
                <Link to={`/products/${x.id}`}>
                  <h6 style={{ justifyContent: 'center', display: 'flex' }}>{x.title}</h6>
                </Link>
              </Header>
              <Divider clearing />
              <Link to={`/products/${x.id}`}>
                <Image style={{ height: "150px" }} src={`${x.img[0]}`} rounded centered />
              </Link>
              <Divider clearing />
              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Label style={{ alignSelf: "center" }} circular color={inStock ? 'green' : 'red'} empty key={inStock ? 'green' : 'red'} />
                  <p> {inStock ? `En stock | $${x.price * dolarApi}` : `Sin stock | $${x.price * dolarApi}`}</p>
                </div>
              </div>
            </div>
          </Segment>
        </Col>
      </div>
    );
  });

  return (
    <Container style={{
      maxWidth: '100%',
      paddingRight: '0px',
      paddingLeft: '0px',
      marginRight: 'auto',
      marginLeft: 'auto',
    }}>
      <Row>
        <Col md={2}><Category /></Col>
        {filterCategory === undefined ? (
          <div>
            Cargando
          </div>
        ) : (
          <Col md={10}>
            <Container style={{ maxWidth: '100%' }}>
              <Row style={{ maxWidth: '100%', justifyContent: 'center' }}>
                {lastFilter}
              </Row>
            </Container>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SingleCategory;