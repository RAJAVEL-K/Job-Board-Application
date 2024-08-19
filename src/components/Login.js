import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  
  function  handleLogin(){
    const userObj ={
      userEmail:emailRef.current.value,
      password:passwordRef.current.value,
    };
    axios({
      url:'http://localhost:5070/login',
      method:"POST",
      data:userObj,
      headers:{"Content-Type":"application/json"},
    }).then(resp=>alert(resp.data.message));
  }

  const navigate = useNavigate;

  function navigated() { 
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Login</h2>
      <form id="page" required>
        <div id="rega">
          <label htmlFor=" Email">User Email</label>

          <input
            type="Email"
            id=" Email"
            ref={emailRef}
            placeholder="Enter your user Email"
            required
          ></input>
        </div>
        <div id="rega">
          <label htmlFor="Password">Password</label>

          <input
            type="Password"
            id="Password"
            ref={passwordRef}
            placeholder="Enter your password"
            required
          ></input>
        </div>

        <button onClick={handleLogin}>
          <Link to="/Dashboard" id="dash">
            Login
          </Link>
        </button>

        <p>
          <Link to="/ForgetPassword">ForgetPassword</Link>
        </p>

        <p>
          {" "}
          You have not an account <span id="one">click here </span>
          <Link to="/Register">Register</Link>
        </p>
        <hr></hr>
        <Link to="/">Back to home</Link>
      </form>
    </div>
  );
}

export default Login;
