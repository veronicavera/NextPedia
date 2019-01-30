import React, { Component } from 'react';
import FetchData from "../../utils/userTripsGet.js"
import { AccountPage } from "../../index"
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import './user.css'

class User extends Component {

    render() {
        const tableStyle = {
            width: "100%",

        }
        const thStyle = {
            border: "1px solid gray",
            padding: "10px",
            textAlign: "center"
        }
        return (
            <div className = 'container-div'>
                <AccountPage />
                <React.Fragment>
                    <div>
                        <br />
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-6"><h2 className="center">Create a new trip</h2></div>
                                <div className="col-md-6"><h2 className="center">Manage your trips</h2></div>
                            </div>
                            <br />
                            <div className="row">
                               <Link to={ROUTES.LANDING} className="btn btn-danger">Create a new trip</Link>
                                <div className="col-md-6">
                                    <table style={tableStyle}>
                                        <thead>
                                            <tr>
                                                <th style={thStyle}>Trip name</th>
                                                <th style={thStyle}>Manage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <FetchData />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

export default User;