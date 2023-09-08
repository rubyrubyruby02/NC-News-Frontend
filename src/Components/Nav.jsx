import { Link } from "react-router-dom"; 

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/">
              <p className="nav-link">Home</p>
            </Link>
          </li>

          <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Topics
              </p>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/articles?topic=cooking">
              <span className="dropdown-item">
                Cooking
              </span>
            </Link>
            
            <Link to="/articles?topic=coding">
              <span className="dropdown-item">
                Coding
              </span>
            </Link>
           
            <Link to="/articles?topic=football">
              <span className="dropdown-item">
                Football
              </span>
            </Link>

              <Link to="/articles">
                <span className="dropdown-item">
                  All Topics
                </span>
            </Link>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
