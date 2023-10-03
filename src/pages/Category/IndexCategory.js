import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "semantic-ui-react";
import data from "../../Components/ProductsApi";

const IndexCategory = () => {
  const test = data();
  const newCatMarca = [];
  let arr;
  let showCategory;

  if (data() !== undefined) {
    // Mapeo y guardo solamente las 3 variables que me interesan
    test.forEach((a) => newCatMarca.push({ category: a.category, img: a.img[1] }));

    newCatMarca.forEach((x) => {
      if (arr === undefined) {
        arr = [];
        var obj = {};
        obj[x.category] = [x.img];
        arr.push(obj);
      } else {
        arr.forEach((b) => {
          if (b[x.category] !== undefined) {
            b[x.category].push(x.img);
            b[x.category] = [...new Set(b[x.category])];
          } else {
            b[x.category] = [x.img];
          }
        });
      }
    });

    showCategory = arr.map((b) => {
      return (
        <div style={{ background: "white" }} key={Object.keys(b)}>
          {arr.map((items, index) => {
            return (
              <div key={index}>
                <Container>
                  <Row xs={3} md={6} style={{ display: "flex", justifyContent: "center" }}>
                    {Object.keys(items).map((index) => {
                      return (
                        <div style={{ margin: "20px 20px 20px 20px", textAlign: "center" }} key={index}>
                          <Col>
                            {index !== undefined ? (
                              <h2>
                                <Link to={`/category/${index}`}>{index}</Link>
                              </h2>
                            ) : null}
                            {items[index].map((x) => {
                              return (
                                <div key={x}>
                                  <Link to={`/category/${index}`}>
                                    <Image src={`${x}`} size="tiny" rounded centered />
                                  </Link>
                                </div>
                              );
                            })}
                          </Col>
                        </div>
                      );
                    })}
                  </Row>
                </Container>
              </div>
            );
          })}
        </div>
      );
    });
  }

  return (
    <div>
      {test !== undefined ? (
        <div>
          <h1 style={{ textAlign: "center" }}>Categorías</h1>
          {showCategory}
        </div>
      ) : null}
    </div>
  );
};

export default IndexCategory;