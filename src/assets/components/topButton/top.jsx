import './top.css';
import { FaChevronUp } from "react-icons/fa";
import {Link} from "react-router-dom"

function GoesTop() {
    return(
        <>
            <div className='goTopComponent'>
                <a href='#mainNavbar'><FaChevronUp className="backToTop"/></a>
            </div>
        </>
    );
}

export default GoesTop;