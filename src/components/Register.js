import React, { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const emailRef = useRef();
  const genderRef = useRef();
  const roleRef = useRef();
  const passwordRef = useRef();
 

  function handleRegister(e) {
    //e.preventDefault();
    const userObj = {
      userEmail: emailRef.current.value,
      userGender: genderRef.current.value,
      userRole: roleRef.current.value,
      password: passwordRef.current.value,
     
    };
    axios({
      url: "http://localhost:5070/register",
      method: "POST",
      data: userObj,
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        
        alert(resp.data.message);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <form id="page">
        <h2>Register</h2>
        <div id="reg">
          <label htmlFor="User Name" className="reg">
            User Name
          </label>
          <input
            type="text"
            id="User name"
            placeholder="Enter your user name"
            required
          ></input>
        </div>

        <div id="reg">
          <label htmlFor="userEmail">E-mail</label>
          <input
            type="Email"
            id="userEmail"
            ref={emailRef}
            placeholder="Enter your E-mail id"
            required
          ></input>
        </div>
        <div id="reg">
          <label htmlFor="Gender">Gender</label>
          <span>
            <input type="radio" id="radio" name="child" ref={genderRef}></input>Male /
            <input type="radio" id="radio" name="child" ref={genderRef}></input>Female
          </span>
        </div>

        <div id="reg">
          <label htmlFor="Select your role" className="reg">
            Role
          </label>
          <select id="list" required ref={roleRef}>
            <option>Select any one of job role.</option>
            <option>Admin</option>
            <option>Employee</option>
            <option>Job seekers</option>
          </select>
        </div>

        <div id="reg">
          <label htmlFor="Password" className="reg">
            Password
          </label>

          <input
            type="Password"
            id="Password"
            ref={passwordRef}
            placeholder="Enter your password"
            required
          ></input>
        </div>

        <button type="submit" onClick={handleRegister}>
          SignUp
        </button>
        <br></br>

        <p>
          Already you have an account<span id="one">click here </span>
          <Link to="/Login">Login</Link>
        </p>
        <hr></hr>

        <Link to="/">Back to home</Link>
      </form>
    </div>
  );
}

export default Register;
