import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useQuery } from "react-query";
import { getMovies } from "../services/API";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

const Movies = () => {
  const [page, setPage] = useState(1);

  const { data, error, isError, isLoading, isPreviousData } = useQuery(
    ["movies", page],
    () => getMovies("movies", page)
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
          <div className="pagination d-flex justify-content-between align-items-center mt-4">
            <Button
              onClick={() =>
                setPage((currentPage) => Math.max(currentPage - 1, 1))
              }
              disabled={page === 1}
            >
              Previous Page
            </Button>
            <span>Current Page: {page}</span>
          </div>

          <Button
            onClick={() => {
              if (!isPreviousData && data.results.next) {
                setPage((currentPage) => currentPage + 1);
              }
            }}
            // Disable the Next Page button until we know a next page is available
            disabled={isPreviousData || !data?.results.next}
          >
            Next Page
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Movies;
