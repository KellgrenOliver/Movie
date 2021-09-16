import React from "react";
import { Container, Alert } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenres } from "../services/API";
import styles from "../css/Movie.module.css";
import { Link } from "react-router-dom";

const Genres = () => {
  // Gets data etc from useQuery
  const { data, error, isError, isLoading } = useQuery(["Genres"], () => {
    return getGenres();
  });

  return (
    <div>
      <Container className="py-3">
        {isLoading && <p className="my-3">Loading...</p>}

        {isError && (
          <Alert variant="warning" className="my-3">
            <strong>Error:</strong> {error.message}
          </Alert>
        )}
        {/* If there are any data the map out the genres */}
        <div className={styles.genresWrapper}>
          {data &&
            data.results.genres.map((genre, i) => (
              <div className={styles.genres} key={i}>
                <Link to={`/genre/${genre.id}`}>
                  <p>{genre.name}</p>
                </Link>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Genres;
