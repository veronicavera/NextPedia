import React from 'react';
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../pages/PasswordForget/';
import PasswordChangeForm from '../pages/PasswordChange/';
import User from '../pages/User/';
import { withAuthorization } from '../Session/';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h4>Welcome back {authUser.email}!</h4>
      </div>
    )}
  </AuthUserContext.Consumer>
  // <User />
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
