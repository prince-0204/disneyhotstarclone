import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import'./Trailers.css'
const Trailers = (props) => {
    const movies = props.movies;
    return ( 
        <div className="TrailerPreview">
            {/* Here we will show trailers of movie with sliders so that user can see a preview along with all the details */}
            <div className="Trailer-list">
            {movies.map((movie)=>(
                <div className="trailer-slider" key={movie.id}>
                    <Link to = {`/movies/${movie.id}`}>
                        <div className="slider-content">
                            <h1 className="movie-title">
                            {movie.title}
                            </h1>
                            <h4 className='movie-subtitle'>
                                {movie.subTitle}
                            </h4>
                            <p className="trailer-desc">
                            {movie.description}
                            </p>
                        </div>
                        <img src={movie.backgroundImg} alt="" />
                    </Link>
                </div>       
                ))}
            </div>
        </div>
     );
}
 
export default Trailers;