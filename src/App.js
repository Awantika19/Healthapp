// src/App.js
import React from 'react';
import { BookmarkProvider } from './contexts/BookmarkContext';
import NewsList from './components/NewsList';
import BookmarkList from './components/BookmarkList';
import Categories from './components/Categories';

const App = () => {
  return (
    <BookmarkProvider >
      <div className="App grid justify-center">
        <h1 className=' bg-red-600 font-bold text-2xl flex m-7 justify-center '>Health News</h1>
     
        <NewsList className='bg-yellow-950' />
        <h2>Bookmarked Articles</h2>
        <BookmarkList />
      </div>
    </BookmarkProvider>
  );
};

export default App;
