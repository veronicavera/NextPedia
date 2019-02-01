import React, { Component } from 'react';
import FetchData from '../../utils/userTripsGet.js';
import { AccountPage } from '../../index';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import './user.css';

class User extends Component {
  render() {
    return (
      <div className='container center'>
        <div className='user-content'>
          <div className='row user-greeting'>
            <AccountPage />
          </div>
          <br />
          <React.Fragment>
            <div className='user-dashboard'>
              <br />
              <div className='user-dashboard-info'>
                <div className='row'>
                  <div className='col-md-4'>
                    <h2 className='center'>Create a new trip</h2>
                  </div>
                  <div className='col-md-8'>
                    <h2 className='center'>Manage your trips</h2>
                  </div>
                </div>
                <br />
                <div className='row'>
                  <div className='col-md-4'>
                    <Link to={ROUTES.LANDING} className='btn btn-danger'>
                      Go To Flight Finder
                    </Link>
                  </div>
                  <div className='col-md-8'>
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
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default User;
