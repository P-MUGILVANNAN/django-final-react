import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetail() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [published_date, setPublishedDate] = useState('');
  const [page_count, setPageCount] = useState(0);
  const [genre, setGenre] = useState('');
  const [cover_image, setCoverImage] = useState('');
  const [language, setLanguage] = useState('');
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/books/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res=>{
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setPublishedDate(res.data.published_date);
      setPageCount(res.data.page_count);
      setGenre(res.data.genre);
      setCoverImage(res.data.cover_image);
      setLanguage(res.data.language);
    })
    .catch(err=>{
      console.log(err);
    })
  }, [id]);
  return (
    <div className='container my-5'>
      <h2 className='text-center text-primary'>Book Detail</h2>
      <div className="card mt-5">
        <img src={cover_image} className='img-fluid' style={{width:'18rem', height:'350px'}} alt="" />
        <div className="card-body">
          <p className="card-text">Title: {title}</p>
          <p className="card-text">Author: {author}</p>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Genre: {genre}</p>
          <p className="card-text">Published Date: {published_date}</p>
          <p className="card-text">Page Count: {page_count}</p>
          <p className="card-text">Language: {language}</p>
          <p className="card-text">Description: {description}</p>
        </div>
      </div>
    </div>
  )
}

export default BookDetail