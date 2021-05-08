import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./Components/Form";

const App = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col className="mt-5">
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
