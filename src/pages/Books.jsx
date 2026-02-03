import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/books/", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleDelete = async (id)=>{
    try{
      await axios.delete(`http://127.0.0.1:8000/api/books/${id}/`,{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res=>{
        alert("Book Deleted Successfully");
        setBooks(books.filter(book=>book.id!==id));
      })
    }
    catch(error){
      console.log("Failed to delete book "+error);
    }
  }
  return (
    <div className='container my-5'>
      <h2 className='text-center text-primary'>Books</h2>
      <div className="row mt-5 row-gap-4">
        {books.map(book=>{
          return(
            <div className="col-12 col-lg-3 col-md-6 col-sm-6" key={book.id}>
              <div className="card" style={{width:'18rem'}}>
                <img src={book.cover_image} className='img-fluid' style={{width:'18rem', height:'350px'}} alt="" />
                <div className="card-body">
                  <p className="card-text">Title: {book.title}</p>
                  <p className="card-text">Author: {book.author}</p>
                  <p className="card-text">Price: {book.price}</p>
                  <p className="card-text">Genre: {book.genre}</p>
                  <a href={`/book-details/${book.id}`} className="btn btn-primary me-3 mb-3">View Details</a>
                  <a href={`/edit-book/${book.id}`} className="btn btn-primary mb-3">Update Book</a><br />
                  <button onClick={()=>handleDelete(book.id)} className="btn btn-danger">Delete Book</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Books