
import React from 'react';

const NewsItem = ({ article }) => {
  const defaultImage = "https://via.placeholder.com/600x400?text=No+Image+Available"; // Fallback image

  return (
    <div className="news-item grid gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition w-[90%] mx-auto my-11">
     
      <h2 className="text-5xl font-extrabold text-black px-4 py-2 rounded hover:bg-gray-300 transition  text-justify">
        {article.title}
      </h2>

      <p className="text-gray-600">{article.description}</p>
      <img
        src={article.urlToImage ? article.urlToImage : defaultImage}
        alt={article.title || "Article Image"}
        className="w-[80%] h-auto max-h-64 object-cover rounded-md mx-auto "
        onError={(e) => (e.target.src = defaultImage)} 
      />
      <p className="text-left  ml-[100px]">published at: {article.publishedAt}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-white bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded max-w-2xl mx-auto"
      >
        Read more
      </a>
     
    </div>
  );
};

export default NewsItem;
