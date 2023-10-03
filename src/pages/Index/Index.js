import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IndexCategory from "../Category/IndexCategory";
import IndexItem from "../Products/IndexItem";

const Home = () => {
  return (
    <div style={{ background: "#EAEAEA" }}>
      <Container>
        <Row>
          <Col>
            <IndexItem />
          </Col>
          <Col>
            <IndexCategory />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;