import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Container, Button, Nav, Form, FormControl } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useCartContext } from "../../Context/CartContext"; 

const Navigation = () => {
  const context = useCartContext(); 
  return (
    <Navbar style={{ background: "#222222" }} expand="lg">
      <Container fluid style={{ justifyContent: "center" }}>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle
          style={{ backgroundColor: "white" }}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <div style={{ padding: "10px 0px 10px 0px" }}>
              <Button
                style={{ width: "95%" }}
                className="btn ui animated button"
                type="button"
              >
                <Link to="/">
                  <div className="visible content">Inicio</div>
                  <div className="hidden content">
                    <i className="left arrow icon"></i>
                  </div>
                </Link>
              </Button>
            </div>

            <div style={{ padding: "10px 0px 10px 0px" }}>
              <Button
                style={{ width: "95%" }}
                className="btn ui animated button"
                type="button"
              >
                <Link to="/category">
                  <div className="visible content">Categorias</div>
                  <div className="hidden content">
                    <i className="tasks icon"></i>
                  </div>
                </Link>
              </Button>
            </div>

            <div style={{ padding: "10px 0px 10px 0px" }}>
              <Button
                style={{ width: "95%" }}
                className="btn ui animated button"
                type="button"
              >
                <Link to="/products">
                  <div className="visible content">Productos</div>
                  <div className="hidden content">
                    <i className="tag icon"></i>
                  </div>
                </Link>
              </Button>
            </div>

            <div style={{ padding: "10px 0px 10px 0px" }}>
              <Button
                style={{ width: "95%" }}
                className="btn ui animated button"
                type="button"
              >
                <CartWidget />
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;