import './FooterPage.css';
const FooterPage = () => {
    return ( 
        <footer className="FooterPage">
            <div className="Company">
                <h3>Company</h3>
                <div>
                    <a href = "#">About us</a> 
                </div>
                <div>
                    <a href = "#">Carrers</a>
                </div>
            </div>
            <div className="viewWebsite">
                <h3>View Website in</h3>
                <div><a href = "#">English</a></div>
            </div>
            <div className="Needhelp">
                <h3>Need Help?</h3>
                <div><a href = "#">Visit Help center</a></div>
                <div><a href = "#">Share Feedback</a></div>
            </div>
            <div className="ConnectWithUs">
                <h3>Connect with us</h3>
                <img src="facebook.svg" alt="" />
                <img src="twitter.svg" alt="" />
            </div>
            <div className="TermsCondition">
                @2023 STAR. All Rights Reserved.
                <div>
                    <span><a href = "#" >Terms Of Use</a></span>
                    <span><a href = "#" >privacy Policy</a></span>
                    <span><a href = "#" >FAQ</a></span>
                </div>
            </div>
            <div className="Playstoreicons">
                <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt="" />
                <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt="" />
            </div>
        </footer>
     );
}
 
export default FooterPage;