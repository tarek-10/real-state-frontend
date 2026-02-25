import { useContext, useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.jsx";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>TareqEstate</span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="center-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/list">Posts</Link>
      </div>

      {/* Right Section */}
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser?.avatar || "/noavatar.jpg"} alt="user" />
            <span>{currentUser?.name}</span>

            <Link to="/profile" className="profile">
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}

        {/* Mobile Menu Icon */}
        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <img src="/menu.png" alt="menu" />
        </div>

        {/* Mobile Menu */}
        <div className={open ? "mobileMenu active" : "mobileMenu"}>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link to="/list" onClick={() => setOpen(false)}>
            Posts
          </Link>

          {!currentUser && (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>
                Sign in
              </Link>
              <Link to="/register" onClick={() => setOpen(false)}>
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
