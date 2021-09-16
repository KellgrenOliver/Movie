import React from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useQuery } from "react-query";
import { getPages } from "../services/PaginationAPI";
import { Link, useParams } from "react-router-dom";
import styles from "../css/Movie.module.css";
import headerStyles from "../css/Headers.module.css";

const MoviesGenres = () => {
  // Gets id, name and page from params
  let { id, name, page } = useParams();

  // Gets data etc from useQuery
  const { data, error, isError, isLoading } = useQuery(
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
            {/* Don't show the previous link on the first page*/}
            {parseInt(page) !== 1 && (
              <Link
                className={styles.button}
                to={`/genre/${name}/${id}/${parseInt(page) - 1}`}
              >
                Previous
              </Link>
            )}
            <span className={styles.currentPage}>Current Page: {page}</span>
            {/* Don't show the next link on the last page (500) */}
            {parseInt(page) !== 500 && (
              <Link
                className={styles.button}
                to={`/genre/${name}/${id}/${parseInt(page) + 1}`}
              >
                Next
              </Link>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default MoviesGenres;
