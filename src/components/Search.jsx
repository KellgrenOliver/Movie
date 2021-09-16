import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getSearch } from "../services/SearchAPI";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

const MoviesGenres = () => {
  // Using useState to set search to welcome
  const [search, setSearch] = useState("welcome");

  // Gets data etc from useQuery
  const { data } = useQuery([`Search`, search], () => {
    return getSearch(search);
  });

  return (
    <div>
      <Container className="py-3">
        {/* Makes input onChange. Input field is listening to the value in the input */}
        <input
          className={styles.searchbar}
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <div className={styles.cardWrapper}>
          {/* If there is any results from the input then map out the movies */}
          {data &&
            data.results.results.map((movie, i) => (
              <div className={styles.movieCard} key={i}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className={styles.img}
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default MoviesGenres;
