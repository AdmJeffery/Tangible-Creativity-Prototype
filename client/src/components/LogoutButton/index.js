import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button className="btn-danger m-3 btn-lg" onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</button>
  );
}

export default LogoutButton;