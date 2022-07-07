import React from 'react'
import Header from '../templates/Header';
const Register = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <div className="mb-3">
          <h2 className="text-center">Registration Form</h2>
        </div>
        <form action="registerForm" method="post" id="registerForm">
          <div className="form-group mb-3">
            <label for="userEmail" className="form-label">Email Address</label>
            <input type="email" name="userEmail" id="userEmail" className="form-control" placeholder="Enter Here" />
          </div>
          <div className="form-group mb-3">
            <label for="userName" className="form-label">User Name</label>
            <input type="text" name="userName" id="userName" className="form-control" placeholder="Enter Here" />
          </div>
          <div className="form-group mb-3">
            <label for="userPassword" className="form-label">User Password</label>
            <input type="password" name="userPassword" id="userPassword" className="form-control" placeholder="Enter Here" />
          </div>
          <div className="text-center mb-3">
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register