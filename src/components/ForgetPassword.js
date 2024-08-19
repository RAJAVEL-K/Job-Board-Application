import React from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div>
      <h2>ForgetPassword</h2>
      <form id="page">
        <div id="regp">
          <label htmlFor="User Name">User Name</label>

          <input
            type="text"
            id="User name"
            placeholder="Enter your user name"
            required
          ></input>
        </div>
        <div id="regp">
          <label htmlFor="Email">E-mail</label>

          <input
            type="Email"
            id="Email"
            placeholder="Enter your E-mail id"
            required
          ></input>
        </div>
        <div id="regp">
          <label htmlFor="Select your role">Select any one</label>

          <select id="list" required>
            <option>Select any one of job role.</option>
            <option>Admin</option>
            <option>Employee</option>
            <option>Job seekers</option>
          </select>
        </div>
        <div id="regp">
          <label htmlFor="Password">Password</label>

          <input
            type="Password"
            id="Password"
            placeholder="Enter your password"
            required
          ></input>
        </div>
        
       
        <button>Submit</button>
        <br></br>
       <p> If you want Register (or) SignUp <span id="one">click - </span>
        <Link to="/Register">Register</Link> / <Link to="/Login">Login</Link></p>
        <br></br>
        <hr></hr>
        <Link to="/">Back to home</Link>
    
      </form>
    </div>
  );
}

export default ForgetPassword;
