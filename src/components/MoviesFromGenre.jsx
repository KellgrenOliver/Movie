import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useQuery } from "react-query";
import { getPages } from "../services/PaginationAPI";
import { Link, useParams } from "react-router-dom";
import styles from "../css/Movie.module.css";
import headerStyles from "../css/Headers.module.css";

const MoviesGenres = () => {
  // Using useState to set page value to 1
  const [page, setPage] = useState(1);
  // Gets id and name from params
  const { id, name } = useParams();

  // Gets data etc from useQuery
  const { data, error, isError, isLoading, isPreviousData } = useQuery(
    [`MoviesFromGenre${id}`, page],
    () => {
      return getPages(id, page);
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

        {/* Writes out genre name */}
        {data && <h1 className={headerStyles.header}>{name.toUpperCase()}</h1>}

        {/* Mapping out movies from a genre */}
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

        {/* If there are any data return pagination */}
        {data && (
          <div className={styles.pagination}>
            {/* Makes a button onClick, when you click you set the value of page to -1. 
          The button dosen't work when you are at page 1 */}
            <Button
              className={styles.button}
              onClick={() =>
                setPage((currentPage) => Math.max(currentPage - 1, 1))
              }
              disabled={page === 1}
            >
              Back
            </Button>
            {/* Writes out the current page */}
            <span className={styles.currentPage}>Current Page: {page}</span>
            {/* Makes a button onClick, when you click you set the value of page to +1. 
          The button dosen't work when you are at page 500 */}
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
