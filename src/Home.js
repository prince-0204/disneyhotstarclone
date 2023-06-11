import Navbar from './sidebar';
import Advertisement from './advertisement';
import Trailers from './Trailers';
import FeaturedMovieList from './FeaturedMovieList';
import FooterPage from './FooterPage';
import './Home.css';
import useFetch from './useFetch';

const Home = () => {
    const {data:movies,isLoading,error} = useFetch('http://localhost:8000/movies');
    // console.log(films);
    // {films && console.log(films[0].description)};
    return ( 
        <div className="Home">
            {/* When I take cursor to logo then its not turning to pointer */}
            <div className="Logo">
                <div>
                    <a href='#'>
                        <div className='LogoContent'>
                            <img src='logo.svg'/>
                        </div>
                        <div className='LogoContent'>
                            <button>Subscribe</button>
                        </div>
                    </a>
                </div>
            </div>
            <Navbar />
            <div className="content">
                <Advertisement/>
                {error && <div>{error}</div>}
                {isLoading && <div> Loading.......... </div>}
                {movies && <Trailers movies = {movies.filter((movie)=>(movie.type == "trending"))}/>}
                {movies && <FeaturedMovieList movies = {movies} title = "All Films"/>}
                {movies && <FeaturedMovieList movies = {movies.filter((movie)=>(movie.type == "recommend"))} title = "Recommended Movies"/>}
                {movies && <FeaturedMovieList movies = {movies.filter((movie)=>(movie.type == "trending"))} title = "Trending Movies"/>}
                {movies && <FeaturedMovieList movies = {movies.filter((movie)=>(movie.type == "new"))} title = "New Movies"/>}
                {movies && <FeaturedMovieList movies = {movies.filter((movie)=>(movie.type == "original"))} title = "Original Movies"/>}
            </div>
            <FooterPage/>
        </div>
     );
}
 
export default Home;