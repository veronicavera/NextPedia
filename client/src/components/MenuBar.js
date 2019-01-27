import React, { Component } from 'react';


class MenuBar extends Component {

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <h4 className="nav-link disabled">Username</h4>
                        </li>
                        <li className="nav-item">
                            <h4 className="nav-link disabled">Logout</h4>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default MenuBar;