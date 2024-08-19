import React from "react";
import { Link } from "react-router-dom";

function dashboard() {
  return (
    <div >
      <h1>welcome to the job board platform</h1>
      <br></br>
      <div id="paged">
        <div>
          <b>Select the job posting</b>
        </div>
        <br></br>
       
            <div>
              <select>
                <option>select any one categiry</option>
                <option><Link to ="/Full stack developer">Full stack developer</Link></option>
                <option><Link to ="/Testing">Testing</Link></option>
                <option><Link to = "/Designer">Designer</Link></option>
              </select>      
            
            </div >
      </div >
      <br></br>
      <Link to="/Apply for the job">Apply for the job</Link>
      <br></br>
      <br></br>
      
      <hr></hr>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default dashboard;
