import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Footer } from "../components/Footer";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      history.push("/");
    } catch {
      setError("Failed to create an account");
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
          <h2>Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit} className="login-form">
            <input
              placeholder="Your name"
              id="name"
              className="name"
              type="text"
              ref={nameRef}
              required
            />
            <input
              placeholder="Email address"
              id="email"
              className="email"
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
            <input
              placeholder="Confirm Password"
              id="password"
              className="password"
              type="password"
              ref={passwordConfirmRef}
              required
            />
            <button
              disabled={loading}
              className="log-button"
              type="submit"
              id="submit"
            >
              Sign Up
            </button>
            <p className="message">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
