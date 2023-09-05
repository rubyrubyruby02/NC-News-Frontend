import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul  className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/">
                <p className="nav-link">Home</p>
                </Link>  
            </li>
            <li className="nav-item active">
                <Link to="/topics">
                <p className="nav-link">Topics</p>
                </Link>  
            </li>
            <li className="nav-item active">
                <Link to={`/1/comments`}>
                <p className="nav-link">Comments</p>
                </Link>  
            </li>
        </ul>  
        </nav>
        </>
    )
}

export default Nav
