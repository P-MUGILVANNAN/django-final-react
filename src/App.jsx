import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AddBook from './pages/AddBook';
import Books from './pages/Books';
import EditBook from './pages/UpdateBook';
import BookDetails from './pages/BookDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/books' element={<Books />} />
        <Route path='/edit-book/:id' element={<EditBook />} />
        <Route path='/book-details/:id' element={<BookDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App