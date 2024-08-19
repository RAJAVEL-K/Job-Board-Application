import React from "react";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function redirect() {
    navigate("/Login");
  }
  function redirectr() {
    navigate("/Register");      
  }

  return (
    <div>
      <h3>Job Board Platform</h3>
      <div>
        <button onClick={redirect}>Login</button>
        <button onClick={redirectr}>SignUp</button>
      </div>
    </div>
  );
}

export default Home;
