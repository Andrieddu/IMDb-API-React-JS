import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";
import { Navbar } from "../components/Navbar";
import Cards from "../components/UpcomingMovies";
import { Footer } from "../components/Footer";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <>
      <Navbar />
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">MY WATCHLIST</h1>

            <span className="count-pill">
              {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>

          {watchlist.length > 0 ? (
            <div className="movie-grid">
              {watchlist.map((movie) => (
                <MovieCard movie={movie} type="watchlist" />
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
