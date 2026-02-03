import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post("http://127.0.0.1:8000/api/login/",{
        username:username,
        password:password
      });
      // set token in local storage
      const token = response.data.access;
      localStorage.setItem("token",token);
      // set username and email in local storage
      localStorage.setItem("username",response.data.username);
      localStorage.setItem("email",response.data.email);
      alert("User Logged In Successfully");
      navigate("/");
    }
    catch(error){
      console.log("Failed to login "+error);
    }
  }

  return (
    <div className='container my-5' style={{ maxWidth: '400px' }}>
      <h2 className="text-center text-primary">Login</h2>
      <form action="" className="form" onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username' className='form-control' required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' className='form-control' required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  )
}

export default Login