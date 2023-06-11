import './advertisement.css';
const Advertisement = () => {
    return ( 
        <div className="Advertisement">
            <div className="Banner">
                <div className="Bannerphoto">
                    <a href = "#">
                        <img src = "Advertisement.jpg"></img>
                    </a>
                </div>
                <div className="Bannerdescription">
                    <div><strong>The Night Manager P2</strong></div>
                    <div>Streaming from June 30</div>
                    <div className="Branding">The wait is Over. Who Will Finally Get An Upper Hand?Stay Tuned.</div>
                    <div className="Subscribebutton"><a href = "#"><button>Subscribe</button></a></div>
                </div>
            </div>
        </div>
     );
}
 
export default Advertisement;