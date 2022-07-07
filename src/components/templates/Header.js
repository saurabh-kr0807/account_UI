import React from "react";

const Header = () => {
  return (
    <>
      <header className="d-flex justify-content-center py-3 bg-dark ">
   
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="/" className="nav-link" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="register" className="nav-link">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a href="login" className="nav-link">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="add-organization" className="nav-link">
              Add Org
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
