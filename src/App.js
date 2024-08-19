import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgetPassword from "./components/ForgetPassword";
import Dashboard from  "./components/dashboard"
import { Routes, Route } from "react-router-dom";
import Application from "./components/Application";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
        <Route path="/Apply for the job" element={<Application/>}></Route>
        <Route path="/dashboard" element={<Application />}></Route>

      </Routes>
    </div>
  );
}

export default App;
