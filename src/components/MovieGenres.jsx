import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getMoviesByGenre } from "../services/API";
import { Link, useParams } from "react-router-dom";
import styles from "../css/Movie.module.css";
import headerStyles from "../css/Headers.module.css";

const MoviesGenres = () => {
  const { id } = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["moviegenres", id],
    () => {
      return getMoviesByGenre(id);
    }
  );

  return (
    <div>
      <Container className="py-3">
        {isLoading && <p className="my-3">Loading...</p>}

        {isError && (
          <Alert variant="warning" className="my-3">
            <strong>Error:</strong> {error.message}
          </Alert>
        )}

        <h1 className={headerStyles.header}>GENRE?</h1>

        <div className={styles.cardWrapper}>
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
