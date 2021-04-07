import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { ResultCard } from "../components/ResultCard";
import Cards from "../components/UpcomingMovies";
import { Footer } from "../components/Footer";
import { useAuth } from "../context/AuthContext";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { currentUser } = useAuth();

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then((res) => res.data)
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="add-page">
        <div className="container-two">
          <div className="add-content">
            <h1 className="welcome-h1" style={{ color: "white" }}>
              Hello!
            </h1>
            <h3 className="welcome-h3" style={{ color: "white" }}>
              You are now logged in as: {currentUser.email}
            </h3>
            <h1 style={{ color: "white" }}>ADD NOW YOUR FAVOURITE MOVIES</h1>
            <form className="input-wrapper" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search for a movie"
                value={query}
                onChange={handleChange}
              />
              <button id="button-search" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
            <p style={{ color: "white" }}>Powered by TMDb API.</p>
          </div>
        </div>
        <div className="add-content-two">
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <hr />
      </div>
      <Cards />
      <Footer />
    </>
  );
};
