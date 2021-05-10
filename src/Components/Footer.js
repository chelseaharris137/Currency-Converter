import React from 'react'
import FooterLogo from '../images/footer-logo.png'
import Icons from '../images/app-icon.png'
import '../Sass/Footer.sass'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row mt-5' id='mobile-row2'>
          <hr />
          <br />
          <br />
        </div>
        <div className='row mt-4' id='mobile-row'>
          <div className='col-lg-2 col-md-4 col-6 col-sm-6 '>
            <img src={FooterLogo} />
          </div>
          <div className='col-lg-2 col-md-4 col-6 col-sm-6 mt-3'>
            <h5>Products</h5>
            <ul>
              <li>Consumers</li>
              <li>Business</li>
              <li>Partners</li>
              <br />
            </ul>
          </div>
          <div className='col-lg-2 col-md-4 col-6 col-sm-6 mt-3'>
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
              <br />
            </ul>
          </div>
          <div className='col-lg-2 col-md-4 col-6 col-sm-6 mt-3'>
            <h5>Help</h5>
            <ul>
              <li>FAQ &amp; Support</li>
              <li>Platform Status</li>
              <li>Criptionary</li>
              <li>Pricing</li>
              <li>Legal</li>
              <br />
            </ul>
          </div>
          <div className='col-lg-2 col-md-4 col-6 col-sm-6 mt-3'>
            <h5>Social</h5>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <br />
            </ul>
          </div>
          <div className='col-lg-2 col-md-4 col-6 col-sm-6 mt-3'>
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
          </div>
        </div>
        <div className='row' id='mobile-row2'>
          <div className='col'>
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
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
