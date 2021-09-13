import React from "react";
import { Container, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/API";
import { useQuery } from "react-query";
import styles from "../css/Details.module.css";
import Actors from "./Actors";
const DetailMovies = () => {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(["Movie", id], () => {
    return getMovie(id);
  });

  return (
    <Container className="py-3">
      {isLoading && <p className="my-3">Loading...</p>}
      {isError && (
        <Alert variant="warning" className="my-3">
          <strong>Error:</strong> {error.message}
        </Alert>
      )}

      {data && (
        <div className={styles.container}>
          <img
            className={styles.soloImg}
            src={`https://image.tmdb.org/t/p/w300${data.results.poster_path}`}
            alt={data.results.title}
          />
          <h1 className={styles.header}>{data.results.title}</h1>
          <b>{data.results.overview}</b>
          <div className={styles.info}>
            {data &&
              data.results.genres.map((genre, i) => (
                <div key={i}>
                  <p className={styles.marginInfo}>{genre.name}</p>
                </div>
              ))}

            {data &&
              data.results.spoken_languages.map((language, i) => (
                <div key={i}>
                  <p className={styles.marginInfo}>{language.name} </p>
                </div>
              ))}
            <p className={styles.marginInfo}>{data.results.runtime} min</p>
            <p className={styles.marginInfo}>{data.results.release_date}</p>
          </div>
          <Actors id={id} />
        </div>
      )}
    </Container>
  );
};

export default DetailMovies;
