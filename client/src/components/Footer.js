import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {

    render() {
        const footerStyle = {
            bottom: '0',
            position: 'sticky',
            width: '100%'
        }

        const liStyle = {
            margin: "50px"
        }

        const copyrightStyle = {
            fontSize: '0.7rem'
        }
        return (
            <footer style={footerStyle} className="footer d-flex justify-content-center bg-light" >
                <div>
                    <Link style={liStyle} to='/About'>About</Link>
                    <Link style={liStyle} to='/FAQ'>FAQ</Link>
                    <Link style={liStyle} to='/Contact'>Contact</Link>
                    <br />
                    <div className="footer-copyright text-center py-3" style={copyrightStyle}>© 2019 Copyright:
                        <a href="https://github.com/veronicavera/NextPedia"> NextPedia</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;