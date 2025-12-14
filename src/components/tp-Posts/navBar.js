import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <div className="nav-bar">
            <h1>Mon Blog</h1>
            <div>
                <button><Link to='/home'>Acceuil</Link></button>
                <button><Link to='/addPost'>Nouveau Blog</Link></button>
            </div>
        </div>
    );
}

export default NavBar;
