import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post("http://127.0.0.1:8000/api/register/",{
        username:username,
        email:email,
        password:password
      });
      alert("User Registered Successfully");
      navigate("/login");
    }
    catch(error){
      alert("Failed to register "+error);
    }
    
  }
  return (
    <div className='container my-5' style={{ maxWidth: '400px' }}>
      <h2 className='text-center text-primary'>Register</h2>
      <form action="" className="form mt-3" onSubmit={handleRegister}>
        <div className="form-group mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username' className='form-control' required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' className='form-control' required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' className='form-control' required />
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary w-100" type='submit'>Register</button>
        </div>
      </form>
      <hr />
      <p className='text-center'>Already have an account? <a href="/login">Login</a></p>
    </div>
  )
}

export default Register