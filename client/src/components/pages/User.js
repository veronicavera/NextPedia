import React, { Component } from 'react';

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
                        <div className="col-md-6"><button className="btn btn-danger">Create a new trip</button></div>
                        <div className="col-md-6">
                            <table style={tableStyle}>
                                <thead>
                                    <tr>
                                        <th style={thStyle}>Trip name</th>
                                        <th style={thStyle}>Manage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={thStyle}>Trip to Miami</td>
                                        <td style={thStyle} ><button className="btn btn-info">Manage trip</button></td>
                                    </tr>
                                    <tr>
                                        <td style={thStyle}>Trip to LA</td>
                                        <td style={thStyle}><button className="btn btn-info">Manage trip</button></td>
                                    </tr>
                                    <tr>
                                        <td style={thStyle}>Trip to Seattle</td>
                                        <td style={thStyle}><button className="btn btn-info">Manage trip</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default User;