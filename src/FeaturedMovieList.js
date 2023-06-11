// We will use it as a template to create different section of the movie lists
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './FeaturedMovieList.css'
import MoviesList from './MoviesList';

const FeaturedMovieList = (props) => {
    const movies = props.movies;
    const title = props.title;
    // {movies&&console.log(movies[0].cardImg)};
    // console.log(title);
    return ( 
        <div className='MovieContents'>
            <div className="Category">
                {title}
            </div>
            <div className="SliderList">
                <button className="leftSlider"><img src = "leftArrow.png"/></button>
                <button className="rightSlider"><img src = "rightArrow.png"/></button>
                <div className="card-container">
                    {movies.map((movie)=>(
                        <div className="card" key={movie.id}>
                            <Link to = {`/movies/${movie.id}`}>
                                <img className = "card-img"src = {movie.cardImg}/>
                                <div className="card-body">
                                    {/* <div className="btns">
                                        <button className='watchNow-btn'>Watch Now</button>
                                        <button className='watchlist-btn'><img src = "watchlist-icon.svg" height = {"20px"} width={"20px"}/></button>
                                    </div> */}
                                    <div className="movie-desc">
                                        {movie.description};
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default FeaturedMovieList;