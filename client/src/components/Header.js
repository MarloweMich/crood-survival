import React from 'react'
import Auth from '../utils/auth';
import "./Header.css";

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
              Crood Survival
              <br></br>
              <button className="logoutButton" onClick={logout}>
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