import React, { Component } from 'react';
import FetchData from '../../utils/userTripsGet.js';
import { AccountPage } from '../../index';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import './user.css';

class User extends Component {
  render() {
    return (
      <div id='backgroundImageContainer'>
        <div className='container center'>
          <div className='user-content'>
            <div className='row user-greeting'>
              <AccountPage />
            </div>
            <br />
            <React.Fragment>
              <div className='user-dashboard'>
                <br />

                <div className='row user-contentrow'>
                  <div className='col-md-3'>
                    <Link
                      to={ROUTES.LANDING}
                      className='btn btn-outline-success'
                    >
                      Go To Flight Finder
                    </Link>
                  </div>
                  <br />

                  <div className='col-md-9'>
                    <table>
                      {/* <table style={tableStyle}> */}
                      <thead>
                        <tr>
                          <th>
                            <h2>Trip name</h2>
                          </th>
                          <th>
                            <h2>Manage</h2>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <FetchData />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
