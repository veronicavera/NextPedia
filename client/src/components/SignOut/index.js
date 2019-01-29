import React from 'react';

import { withFirebase } from '../Firebase';

const logOutBtnStyle = {
  lineHeight: 'inherit',
  padding: '0.2rem'
}

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className='btn btn-outline-danger' style={logOutBtnStyle}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);