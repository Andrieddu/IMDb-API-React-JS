import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";
import { Navbar } from "../components/Navbar";
import Cards from "../components/UpcomingMovies";
import { Footer } from "../components/Footer";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <>
      <Navbar />
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">WATCHED MOVIES</h1>

            <span className="count-pill">
              {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>

          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type="watched" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in your list, add some!</h2>
          )}
        </div>
        <hr />
      </div>
      <Cards />
      <Footer />
    </>
  );
};
