import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./Components/Form";
import Navigation from "./Components/Nav";
import Footer from "./Components/Footer";
import "./Sass/App.sass";

const App = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col className="mt-3">
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5">
          <h1>Currency Converter</h1>

          <p className="maincopy">
            <span>
              Receive competitive and transparent pricing with no hidden
              spreads. See how we compare.
            </span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <Form />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
