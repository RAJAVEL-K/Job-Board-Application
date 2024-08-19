import React from "react";
import { Link } from "react-router-dom";
function Application() {
  return (
    <div>
      <h2>Application</h2>
      <form id="page">
        <div id="regaa">
          <label htmlFor="User Name">User Name</label>

          <input
            type="text"
            id="User name"
            placeholder="Enter your user name"
            required
          ></input>
        </div>
        <div id="regaa">
          <label htmlFor="Email">E-mail</label>

          <input
            type="Email"
            id="Email"
            placeholder="Enter your E-mail id"
            required
          ></input>
        </div>
        <div id="regaa">
          <label htmlFor="Gender">Gender</label>
          <span>
            <input type="radio" id="radio" name="child"></input>Male /
            <input type="radio" id="radio" name="child"></input>Female
          </span>
        </div>
        <div id="regaa">
          <label htmlFor="Select your role">Select any one</label>

          <select id="list" required>
            <option>Select any one of job role.</option>
            <option>Admin</option>
            <option>Employee</option>
            <option>Job seekers</option>
          </select>
        </div>
        <div id="regaa">
          <label htmlFor="Password">Password</label>

          <input
            type="Password"
            id="Password"
            placeholder="Enter your password"
            required
          ></input>
        </div>
        <div id="regaa">
          <label htmlFor="File-upload">File Upload </label>

          <input type="file" id="File-upload"></input>
        </div>

        <button>Submit</button>
        <br></br>
      </form>
      <hr></hr>
      <Link to="/Dashboard">Back</Link>
    </div>
  );
}

export default Application;
