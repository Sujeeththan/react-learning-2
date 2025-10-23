import React from 'react'
import { useEffect,useState } from 'react';

function LocalApi() {
     const [books, setBooks] = useState([]);
    
      useEffect(() => {
        fetchBooks();
      }, []);
    
      const fetchBooks = async () => {
        const response = await fetch("http://localhost:2000/api/books/");
        const bookData = await response.json();
        console.log(bookData);
        setBooks(bookData);
      };
  return (
    <div>LocalApi</div>
  )
}

export default LocalApi;