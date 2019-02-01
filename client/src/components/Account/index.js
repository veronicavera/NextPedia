import React from 'react';
import { AuthUserContext } from '../Session';
import { withAuthorization } from '../Session/';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Welcome to the user dashboard, {authUser.email}!</h1>
      </div>
    )}
  </AuthUserContext.Consumer>
  // <User />
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
