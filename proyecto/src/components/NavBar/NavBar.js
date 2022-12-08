import { Link } from "react-router-dom";
import './navBar.css'

const NavBar = () => {
    return (
        <div className="navBar">
            <ul className="lista">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;