import React, { Component } from 'react';


class Footer extends Component {

    render() {
        const footerStyle = {
            bottom: '0',
            position: 'absolute',
            width: '100%'
        }

        const liStyle = {
            margin: "50px"

        }
        return (


            <footer style={footerStyle} className="footer d-flex justify-content-center" >
                <div>
                    <a style={liStyle}>About</a>
                    <a style={liStyle}>FAQ</a>
                    <a style={liStyle}>Contact</a>

                    <br />
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="https://github.com/veronicavera/NextPedia"> NextPedia</a>
                    </div>
                </div>

            </footer>


        );
    }
}

export default Footer;