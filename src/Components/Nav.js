import React from 'react'
import Logo from '../images/Uphold-logo.png'
import '../Sass/Nav.sass'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light' style={{ paddingLeft: '20px' }}>
      <a className='navbar-brand d-lg-none' href='#'>
        <img src={Logo} />
      </a>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarToggle'
        aria-controls='navbarToggle'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse justify-content-between' id='navbarToggle'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Personal
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Business
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Partners
            </a>
          </li>
        </ul>

        <a className='navbar-brand d-none d-lg-block' href='#'>
          <img src={Logo} />
        </a>

        <ul className='navbar-nav'>
        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li className='nav-item'>
            <button id='login-btn'>Log In</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
