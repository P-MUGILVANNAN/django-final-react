import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UpdateBook() {
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
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/books/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
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
      .catch(err => {
        console.log(err);
      })
  }, [id]);

  const handleUpdate = async (e)=>{
    e.preventDefault();
    try{
      const updatedBook = {
        title:title,
        author:author,
        description:description,
        price:price,
        published_date:published_date,
        page_count:page_count,
        genre:genre,
        cover_image:cover_image,
        language:language
      }
      const response = await axios.put(`http://127.0.0.1:8000/api/books/${id}/`,updatedBook, {
        headers:{
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res=>{
        alert("Book Updated Successfully");
        navigate('/books');
      })
    }
    catch(error){
      console.log("Failed to update book "+error);
    }
  }

  return (
    <div className='container my-5' style={{ maxWidth: '400px' }}>
      <h2 className="text-center">Update Book</h2>
      <form action="" className='form' onSubmit={handleUpdate}>
        <div className="form-group mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' className='form-control' required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="author" className="form-label">Author:</label>
          <input type="text" name='author' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Enter Author' className='form-control' required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} id="" className='form-control'></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter Price' className='form-control' required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="published_date" className="form-label">Published Date:</label>
          <input type="text" name='published_date' value={published_date} onChange={(e) => setPublishedDate(e.target.value)} placeholder='YYYY-MM-DD' className='form-control' required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="page_count" className="form-label">Page Count:</label>
          <input type="number" name='page_count' value={page_count} onChange={(e) => setPageCount(e.target.value)} placeholder='Enter Page Count' className='form-control' required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="genre" className="form-label">Genre:</label>
          <input type="text" name='genre' value={genre} onChange={(e) => setGenre(e.target.value)} placeholder='Enter Genre' className='form-control' required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="cover_image" className="form-label">Cover Image:</label>
          <input type="text" name='cover_image' value={cover_image} onChange={(e) => setCoverImage(e.target.value)} placeholder='Enter Image URL' className='form-control' required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="language" className="form-label">Language:</label>
          <input type="text" name='language' value={language} onChange={(e) => setLanguage(e.target.value)} placeholder='Enter Language' className='form-control' required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Update</button>
      </form>
    </div>
  )
}

export default UpdateBook