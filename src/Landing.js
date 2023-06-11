import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Landing.css'

const Landing = () => {
    return ( 
        <div className='Landing'>
           <div className="loginBar">
                <div className="loginBaritem logo"><img src = "logo.svg" /></div>
                <div className='loginBaritem LoginButton'><button>Login</button></div>
           </div>
            <div className='CenterPart'>
                <div className='centerPartLogos'>
                    <div className='CenterPartItem'><img src = "hulu.png" height={"75px"} width = {"130px"}></img></div>
                    <div className='CenterPartItem'><img src = "logo.svg" alt = "loading" height={"75px"} width = {"130px"}></img></div>
                    <div className='CenterPartItem'><img src = "ESPN.png" height={"75px"} width = {"130px"}></img></div>
                </div>
                <div><Link to = "/Home"><button><strong>Explore</strong></button></Link></div>
                <div className='CenterPartDescription'>Get premier access to Naya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</div>
                <div className="centerPartLogos">
                    <div className='CenterPartItem'><img src = "viewers-disney.png" height={"50px"} width = {"100px"}></img></div>
                    <div className='CenterPartItem plus'><img src = "watchlist-icon.svg" alt = "loading" height={"20px"} width = {"20px"}></img></div>
                    <div className='CenterPartItem'><img src = "Pixar.png" height={"50px"} width = {"100px"}></img></div>
                    <div className='CenterPartItem plus'><img src = "watchlist-icon.svg" alt = "loading" height={"20px"} width = {"20px"}></img></div>
                    <div className='CenterPartItem'><img src = "marvel.jpg" height={"40px"} width = {"100px"}></img></div>
                    <div className='CenterPartItem plus'><img src = "watchlist-icon.svg" alt = "loading" height={"20px"} width = {"20px"}></img></div>
                    <div className='CenterPartItem'><img src = "StarWars.png" height={"50px"} width = {"100px"}></img></div>
                    <div className='CenterPartItem plus'><img src = "watchlist-icon.svg" alt = "loading" height={"20px"} width = {"20px"}></img></div>
                    <div className='CenterPartItem'><img src = "NatGeoLogo.png" height={"50px"} width = {"100px"}></img></div>
                </div>
            </div>
        </div>
     );
}
 
export default Landing;