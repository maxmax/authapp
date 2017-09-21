import React from 'react';
import { Link } from 'react-router';

const Jumbotron = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>A place to share your knowledge.</p>
        <Link to="register" className="btn btn-outline-primary btn-lg">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Jumbotron;
