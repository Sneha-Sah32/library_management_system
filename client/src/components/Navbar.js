
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
      <div className="container-fluid">
        <h4>LIBRARYLYNX</h4>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            
          </ul>

          {isLoggedIn ? (
            <>
            <div className="collapse navbar-collapse">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
              <Link className="nav-link active" to="/book">Books</Link>
            </li>
            </ul>
            </div>
            {/* <div className="collapse navbar-collapse">
             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             <li className="nav-item">
              <Link className="nav-link active" to="/profile"><img src="/images/pfp2.jpg" alt="icon" style={{height:"50px",objectFit:"cover"}} /></Link>
            </li>
            </ul>
            </div> */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/dash"><img src="/images/dash.jpg" alt="dash" style={{height:"50px",objectFit:"cover"}}/></Link>
            </li>
            </ul>
            {/* <button
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              Logout
            </button> */}
            </>
          ) : (
            <>
             <div className="collapse navbar-collapse">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
             <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            </ul>
            </div>

              <Link
                className="btn btn-outline-primary mx-3"
                to="/start"
              >
                Get Started
              </Link>
              <Link
                className="btn btn-outline-primary"
                to="/login"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

