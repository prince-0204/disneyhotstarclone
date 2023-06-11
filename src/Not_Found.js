import {Link} from 'react-router-dom/cjs/react-router-dom.min';
import './Not_Found.css'
const Not_Found = () => {
    return ( 
        <div className="NotFound">
            <Link to = '/home'><button>Go to home</button></Link>
        </div>
     );
}
 
export default Not_Found;