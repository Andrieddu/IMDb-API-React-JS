import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              TMDb
              <i className="fas fa-video" />
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/" className="brand">
                Home
              </Link>
            </li>
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <button className="btn btn-main-signout" onClick={handleLogout}>
                <i className="fas fa-door-open"></i>Log Out
              </button>
            </li>
          </ul>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
      </div>
    </header>
  );
};
