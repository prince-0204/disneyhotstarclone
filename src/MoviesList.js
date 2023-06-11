import { Link } from "react-router-dom/cjs/react-router-dom";
const MoviesList = (props) => {
    const movies = props.movies;
    return ( 
        <div className="card-container">
            {movies.map((movie)=>(
                <div className="card" key={movie.id}>
                    <Link to = {`/movies/${movie.id}`}>
                        <img className = "card-img"src = {movie.cardImg}/>
                        <div className="card-body">
                            <div className="btns">
                                <button className='watchNow-btn'>Watch Now</button>
                                <button className='watchlist-btn'><img src = "watchlist-icon.svg" height = {"20px"} width={"20px"}/></button>
                            </div>
                            <div className="movie-desc">
                                {movie.description};
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default MoviesList;