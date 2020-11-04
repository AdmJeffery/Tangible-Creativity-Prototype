import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button className="btn-primary btn-lg m-3" onClick={loginWithRedirect}>Log in</button>
  );
}

export default LoginButton;