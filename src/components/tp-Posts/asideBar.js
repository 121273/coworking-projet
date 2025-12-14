import { Link } from "react-router-dom";

const AsideBar = () => {
    return ( 
        <div className="aside" >
            <h3>Menu</h3>
            <ul>
                <li><Link to='/articles'>Articles</Link></li>
                <li><Link to='/about'>About</Link></li>
                
            </ul>
        </div>
    );
}

export default AsideBar;