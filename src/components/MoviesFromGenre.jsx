import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useQuery } from "react-query";
import { getPages } from "../services/PaginationAPI";
import { Link, useParams } from "react-router-dom";
import styles from "../css/Movie.module.css";
import headerStyles from "../css/Headers.module.css";

const MoviesGenres = () => {
  const [page, setPage] = useState(1);

  const { id, name } = useParams();

  const { data, error, isError, isLoading, isPreviousData } = useQuery(
    [`MoviesFromGenre${id}`, page],
    () => {
      return getPages(id, page);
    }
  );

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

        {data && <h1 className={headerStyles.header}>{name.toUpperCase()}</h1>}

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

        {data && (
          <div className={styles.pagination}>
            <Button
              className={styles.button}
              onClick={() =>
                setPage((currentPage) => Math.max(currentPage - 1, 1))
              }
              disabled={page === 1}
            >
              Back
            </Button>
            <span className={styles.currentPage}>Current Page: {page}</span>

            <Button
              className={styles.button}
              onClick={() => {
                if (!isPreviousData && data.results.page) {
                  setPage((currentPage) => currentPage + 1);
                }
              }}
              disabled={isPreviousData || page === 500}
            >
              Next
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default MoviesGenres;
