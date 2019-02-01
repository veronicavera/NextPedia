import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    const footerStyle = {
      bottom: '0',
      position: 'sticky',
      width: '100%',
      paddingTop: '1vh'
    };

    const liStyle = {
      margin: '50px'
    };

    const copyrightStyle = {
      fontSize: '0.7rem'
    };

    return (
      <footer
        style={footerStyle}
        className='footer d-flex justify-content-center bg-light'
      >
        <div>
          <Link className='footer-link' style={liStyle} to='/About'>
            About
          </Link>
          <Link className='footer-link' style={liStyle} to='/FAQ'>
            FAQ
          </Link>
          <Link className='footer-link' style={liStyle} to='/Contact'>
            Contact
          </Link>
          <br />
          <div
            className='footer-copyright text-center py-2'
            style={copyrightStyle}
          >
            © 2019 Copyright:
            <a
              className='footer-copyright'
              href='https://github.com/veronicavera/NextPedia'
            >
              {' '}
              NextPedia
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
