import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FooterLogo from '../images/footer-logo.png'
import Icons from '../images/app-icon.png'
import '../Sass/Footer.sass'

const Footer = () => {
  return (
    <Container className='main-footer'>
      <Row>
        <hr />
        <br />
        <br />
        <Col xs={6} md={2}>
          <img src={FooterLogo} />
        </Col>
        <Col xs={6} md={2}>
          <h5>Products</h5>
          <ul>
            <li>Consumers</li>
            <li>Business</li>
            <li>Partners</li>
            <br />
          </ul>
        </Col>
        <Col xs={6} md={2}>
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <br />
          </ul>
        </Col>
        <Col xs={6} md={2}>
          <h5>Help</h5>
          <ul>
            <li>FAQ &amp; Support</li>
            <li>Platform Status</li>
            <li>Criptionary</li>
            <li>Pricing</li>
            <li>Legal</li>
            <br />
          </ul>
        </Col>
        <Col xs={6} md={2}>
          <h5>Social</h5>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <br />
          </ul>
        </Col>
        <Col xs={6} md={2}>
          <img src={Icons} />
          <br />
          <select name='language-picker-select' id='language-picker-select'>
            <option lang='de' value='deutsch'>
              Deutsch
            </option>
            <option lang='en' value='english' selected>
              English
            </option>
            <option lang='fr' value='francais'>
              Français
            </option>
            <option lang='it' value='italiano'>
              Italiano
            </option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Uphold Europe Limited, Reg No. 09281410, Registered Office: Suite A, 6 Honduras Street, London, England, EC1Y 0TH
            <br />
            <br />© Uphold 2021. All Rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='#'>Agreements</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='#'>Privacy &amp; Data</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='#'>Cookie&nbsp;Policy</a>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
