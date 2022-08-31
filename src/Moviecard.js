const Moviecard = ({ movies }) => {
    return (
        <ul>
            {movies.map((item) => (
                <div key={item.Id}>
                <li className="movie">
                    <div key={item.Id}>
                        <img src={item.Poster} alt={item.Title}/>
                        <h2 id="title">{item.Title}</h2>
                        <h4>Price: {item.Price}</h4>
                    </div>
                    <div className="movie-over">
                        <h3>{item.Genre}</h3>
                        <h2>Plot:</h2>
                        <p className="plot">{item.Plot}</p>
                    </div>
                </li>
                </div>
          ))}
       </ul>
    );
  };
  
  export default Moviecard;