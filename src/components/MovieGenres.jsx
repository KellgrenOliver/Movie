import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useQuery } from "react-query";
import { getMoviesByGenre } from "../services/API";
import { Link, useParams } from "react-router-dom";
import styles from "../css/Movie.module.css";
import headerStyles from "../css/Headers.module.css";

const MoviesGenres = () => {
  const [page, setPage] = useState(1);

  const { id } = useParams();

  const { data, error, isError, isLoading, isPreviousData } = useQuery(
    [`moviegenres${id}`, page],
    () => {
      return getMoviesByGenre(id, page);
    }
  );

  // const { data, error, isError, isLoading, isPreviousData } = useQuery(
  //   [`moviegenres${id}`, page],
  //   () => getMoviesByGenre(`moviegenres${id}`, page)
  // );

  useEffect(() => {
    console.log(data);
  }, [data]);

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
        <Button
          onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </Button>
        <span>Current Page: {page}</span>

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
      </Container>
    </div>
  );
};

export default MoviesGenres;
