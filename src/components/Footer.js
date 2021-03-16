import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the TMDB community to receive out latest news of millions of
            movies and TV shows
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form action="https://www.themoviedb.org/signup">
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your email"
              />
              <button className="btn" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>THE BASICS</h2>
              <a href="https://www.themoviedb.org/about">About TMDb</a>
              <a href="https://www.themoviedb.org/about/staying-in-touch">
                Contact Us
              </a>
              <a href="https://www.themoviedb.org/talk">Support Forums</a>
              <a href="https://www.themoviedb.org/documentation/api">API</a>
              <a href="https://status.themoviedb.org">System Status</a>
            </div>
            <div className="footer-link-items">
              <h2>GET INVOLVED</h2>
              <a href="https://www.themoviedb.org/bible">Contribution Bible</a>
              <a href="https://www.themoviedb.org/apps">
                3rd Party Applications
              </a>
              <a href="https://www.themoviedb.org/movie/new">Add New Movie</a>
              <a href="https://www.themoviedb.org/tv/new">Add New TV Show</a>
            </div>
            <div className="footer-link-items">
              <h2>COMMUNITY</h2>
              <a href="https://www.themoviedb.org/documentation/community/guidelines">
                Guidelines
              </a>
              <a href="https://www.themoviedb.org/discuss">Discussions</a>
              <a href="https://www.themoviedb.org/leaderboard">Leadboard</a>
              <a href="https://twitter.com/themoviedb">Twitter</a>
            </div>
            <div className="footer-link-items">
              <h2>LEGAL</h2>
              <a href="https://www.themoviedb.org/terms-of-use">Term of Use</a>
              <a href="https://www.themoviedb.org/documentation/api/terms-of-use">
                API Terms of Use
              </a>
              <a href="https://www.themoviedb.org/privacy-policy">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                TMDb
                <i className="fas fa-video" />
              </Link>
            </div>
            <small className="website-rights">Andrea Lai © 2021</small>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/andrea.lai.988/"
                className="social-icon-link facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/andri3ddu/"
                className="social-icon-link instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com"
                className="social-icon-link youtube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://github.com/Andrieddu"
                className="social-icon-link github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/andrea-lai-82335a115/"
                className="social-icon-link linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
