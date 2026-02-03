import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    navigate('/login');
  }

  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand text-warning" to="/">BOOK STORE</Link>
        <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto gap-lg-4 mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link text-light fs-5 active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light fs-5" to="/add-book">Add Book</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-light fs-5" to="/books">Books</Link>
            </li>
          </ul>
          <div className="d-flex gap-3">
            <Link to="/login" className='btn btn-primary'>Login</Link>
            <Link to="/register" className='btn btn-primary'>Register</Link>
            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar