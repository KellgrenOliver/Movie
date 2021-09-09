import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getActorsFromMovie } from "../services/API";
import styles from "../css/Actors.module.css";
import { Link } from "react-router-dom";
import Actor from "./Actor";

const Actors = (movie) => {
  const { data, error, isError, isLoading } = useQuery(["Actors"], () => {
    return getActorsFromMovie(movie.id);
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

        <h3>ACTORS</h3>
        <div className={styles.imgWrapper}>
          {console.log(data)}
          {data &&
            data.results.cast.map((cast, i) => (
              <div className={styles.movieCard} key={i}>
                {cast.profile_path && (
                  <Link to={`/actor/${cast.id}`}>
                    <img
                      className={styles.img}
                      src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                      alt={cast.name}
                    />
                  </Link>
                )}
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Actors;
