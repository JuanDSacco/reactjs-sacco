import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/routes/ItemListContainer/ItemListContainer">Productos</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar; 