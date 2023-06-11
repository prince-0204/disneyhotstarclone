import './MovieScreen.css'
import './Landing.css'
const MovieScreen = () => {
    return ( 
        <div className="MovieScreen">
                <div className="loginBar">
                    <div className="loginBaritem logo"><img src = "http://localhost:3000/logo.svg" /></div>
                    <div className='loginBaritem LoginButton'><button>Login</button></div>
                </div>
                <div className="MainScreenContent">
                    <div className="MovieName">
                        <img src='http://localhost:3000/Raya.png'></img>
                    </div>
                    <div className="MovieButtons">
                        <button id="Play-btn">
                            <img src="http://localhost:3000/play-icon-black.png" alt="" />
                            <span>PLAY</span>
                        </button>
                        <button id="Trailer-btn">
                        <img src="http://localhost:3000/play-icon-white.png" alt="" />
                            <span>TRAILER</span>
                        </button>
                        <img src = "http://localhost:3000/watchlist-icon.svg" width={"36px"}></img>
                    </div>
                    <div className="Movie-Desc">
                        2021 • 1h 52m • Family, Fantasy, Animation, Action-Adventure<br></br>
                        Watch with Premier Access at the same time it's in open theaters and before it's available to all Disney+ subscribers on June 4, 2021.
                    </div>
                </div>
        </div>
        
     );
}
 
export default MovieScreen;