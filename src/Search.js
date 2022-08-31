import { movies } from './Movies';
import { useState } from 'react';

function Search () {
  const [query, setQuery] = useState([]);
  
  return (
    <><div className="searchbar">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())} />
    </div>
    <ul className="list">
        {movies.filter((asd) => asd.Title.toLowerCase().includes(query)
        ).map((movie) => (
          <li className="movie">
            <div key={movie.id}>
              <img src={movie.Poster} alt={movie.Title} />
              <h2 id="title">{movie.Title}</h2>
              <h4>Price: {movie.Price}</h4>
            </div>
            <div className="movie-over">
              <h3>{movie.Genre}</h3>
              <h2>Plot:</h2>
              <p className="plot">{movie.Plot}</p>
              <button onClick={() => (movie)}>Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul></>
      

)}

export default Search;