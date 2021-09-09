import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getTopRatedMovies } from "../services/API";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

const Movies = () => {
  const { data, error, isError, isLoading } = useQuery(
    ["topRatedMovies"],
    () => {
      return getTopRatedMovies();
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

        <div className={styles.cardWrapper}>
          {data &&
            data.moviedata.map((movie, i) => (
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

export default Movies;