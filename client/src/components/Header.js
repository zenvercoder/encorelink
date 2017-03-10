import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header({ isLoggedIn, isMusician, logoutUser, user }) {
  const loggedIn = (
    <div>
      Hello, <Link to={isMusician ? '/musicianProfile' : '/organizerProfile'}>
        { user && user.email }
      </Link>
      {' '}
      <Link className="button" to="/dashboard">Dashboard</Link>
      {' '}
      <button className="button" onClick={logoutUser}>Log out</button>
    </div>
  );
  const loggedOut = (
    <Link className="button" to="/login">Log in</Link>
  );
  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <Link to={isLoggedIn ? '/events' : '/'}>
          <img alt="EncoreLink" className="logo-img" src="/public/img/encorelink-logo.png" />
        </Link>
      </div>
      <div className="top-bar-right text-right">
        {isLoggedIn ? loggedIn : loggedOut}
      </div>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isMusician: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  })
};

export default Header;
