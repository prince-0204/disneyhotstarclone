import './sidebar.css';
import MovieScreen from './MovieScreen';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    return ( 
        // Could not add the transition property as in original website.
        <div className="sidebar">
            <nav className='navbar'>
                <div className="navitems"><a href = "#"><div className="button"><img src = "MySpace-logo.png" height={"20px"} width={"20px"}></img></div></a>My Space</div>
                <div className="navitems"><a href = "#"><div className="button"><img src = "search-icon.svg" height={"20px"} width={"20px"}></img></div></a>Search</div>
                <div className="navitems"><a href = "#"><div className="button"><img src = "home-icon.svg" height={"20px"} width={"20px"}></img></div></a>Home</div>
                <Link to = "/home/movies"><div className="navitems"><div className="button"><img src = "series-icon.svg" height={"20px"} width={"20px"}></img></div>TV</div></Link>
                <div className="navitems"><a href = "#"><div className="button"><img src = "movie-icon.svg" height={"20px"} width={"20px"}></img></div></a>Movies</div>
                <div className="navitems"><a href = "#"><div className="button"><img src = "Sports-logo.svg" height={"20px"} width={"20px"}></img></div></a>Sports</div>
            </nav>
        </div>
     );
}
 
export default Navbar;