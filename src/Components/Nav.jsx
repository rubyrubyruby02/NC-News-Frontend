import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
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
                aria-expanded="false"
              >
                Topics
              </p>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/articles?topic=cooking">
                  <span className="dropdown-item">Cooking</span>
                </Link>
                <Link to="/articles?topic=coding">
                  <span className="dropdown-item">Coding</span>
                </Link>
                <Link to="/articles?topic=football">
                  <span className="dropdown-item">Football</span>
                </Link>
                <Link to="/articles">
                  <span className="dropdown-item">All Topics</span>
                </Link>
              </div>
            </li>

            <Link to="/user">
            <li className="nav-item active">
              <p className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </p>
            </li>
            </Link>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
