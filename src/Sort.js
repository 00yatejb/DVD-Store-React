import React from 'react';
import { useState, useEffect } from 'react';
import { movies } from './Movies';




function Sort () {



    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('movies');
    const [value, setValue] = useState(null)

    
    useEffect(() => {
        const sortArray = type => {
          const types = {
            Price: 'Price',
            Year: 'Year',
            
        };


          const sortProperty = types[type];
          const sorted = [...movies].sort((a, b) => b[sortProperty] - a[sortProperty]);
          
          setData(sorted);

    
        };
        sortArray(sortType);
      }, [sortType]); 

     

      return (

      <><div className='filter-button'>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="Price">Price (high : low)</option>
            <option value="Year">Year(new : old)</option>
          </select>
          
        </div>
        <ul className="sort-container">
            {data.map(movie => (
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
                </div>
              </li>
            ))}
          </ul></>
      );
    }

    export default Sort;