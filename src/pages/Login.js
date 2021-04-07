import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Footer } from "../components/Footer";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login-page">
        <div className="form">
          <h1>
            TMDb
            <i className="fas fa-video" />
          </h1>
          <hr />
          <h2>Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit} className="login-form">
            <input
              placeholder="Email address"
              id="Email"
              className="Email"
              type="text"
              ref={emailRef}
              required
            />
            <input
              placeholder="Password"
              id="password"
              className="password"
              type="password"
              ref={passwordRef}
              required
            />
            <button
              disabled={loading}
              className="w-100"
              type="submit"
              id="submit"
            >
              Log In
            </button>
            <p className="message">
              Need an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
