import React from 'react'

function Home() {
  return (
    <div className='container my-5' style={{ maxWidth: '400px' }}>
        <h2 className='text-center text-primary'>Profile</h2>
        <div className="card mt-3">
          <div className="card-body">
            <p className="card-text">Username: {localStorage.getItem("username")}</p>
            <p className="card-text">Email: {localStorage.getItem("email")}</p>
          </div>
        </div>
    </div>
  )
}

export default Home