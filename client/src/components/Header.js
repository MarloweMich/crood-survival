import React from 'react'
import Auth from '../utils/auth';



const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
        <div>
        {Auth.loggedIn() ? (
            <>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              Crood Survival
            </>
          )}
        </div>
    </header>
  );
};

export default Header