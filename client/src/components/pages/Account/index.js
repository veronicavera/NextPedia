import React from 'react';
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import User from '../User'
import { withAuthorization } from '../Session';

const AccountPage = () => (
  
  <AuthUserContext.Consumer>
    {authUser => ( 
      <div>
        <h4>Welcome Back {authUser.email}</h4>
      </div> 
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);