import React from 'react';
import { AuthUserContext } from '../Session';

import { withAuthorization } from '../Session/';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <></>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
