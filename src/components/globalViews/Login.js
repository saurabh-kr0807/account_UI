import React from 'react'
import Header from '../templates/Header';

const Login = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <div className="mb-3">
          <h2 className="text-center">Login Form</h2>
        </div>
        <form action="loginUser" method="post" id="loginForm">
          <div className="form-group mb-3">
            <label for="userId" className="form-label">User Id/Email Id</label>
            <input type="text" name="userId" id="userId" className="form-control" placeholder="Enter Here" />
          </div>
          <div className="form-group mb-3">
            <label for="currentPassword" className="form-label">User Name</label>
            <input type="password" name="currentPassword" id="currentPassword" className="form-control" placeholder="Enter Here" />
          </div>
          <div className="text-center mb-3">
            <button type="submit" className="btn btn-primary mt-3">Log In</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login