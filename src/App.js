
import * as React from 'react';
import { movies } from './Movies';
import { useState, useEffect } from 'react';
import basket from ".//shopping-cart.png"


import './App.scss';




function App() {

//SEARCH FUNCTION//

const [query, setQuery] = useState([]);

//GENRE FILTER FUNCTION//

const [filteredList, setFilteredList] = useState(movies);
const [selectedBrand, setSelectedBrand] = useState("");

const filterByBrand = (filteredData) => {
   
    if (!selectedBrand) {
      return filteredData;
    }

const filteredMovies= filteredData.filter(
      (movie) => movie.Genre.split(" ").indexOf(selectedBrand) !== -1
    );
    return filteredMovies;
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  useEffect((filteredByBrand) => {
    var filteredData = filterByBrand(movies);
    setFilteredList(filteredData);
  }, );

//SORT FUNCTION//

const [data, setData] = useState([]);
const [sortType, setSortType] = useState('movies');


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

    <>
    <div className="App">
        <section className="Navbar">
          <div className="header">
            
            <div className="searchbar">
              <input
                className="search"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value.toLowerCase())} />
            </div>
            <h1>DiscountDVD.com</h1>
            <img src={basket} className="basket" alt="" />
          </div>
        </section>


        <section className="search-results-container">
          <ul className="search-list">
            {movies.filter((asd) => asd.Title.toLowerCase().includes(query)).map((movie) => (
              <li className="movie">
                <div key={movie.id}>
                  <img src={movie.Poster} alt={movie.Title} />
                  <h2 id="title">{movie.Title}</h2>
                </div>
                <div className="movie-over">
                  <h3>{movie.Genre}</h3>
                  <p className="plot">{movie.Plot}</p>
                  <p className="price">£{movie.Price}
                  <button onClick={() => (movie)}>Add to Cart</button>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="genre-button-container">
          <div className="filter-text">What are you in the mood for..?
            <select
              id="brand-input"
              value={selectedBrand}
              onChange={handleBrandChange}>
              <option id="selector" value="null">Select</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Adventure">Adventure</option>
              <option value="Crime">Crime</option>
              <option value="Comedy">Comedy</option>
              <option value="null">Clear Search</option>
            </select>
          </div>
        </section>
        <section className="genre-container">
          <ul class="movie-container">
            {filteredList.map((item) => (
              <li className="movie">
                <div key={item.id}>
                  <img src={item.Poster} alt={item.Title} />
                  <h2 id="title">{item.Title}</h2>
                  <h4>Price: {item.Price}</h4>
                </div>
                <div className="movie-over">
                  <h3>{item.Genre}</h3>
                  <p className="plot">{item.Plot}</p>
                  <p className="price">£{item.Price}
                  <button onClick={() => (item)}>Add to Cart</button>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>


        <section>
          <div className="filter-text">Feeling stingy or old..?
            <div className='filter-button'>
              <select className="brand-input" onChange={(e) => setSortType(e.target.value)}>
                <option value="">Touch Me</option>
                <option value="Price">Price (high : low)</option>
                <option value="Year">Year(new : old)</option>
              </select>
            </div>
          </div>
        </section>
        <section>
          <div className="movie-container">
            <div className="sort-container">
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
                      <p className="plot">{movie.Plot}</p>
                  <p className="price">£{movie.Price}
                  <button onClick={() => (movie)}>Add to Cart</button>
                  </p>
                </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="footer">
        </div>
      </div></>
  
      
      

  
  );
}
   
export default App;
