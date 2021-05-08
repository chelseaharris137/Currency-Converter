import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Form = () => {
  return (
    <Container className="justify-content-md-center">
      <Row className="form-group">
        <Col xs={12} md={6}>
          <label for="amount">Amount</label>
          <input
            className="form-control"
            type="text"
            id="amount"
            value="Enter amount to be converted"
            onFocus={(e) => {
              e.target.value = "";
            }}
          />
        </Col>
        <Col xs={12} md={6}>
          <label for="currency-type">Currency to convert from:</label>
          <select
            className="form-control"
            id="currency-type"
            v-model="selected"
          >
            <option>-- Please select a currency --</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
